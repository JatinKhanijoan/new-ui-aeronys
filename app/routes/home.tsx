import { useDashboardFor } from '~/provider/DashboardForProvider'
import AdminDashboard from '../components/dashboard/admin'
import { cn } from '~/lib/utils'
import type { Route } from '../+types/root';
import OpsDashboard from '~/components/dashboard/ops';
import InstructorDashboard from '~/components/dashboard/instructor';
import RestrictedInstructorDashboard from '~/components/dashboard/restricted-instructor';
import MemberDashboard from '~/components/dashboard/member';
import NonMemberDashboard from '~/components/dashboard/non-member';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Aeronys" },
    { name: "Aeronys", content: "All-in-one aviation management platform designed to simplify and streamline operations for flying schools, instructors, flying groups, syndicates, and engineering managers." },
  ]
}

export default function Home() {
  const { userRole } = useDashboardFor();

  const renderRoleContent = () => {
    switch (userRole) {
      case 'admin':
        return renderAdminContent();
      case 'instructor':
        return renderInstructorContent();
      case 'restricted-instructor':
        return renderRestrictedInstructorContent();
      case 'ops':
        return renderOpsContent();
      case 'member':
        return renderMemberContent();
      case 'non-member':
        return renderNonMemberContent();
      case 'cfi':
        return renderCFIContent();
      default:
        return renderAdminContent();
    }
  };

  const renderAdminContent = () => {
    return (
      <AdminDashboard />
    );
  };

  const renderRestrictedInstructorContent = () => {
    return (
      <RestrictedInstructorDashboard />
    );
  };

  const renderInstructorContent = () => {
    return (
      <InstructorDashboard />
    );
  };
  const renderOpsContent = () => {
    return (
      <OpsDashboard />
    );
  };

  const renderMemberContent = () => {
    return (
      <MemberDashboard />
    );
  };

  const renderNonMemberContent = () => {
    return (
      <NonMemberDashboard />
    );
  };

  const renderCFIContent = () => {
    return (
      <RestrictedInstructorDashboard />
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
  );
}
