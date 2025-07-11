import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import type { CourseHoursProps } from './type';
import { ClipboardList, Clock } from 'lucide-react';

const CourseHours = ({ data }: { data: CourseHoursProps | null }) => {
    const convertMinutesToHHmm = (minutes: string) => {
        const totalMinutes = parseInt(minutes);
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
    };

    return (
        <Card>
            <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-800">Course Hours</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">
                            (All values are in HH:mm format)
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {data ? (
                    <>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full text-sm border-collapse border border-slate-300">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Dual</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Solo</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Nav</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Inst</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Day</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Night</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">SEP</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">MEP</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">SSAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.dual_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.solo_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.navigation_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.instruments_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.day_time_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.night_time_hours || '0')}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.sep_hours || '0')}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.mep_hours || '0')}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.ssat_hours || '0')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse border border-slate-300">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Nav Total</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Nav Solo</th>
                                        <th className="border border-slate-300 px-4 py-2 text-left font-medium">Nav Dual</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.navigation_total_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.navigation_solo_hours)}</td>
                                        <td className="border border-slate-300 px-4 py-2">{convertMinutesToHHmm(data.navigation_dual_hours)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div className="p-4 text-center">No course hours data available</div>
                )}
            </CardContent>
        </Card>
    );
};

export default CourseHours;