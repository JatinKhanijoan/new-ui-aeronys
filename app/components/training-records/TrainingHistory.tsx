import { useNavigate } from "react-router";
import type { LegacyDataProps, TrainingHistoryType } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { format } from "date-fns";
import { BookOpen, Calendar, Clock, User } from "lucide-react";
import { Badge } from "../ui/badge";

const TrainingHistory = ({
    data,
    legacyData
}: {
    data: TrainingHistoryType[] | null;
    legacyData: LegacyDataProps[] | null;
}) => {
    const navigate = useNavigate();

    const noDataAvailable = (!data || data.length === 0) && (!legacyData || legacyData.length === 0);

    const getStatusBadgeVariant = (isCompleted: boolean | string) => {
        if (typeof isCompleted === 'boolean') {
            return isCompleted ? 'default' : 'secondary';
        }
        return isCompleted === 'Complete' ? 'default' : 'secondary';
    };

    const getStatusText = (isCompleted: boolean | string) => {
        if (typeof isCompleted === 'boolean') {
            return isCompleted ? 'Completed' : 'Pending';
        }
        return isCompleted === 'Complete' ? 'Completed' : isCompleted || 'N/A';
    };

    return (
        <Card>
            <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-bold">Training History</CardTitle>
                        <p className="text-sm mt-1">
                            {noDataAvailable ? 'No records found' :
                                `${(data?.length || 0) + (legacyData?.length || 0)} training records`}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                {noDataAvailable ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="p-4 rounded-full mb-4">
                            <Clock className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">No Training History</h3>
                        <p className="max-w-md">
                            Training records will appear here once lessons are scheduled and completed.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {Array.isArray(data) && data
                            .sort((a, b) => new Date(b.trainingRecordDate).getTime() - new Date(a.trainingRecordDate).getTime())
                            .map((record, index) => (
                                <div
                                    key={`data-${index}`}
                                    className="group p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer"
                                    onClick={() => navigate(`/trainingrecord/record/${record.trainingRecordId}`)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="font-semibold truncate group-hover:text-primary transition-colors">
                                                    {record.exerciseName}
                                                </h4>
                                                <Badge
                                                    variant={getStatusBadgeVariant(record.isCompleted)}
                                                    className={`${record.isCompleted
                                                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                        : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                                                        } font-medium`}
                                                >
                                                    {getStatusText(record.isCompleted)}
                                                </Badge>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm text-slate-600">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    <span>{record.instructorName}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{format(new Date(record.trainingRecordDate), 'MMM dd, yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        {Array.isArray(legacyData) && legacyData
                            .sort((a, b) => {
                                const dateA = a.date.split('/').reverse().join('-');
                                const dateB = b.date.split('/').reverse().join('-');
                                return new Date(dateB).getTime() - new Date(dateA).getTime();
                            })
                            .map((record, index) => (
                                <div
                                    key={`legacy-${index}`}
                                    className="group p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer relative"
                                    onClick={() => navigate(`/trainingrecord/record/legacy/${index}`, {
                                        state: { data: record }
                                    })}
                                >
                                    {/* Legacy indicator */}
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                                            Legacy
                                        </Badge>
                                    </div>

                                    <div className="flex items-start justify-between pr-16">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="font-semibold group-hover:text-primary transition-colors">
                                                    {record.exercises?.join(', ') || 'Exercise'}
                                                </h4>
                                                <Badge
                                                    variant={getStatusBadgeVariant(record.status)}
                                                    className={`${record.status === 'Complete'
                                                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                        : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                                                        } font-medium`}
                                                >
                                                    {getStatusText(record.status)}
                                                </Badge>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    <span>{record.instructor}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{format(new Date(record.date.split('/').reverse().join('-')), 'MMM dd, yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TrainingHistory;