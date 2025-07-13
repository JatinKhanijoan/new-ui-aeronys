import ViewBookings from "~/components/booking/ViewBookings";
import PageTitle from "~/components/shared/pageTitle";

const Booking = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Bookings"
                description="View and manage your bookings."
            />
            <ViewBookings />
        </div>
    );
};

export default Booking;