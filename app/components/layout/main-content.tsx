import { useDashboardFor } from '~/provider/DashboardForProvider'
import AdminDashboard from '../dashboard/admin'
import { cn } from '~/lib/utils'

const MainContent = () => {
    const { userRole } = useDashboardFor();

    const renderRoleContent = () => {
        switch (userRole) {
            case 'admin':
                return renderAdminContent();
            case 'instructor':
            case 'restricted-instructor':
                return renderInstructorContent();
            case 'ops':
                return renderOpsContent();
            case 'member':
                return renderMemberContent();
            case 'non-member':
                return renderNonMemberContent();
            case 'cfa':
                return renderCFAContent();
            default:
                return renderAdminContent();
        }
    };

    const renderAdminContent = () => {
        return (
            <AdminDashboard rightSidebarOpen={false} />
        );
    };

    const renderInstructorContent = () => {
        return (
            <></>
        );
    };

    const renderOpsContent = () => {
        return (
            <></>
        );
    };

    const renderMemberContent = () => {
        return (
            <></>
        );
    };

    const renderNonMemberContent = () => {
        return (
            <></>
        );
    };

    const renderCFAContent = () => {
        return (
            <></>
        );
    };

    return (
        <div
            className={cn(
                "flex-1 w-full pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto",
            )}
        >
            {renderRoleContent()}
        </div>
    )
}

export default MainContent