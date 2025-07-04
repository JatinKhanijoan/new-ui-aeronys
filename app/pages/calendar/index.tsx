import PageTitle from "~/components/shared/pageTitle";
import {
    aircraftResponse,
    instructorResponse,
    bookingResponse,
    BookingTypes,
} from "~/components/calendar/data";
import { lazy, Suspense } from 'react';
const ResourceTimelineCalendar = lazy(() => import("~/components/calendar/CustomCalendar"));

const CalendarPage = () => {
    // Aircraft resources (exclude null active_status)
    const aircraftResources = aircraftResponse
        .filter(aircraft => aircraft.active_status !== null)
        .map((aircraft, index) => {
            return {
                id: aircraft.aircraft_id,
                title: `${aircraft.registration_number} (${aircraft.type.slice(-4)})`,
                resourceType: 'aircraft' as const,
                order: index,
                extendedProps: {
                    active_status: aircraft.active_status
                }
            }
        });

    // Get unique instructors who have bookings and exist in instructorResponse
    const uniqueInstructors = [...new Set(bookingResponse.bookings.map(booking => booking.instructor_id))];

    const instructorResources = uniqueInstructors
        .map((instructorId, index) => {
            const instructor = instructorResponse.find(inst => inst.user_id === instructorId);
            return instructor ? {
                id: instructorId,
                title: `${instructor.first_name} ${instructor.last_name}`,
                resourceType: 'instructor' as const,
                order: aircraftResources.length + index
            } : null;
        })
        .filter((resource): resource is NonNullable<typeof resource> => resource !== null);

    const resources = [...aircraftResources, ...instructorResources];

    // Helper function to get user names from user_id array
    const getUserNames = (userIds: string[]) => {
        return userIds.map(userId => {
            const user = bookingResponse.memberNames.find(member => member.user_id === userId);
            return user ? `${user.first_name} ${user.last_name}` : 'Unknown User';
        }).join(', ');
    };

    // Generate random colors for events
    const eventColors = [
        '#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6',
        '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1'
    ];

    const allEvents: Array<{
        id: string;
        title: string;
        start: string;
        end: string;
        resourceId: string;
        backgroundColor: string;
        borderColor: string;
        textColor: string;
        extendedProps: {
            bookingId: string;
            type: 'aircraft' | 'instructor';
            linkedResourceId: string;
            bookingType: string;
        }
    }> = [];

    const getBookingTypeCode = (type: string) => {
        // Find the key (short code) by value (booking type)
        for (const [key, value] of Object.entries(BookingTypes)) {
            if (value === type) {
                return key;
            }
        }
        // Return the original type if no match found
        return type;
    };

    aircraftResources.forEach(aircraft => {
        if (aircraft.extendedProps.active_status === false) {
            allEvents.push({
                id: `inactive-${aircraft.id}`,
                title: 'Maintenance',
                start: '2025-07-01T00:00:00.000Z',
                end: '2025-07-01T23:59:59.000Z',
                resourceId: aircraft.id,
                backgroundColor: '#808080',
                borderColor: '#808080',
                textColor: '#ffffff',
                extendedProps: {
                    bookingId: `inactive-${aircraft.id}`,
                    type: 'aircraft',
                    linkedResourceId: '',
                    bookingType: 'maintenance',
                }
            });
        }
    });

    bookingResponse.bookings.forEach((booking, index) => {
        const eventColor = eventColors[index % eventColors.length];
        const userNames = getUserNames(booking.user_id);
        const bookingTypeCode = getBookingTypeCode(booking.type);

        // Aircraft event
        allEvents.push({
            id: booking.booking_id,
            title: `${bookingTypeCode} ${userNames}`,
            start: booking.start_time,
            end: booking.end_time,
            resourceId: booking.aircraft_id,
            backgroundColor: eventColor,
            borderColor: eventColor,
            textColor: '#ffffff',
            extendedProps: {
                bookingId: booking.booking_id,
                type: 'aircraft',
                linkedResourceId: booking.instructor_id,
                bookingType: bookingTypeCode,
            }
        });

        // Instructor event (only if instructor exists in instructorResponse)
        const instructorExists = instructorResponse.find(inst => inst.user_id === booking.instructor_id);
        if (instructorExists) {
            allEvents.push({
                id: `instructor-${booking.booking_id}`,
                title: `${bookingTypeCode} ${userNames}`,
                start: booking.start_time,
                end: booking.end_time,
                resourceId: booking.instructor_id,
                backgroundColor: eventColor,
                borderColor: eventColor,
                textColor: '#ffffff',
                extendedProps: {
                    bookingId: booking.booking_id,
                    type: 'instructor',
                    linkedResourceId: booking.aircraft_id,
                    bookingType: bookingTypeCode,
                }
            });
        }
    });

    return (
        <div className="container mx-auto p-6 h-[200vh]">
            <PageTitle
                title="Calendar"
                description="View and manage flight schedules."
            />
            <Suspense fallback={<div></div>}>
                <ResourceTimelineCalendar
                    resources={resources}
                    events={allEvents}
                />
            </Suspense>
        </div>
    );
};

export default CalendarPage;