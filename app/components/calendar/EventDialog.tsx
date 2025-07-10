import { bookingResponse, instructorResponse, courseResponse, BookingTypeLabels, RESOURCE_COLORS, aircraftResponse } from './data';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '~/components/ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ScrollArea } from '../ui/scroll-area';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import { cn } from '~/lib/utils';
import MultiSelect from '../shared/MultiSelect';

interface EventDetailsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: any | null;
    completeBookingData: any | null;
}

const bookingTypes = [
    { value: "dual", label: "Dual" },
    { value: "solo", label: "Solo" },
    { value: "ground-school", label: "Ground School" },
    { value: "exam", label: "Exam" },
    { value: "private-hire", label: "Private Hire" }
];

const formatUTCDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const parseDateTimeStringUTC = (dateTimeString: string): { date: Date; time: string } => {
    const date = new Date(dateTimeString);

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const utcDate = new Date(Date.UTC(year, month, day, hours, minutes));
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return {
        date: utcDate,
        time: timeString
    };
};

const EventDetailsDialog: React.FC<EventDetailsDialogProps> = ({
    isOpen,
    onClose,
    eventData,
    completeBookingData
}) => {
    if (!eventData || !completeBookingData) return null;

    // Initialize start time state with UTC
    const startDateTime = parseDateTimeStringUTC(completeBookingData.start_time);
    const [startDate, setStartDate] = useState<Date>(startDateTime.date);
    const [startTime, setStartTime] = useState<string>(startDateTime.time);
    const [isStartPopoverOpen, setIsStartPopoverOpen] = useState(false);

    // Initialize end time state with UTC
    const endDateTime = parseDateTimeStringUTC(completeBookingData.end_time);
    const [endDate, setEndDate] = useState<Date>(endDateTime.date);
    const [endTime, setEndTime] = useState<string>(endDateTime.time);
    const [isEndPopoverOpen, setIsEndPopoverOpen] = useState(false);

    const handleStartDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            const [hours, minutes] = startTime.split(':');
            const newDate = new Date(Date.UTC(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                parseInt(hours),
                parseInt(minutes)
            ));
            setStartDate(newDate);
            setIsStartPopoverOpen(false);
        }
    };

    const handleStartTimeChange = (timeValue: string) => {
        setStartTime(timeValue);
        const [hours, minutes] = timeValue.split(':');
        const newDate = new Date(Date.UTC(
            startDate.getUTCFullYear(),
            startDate.getUTCMonth(),
            startDate.getUTCDate(),
            parseInt(hours),
            parseInt(minutes)
        ));
        setStartDate(newDate);
    };

    const handleEndDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            const [hours, minutes] = endTime.split(':');
            const newDate = new Date(Date.UTC(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                parseInt(hours),
                parseInt(minutes)
            ));
            setEndDate(newDate);
            setIsEndPopoverOpen(false);
        }
    };

    const handleEndTimeChange = (timeValue: string) => {
        setEndTime(timeValue);
        const [hours, minutes] = timeValue.split(':');
        const newDate = new Date(Date.UTC(
            endDate.getUTCFullYear(),
            endDate.getUTCMonth(),
            endDate.getUTCDate(),
            parseInt(hours),
            parseInt(minutes)
        ));
        setEndDate(newDate);
    };

    const handleSave = () => {
        console.log("Updated Start Time:", startDate.toISOString());
        console.log("Updated End Time:", endDate.toISOString());
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Booking Details</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label className="font-semibold text-gray-700">Members:</Label>
                        <MultiSelect
                            className='mt-2'
                            options={bookingResponse.memberNames.map(member => ({
                                value: member.user_id,
                                label: `${member.first_name} ${member.last_name}`
                            }))}
                            defaultValues={completeBookingData.user_id}
                            maxSelections={5}
                            placeholder='Search and select users...'
                            onChange={(selectedUsers) => {
                                console.log("Selected user", selectedUsers)
                            }}
                        />
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">Instructor:</Label>
                        <MultiSelect
                            className='mt-2'
                            options={instructorResponse.map(instructor => ({
                                value: instructor.user_id,
                                label: `${instructor.first_name} ${instructor.last_name}`
                            }))}
                            defaultValues={[completeBookingData.instructor_id]}
                            maxSelections={1}
                            placeholder='Search and select instructor...'
                            onChange={(selectedInstructor) => {
                                console.log("Selected instructor", selectedInstructor)
                            }}
                        />
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">Aircraft:</Label>
                        <MultiSelect
                            className='mt-2'
                            options={aircraftResponse.map(aircraft => ({
                                value: aircraft.aircraft_id,
                                label: `${aircraft.registration_number} (${aircraft.type.slice(-4)})`
                            }))}
                            defaultValues={[completeBookingData.aircraft_id]}
                            maxSelections={1}
                            placeholder='Search and select aircraft...'
                            onChange={(selectedAircraft) => {
                                console.log("Selected aircraft", selectedAircraft)
                            }}
                        />
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">Booking Type:</Label>
                        <MultiSelect
                            className='mt-2'
                            options={bookingTypes}
                            defaultValues={[completeBookingData.type]}
                            maxSelections={1}
                            onChange={(selectedType) => {
                                console.log("Selected type", selectedType)
                            }}
                        />
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">Course:</Label>
                        <MultiSelect
                            options={courseResponse.courses.map(course => ({
                                value: course.course_id,
                                label: course.name
                            }))}
                            defaultValues={[completeBookingData.course_id]}
                            onChange={(selectedCourse) => {
                                console.log("Selected course", selectedCourse)
                            }}
                            maxSelections={1}
                        />
                    </div>

                    {/* <div>
                        <Label className="font-semibold text-gray-700">Status:</Label>
                        <p className="text-gray-900 capitalize">{completeBookingData.status}</p>
                    </div> */}

                    <div>
                        <Label className="font-semibold text-gray-700">Start Time:</Label>
                        <div className="flex w-full gap-2 mt-2">
                            <Popover open={isStartPopoverOpen} onOpenChange={setIsStartPopoverOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-1/2 font-normal justify-start text-left",
                                            !startDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {startDate ? format(startDate, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={startDate}
                                        onSelect={handleStartDateSelect}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <Select value={startTime} onValueChange={handleStartTimeChange}>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {Array.from({ length: 96 }).map((_, i) => {
                                            const hour = Math.floor(i / 4).toString().padStart(2, "0");
                                            const minute = ((i % 4) * 15).toString().padStart(2, "0");
                                            const timeValue = `${hour}:${minute}`;
                                            return (
                                                <SelectItem key={i} value={timeValue}>
                                                    {timeValue}
                                                </SelectItem>
                                            );
                                        })}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">End Time:</Label>
                        <div className="flex w-full gap-2 mt-2">
                            <Popover open={isEndPopoverOpen} onOpenChange={setIsEndPopoverOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-1/2 font-normal justify-start text-left",
                                            !endDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={endDate}
                                        onSelect={handleEndDateSelect}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <Select value={endTime} onValueChange={handleEndTimeChange}>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {Array.from({ length: 96 }).map((_, i) => {
                                            const hour = Math.floor(i / 4).toString().padStart(2, "0");
                                            const minute = ((i % 4) * 15).toString().padStart(2, "0");
                                            const timeValue = `${hour}:${minute}`;
                                            return (
                                                <SelectItem key={i} value={timeValue}>
                                                    {timeValue}
                                                </SelectItem>
                                            );
                                        })}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {completeBookingData.reason && (
                        <div>
                            <Label className="font-semibold text-gray-700">Reason:</Label>
                            <p className="text-gray-900">{completeBookingData.reason}</p>
                        </div>
                    )}
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EventDetailsDialog;