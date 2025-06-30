import PageTitle from "~/components/shared/pageTitle";
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarPage = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Calendar"
                description="View and manage flight schedules."
            />
            <FullCalendar
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"

            />
        </div>
    );
};

export default CalendarPage;