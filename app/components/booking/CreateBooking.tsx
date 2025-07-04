import { BookOpen, BookOpenCheck, CircleCheck, Plane, User, Users, CalendarDays, Clock, ChevronRight } from "lucide-react";
import { Label } from "../ui/label";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "~/lib/utils";
import UserSearchBar from "../shared/UsersearchBar";
import { useState } from "react";
import { userResponse } from "./data";
import { courseResponse } from "../calendar/data";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type User = {
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
    email_id: string;
    profile_image_url: string | null;
};

type TimeSlot = {
    id: string;
    start_time: string;
    end_time: string;
    available: boolean;
};

const options = [
    {
        value: "dual",
        label: "Dual",
        description: "Training Lesson",
        icon: <Users className="h-5 w-5" />
    },
    {
        value: "solo",
        label: "Solo",
        description: "Training Lesson",
        icon: <User className="h-5 w-5" />
    },
    {
        value: "ground-school",
        label: "Ground School",
        description: "Training Lesson",
        icon: <BookOpen className="h-5 w-5" />
    },
    {
        value: "exam",
        label: "Exam",
        description: "Exam",
        icon: <BookOpenCheck className="h-5 w-5" />
    },
    {
        value: "private-hire",
        label: "Private Hire",
        description: "Private hire",
        icon: <Plane className="h-5 w-5" />
    },
];

const generateTimeSlots = (date: Date, instructorId?: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 8;
    const endHour = 18;

    for (let hour = startHour; hour < endHour; hour += 2) {
        const startTime = `${hour.toString().padStart(2, '0')}:00`;
        const endTime = `${(hour + 2).toString().padStart(2, '0')}:00`;

        slots.push({
            id: `slot-${hour}`,
            start_time: startTime,
            end_time: endTime,
            available: Math.random() > 0.3 // Random availability for demo
        });
    }

    return slots;
};

const CreateBooking: React.FC = () => {
    const [selectedMembers, setSelectedMembers] = useState<User[]>([]);
    const [selectedInstructor, setSelectedInstructor] = useState<User | null>(null);
    const [selectedType, setSelectedType] = useState<string>(options[0].value);
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);

    const availableSlots = selectedDate && selectedInstructor
        ? generateTimeSlots(selectedDate, selectedInstructor.user_id)
        : [];

    const handleSubmit = () => {
        const availability_id: string[] = selectedSlots.map(slot => slot.id);

        const bookingData = {
            members: selectedMembers,
            instructor: selectedInstructor,
            type: selectedType,
            course: selectedCourse,
            date: selectedDate,
            slots: selectedSlots,
            availability_id,
            booking_details: {
                selected_slots: selectedSlots.map(slot => ({
                    start_time: slot.start_time,
                    end_time: slot.end_time
                })),
                total_duration: `${selectedSlots.length * 2} hours`
            }
        };

        console.log("Booking Details:", bookingData);
        console.log("Availability IDs:", availability_id);
    };

    const isFormComplete = selectedMembers.length > 0 && selectedInstructor && selectedCourse && selectedDate && selectedSlots.length > 0;
    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                Select Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <UserSearchBar
                                users={userResponse.filter((user) => user.role === "member")}
                                onSelectionChange={(users) => {
                                    setSelectedMembers(users);
                                }}
                                isMulti={true}
                            />
                        </CardContent>
                    </Card>

                    {/* Instructor Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Select Instructor
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <UserSearchBar
                                users={userResponse.filter((user) => user.role === "instructor")}
                                onSelectionChange={(users) => {
                                    setSelectedInstructor(users[0] || null);
                                }}
                                isMulti={false}
                            />
                        </CardContent>
                    </Card>

                    {/* Type Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Select Type</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup.Root
                                defaultValue={options[0].value}
                                className="max-w-3xl w-full grid grid-cols-3 gap-4"
                            >
                                {options.map((option) => (
                                    <RadioGroup.Item
                                        key={option.value}
                                        value={option.value}
                                        className={cn(
                                            "relative cursor-pointer group ring-[1px] ring-border rounded py-2 px-3 text-start",
                                            "data-[state=checked]:ring-2 data-[state=checked]:ring-primary",
                                            "space-y-2"
                                        )}
                                    >
                                        {option.icon}
                                        <CircleCheck className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary fill-primary stroke-white group-data-[state=unchecked]:hidden" />
                                        <span className="font-semibold tracking-tight">{option.label}</span>
                                        <p className="text-xs">{option.description}</p>
                                    </RadioGroup.Item>
                                ))}
                            </RadioGroup.Root>
                        </CardContent>
                    </Card>

                    {/* Course Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Select Course</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose a course..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {courseResponse.courses.map((course) => (
                                        <SelectItem key={course.course_id} value={course.course_id}>
                                            {course.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                    {isFormComplete && (
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-base">Booking Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Members</Label>
                                        <p className="font-medium">{selectedMembers.map((member) => `${member.first_name} ${member.last_name}`).join(", ")}</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Instructor</Label>
                                        <p className="font-medium">{selectedInstructor?.first_name} {selectedInstructor?.last_name}</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Type</Label>
                                        <p className="font-medium">{options.find(opt => opt.value === selectedType)?.label}</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Date</Label>
                                        <p className="font-medium">{selectedDate?.toLocaleDateString()}</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Time Slots</Label>
                                        <p className="font-medium">
                                            {selectedSlots.map(slot => `${slot.start_time} - ${slot.end_time}`).join(", ")}
                                        </p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-muted-foreground text-sm">Duration</Label>
                                        <p className="font-medium">{selectedSlots.length * 2} hours</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5" />
                                Select Date
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                disabled={(date) => date < new Date()}
                                className="rounded-md border"
                            />
                        </CardContent>
                    </Card>

                    {selectedDate && selectedInstructor && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5" />
                                    Available Slots
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    {selectedDate.toLocaleDateString()} • {selectedInstructor.first_name} {selectedInstructor.last_name}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {availableSlots.length > 0 ? (
                                        availableSlots.map((slot) => (
                                            <button
                                                key={slot.id}
                                                onClick={() => {
                                                    if (slot.available) {
                                                        setSelectedSlots(prev => {
                                                            const isSelected = prev.some(s => s.id === slot.id);
                                                            if (isSelected) {
                                                                return prev.filter(s => s.id !== slot.id);
                                                            } else {
                                                                return [...prev, slot];
                                                            }
                                                        });
                                                    }
                                                }}
                                                disabled={!slot.available}
                                                className={cn(
                                                    "w-full p-3 rounded-lg border text-left transition-all",
                                                    "hover:bg-accent hover:border-accent-foreground/20",
                                                    slot.available
                                                        ? "cursor-pointer"
                                                        : "cursor-not-allowed opacity-50 bg-muted",
                                                    selectedSlots.some(s => s.id === slot.id)
                                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                                        : "border-border"
                                                )}
                                            >
                                                <CircleCheck className={cn(
                                                    "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary",
                                                    selectedSlots.some(s => s.id === slot.id) ? "block" : "hidden"
                                                )} />
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-medium">
                                                            {slot.start_time} - {slot.end_time}
                                                        </div>
                                                    </div>
                                                    {slot.available ? (
                                                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                            Available
                                                        </div>
                                                    ) : (
                                                        <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                                                            Booked
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <p className="text-center text-muted-foreground py-8">
                                            No slots available for this date
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Submit Button */}
                    <Button
                        onClick={handleSubmit}
                        disabled={!isFormComplete}
                        className="w-full h-12 text-base"
                        size="lg"
                    >
                        Create Booking
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateBooking;