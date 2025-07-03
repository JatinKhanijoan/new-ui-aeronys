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
import MultiSelect from '../shared/MultiSelect';
import { Select } from '../ui/select';

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

const EventDetailsDialog: React.FC<EventDetailsDialogProps> = ({
    isOpen,
    onClose,
    eventData,
    completeBookingData
}) => {
    if (!eventData || !completeBookingData) return null;

    // get course name
    const getCourseName = (courseId: string | null) => {
        if (!courseId) return 'No Course';
        const course = courseResponse.courses.find(c => c.course_id === courseId);
        return course ? course.name : 'Unknown Course';
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

                    <div>
                        <Label className="font-semibold text-gray-700">Status:</Label>
                        <p className="text-gray-900 capitalize">{completeBookingData.status}</p>
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">Start Time:</Label>
                        <p className="text-gray-900">{new Date(completeBookingData.start_time).toLocaleString()}</p>
                    </div>

                    <div>
                        <Label className="font-semibold text-gray-700">End Time:</Label>
                        <p className="text-gray-900">{new Date(completeBookingData.end_time).toLocaleString()}</p>
                    </div>

                    {completeBookingData.reason && (
                        <div>
                            <Label className="font-semibold text-gray-700">Reason:</Label>
                            <p className="text-gray-900">{completeBookingData.reason}</p>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EventDetailsDialog;