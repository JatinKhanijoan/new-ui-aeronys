import CreateBooking from "~/components/booking/CreateBooking";
import PageTitle from "~/components/shared/pageTitle";

export type BookingProps = {
    user_id: string[];
    instructor_id: string;
    aircraft_id: string;
    start_time: string;
    end_time: string;
    type: string;
    status: string;
    reason?: string;
    course_id: string;
}

export interface Aircraft {
    aircraft_id: string;
    registration_number: string;
    type: string;
    active_status?: boolean;
}

export interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
    email?: string;
    profile_image_url?: string;
}

const NewBooking = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="New Booking"
                description="Create a new booking."
            />
            <CreateBooking />
        </div>
    );
};

export default NewBooking;