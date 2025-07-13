import { AlertTriangle, Badge, Check, CheckCircle2, ClipboardList, Cross, X, XCircle } from "lucide-react";
import type { CourseRequirementsProps, RequiredItems } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const RequirementSection = ({
    name,
    items
}: {
    name: string;
    items: Array<{ id: string; label: string; status: string }>
}) => {
    const completedCount = items.filter(item => item.status === 'complete').length;
    const totalCount = items.length;
    const completionPercentage = (completedCount / totalCount) * 100;

    return (
        <div className="mb-8 last:mb-0">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                {items.map((item) => (
                    <RequirementRow key={item.id} label={item.label} status={item.status} />
                ))}
            </div>
        </div>
    );
};

const RequirementRow = ({ label, status }: { label: string; status: string }) => {
    const isComplete = status === 'complete';

    return (
        <div className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${isComplete
            ? 'bg-green-50 border-green-200 hover:bg-green-100'
            : 'bg-red-50 border-red-200 hover:bg-red-100'
            }`}>
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className={`text-sm font-medium ${isComplete ? 'text-green-800' : 'text-red-800'
                    } truncate`}>
                    {label}
                </span>
            </div>
            <div className="flex-shrink-0 ml-2">
                {isComplete ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                )}
            </div>
        </div>
    );
};

const CourseRequirements: React.FC<CourseRequirementsProps & { requiredItems: RequiredItems[] | null }> = ({
    data,
    requiredItems
}) => {
    if (!data || !requiredItems || data.length === 0 || requiredItems.length === 0) {
        return (
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg border-slate-200 h-full">
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <ClipboardList className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-bold text-slate-800">Course Requirements</CardTitle>
                            <p className="text-sm text-slate-600 mt-1">No requirements available</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="p-4 bg-slate-200 rounded-full mb-4">
                            <AlertTriangle className="h-8 w-8 text-slate-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">No Requirements Found</h3>
                        <p className="text-slate-500 max-w-md">
                            Course requirements will appear here once they are configured for this course.
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    const getRequirementDescription = (requirementitemId: string): string => {
        const matchedItem = requiredItems?.find(item => item.requirementitem_id === requirementitemId);
        return matchedItem?.description || 'No description available';
    };

    const groupedRequirements = data.reduce((acc, item) => {
        const name = item.requirements.name;
        if (!acc[name]) {
            acc[name] = [];
        }

        const requirementItem = {
            id: item.userreqstatus_id,
            label: getRequirementDescription(item.requirementitem_id),
            status: item.status
        };
        acc[name].push(requirementItem);
        return acc;
    }, {} as Record<string, Array<{ id: string; label: string; status: string }>>);

    const totalRequirements = data.length;
    const completedRequirements = data.filter(item => item.status === 'complete').length;
    const overallPercentage = (completedRequirements / totalRequirements) * 100;

    return (
        <Card className="h-full">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-lg">
                        <ClipboardList className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="text-xl font-bold">Course Requirements</CardTitle>
                        <p className="text-sm mt-1">
                            {completedRequirements} of {totalRequirements} requirements completed
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-6">
                    {Object.entries(groupedRequirements).map(([name, items]) => (
                        <RequirementSection key={name} name={name} items={items} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CourseRequirements;