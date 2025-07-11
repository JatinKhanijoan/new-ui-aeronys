import ViewMaintenance from "~/components/maintenance/ViewMaintenance";
import PageTitle from "~/components/shared/pageTitle";

const Maintenance = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Maintenance"
                description="Manage flight maintenance"
            />
            <ViewMaintenance />
        </div>
    );
};

export default Maintenance;