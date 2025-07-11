import React, { useState, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { Calendar, Clock, AlertTriangle, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { format, parseISO, differenceInDays } from 'date-fns';

const response = {
    "message": "Records fetched successfully",
    "data": [
        {
            "check_id": "b96b17ac-6bd8-496d-9ea7-2e47570f1453",
            "aircraft_id": "5d3c8291-aa0d-4d76-9d2b-ad6c145cc5da",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "1434",
            "check_type": "5",
            "last_fuel": 100,
            "last_oil": 100,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BSVM",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "check_id": "3091435c-b04f-4c5a-b559-055b795b4e8d",
            "aircraft_id": "a0549e31-d6e0-4bde-97ed-0738d4e90606",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "1405",
            "check_type": "A",
            "last_fuel": 100,
            "last_oil": 100,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-OXFD",
                "type": "Piper Seneca PA34"
            }
        },
        {
            "check_id": "e4cc616c-1c0f-43b0-8e3a-d1e509cc0f8f",
            "aircraft_id": "4e014cc6-7a56-46ef-9578-d4aaa9760f7c",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "531",
            "check_type": "A",
            "last_fuel": 100,
            "last_oil": 100,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-CLFY",
                "type": "Piper Archer PA28"
            }
        },
        {
            "check_id": "abcad28a-18f3-4ea0-b7d6-fd022de44918",
            "aircraft_id": "688e5609-029f-4929-a971-eadddd44708e",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "540",
            "check_type": "10",
            "last_fuel": 200,
            "last_oil": 200,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BTNH",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "check_id": "aff17ca2-da2c-49a3-a478-b7d9ae621c78",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "1",
            "check_type": "5",
            "last_fuel": 100,
            "last_oil": 100,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "check_id": "7876f5e7-a4f8-4935-bba0-72354fb4f2bf",
            "aircraft_id": "2d3508e8-9f3a-44da-8cd1-b2bad6e0884f",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "52",
            "check_type": "10",
            "last_fuel": 100,
            "last_oil": 100,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-LSFT",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "check_id": "a5b087c8-9433-4f65-bfcb-09345dda896d",
            "aircraft_id": "81df0cc1-65e5-4940-b947-d38782d1e4c7",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "104",
            "check_type": "A",
            "last_fuel": 123,
            "last_oil": 123,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-CIZO",
                "type": "Piper Cadet PA28"
            }
        },
        {
            "check_id": "813fa3ee-95c3-48b5-af26-195a1a0a74b8",
            "aircraft_id": "42dcd911-5eb3-4c9c-8349-016806178039",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "281",
            "check_type": "5",
            "last_fuel": null,
            "last_oil": null,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BTID",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "check_id": "b1dfdf98-2980-4d02-996b-bab717ab6533",
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "insurance_renewal": "2025-06-27T00:00:00.000Z",
            "radio_licence_renewal": "2025-04-23T00:00:00.000Z",
            "arc_renewal": "2025-04-23T00:00:00.000Z",
            "hours_to_check": "10",
            "check_type": "10",
            "last_fuel": 14,
            "last_oil": 14,
            "next_check_date": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28"
            }
        }
    ]
};

interface Aircraft {
    registration_number: string;
    type: string;
}

interface MaintenanceRecord {
    check_id: string;
    aircraft_id: string;
    insurance_renewal: string | null;
    radio_licence_renewal: string | null;
    arc_renewal: string | null;
    hours_to_check: string;
    check_type: string;
    last_fuel: number | null;
    last_oil: number | null;
    next_check_date: string | null;
    organisation_id: string;
    aircrafts: Aircraft | null;
    defects?: string | null;
}

const safeParseDate = (dateString: string | null | undefined): Date | null => {
    if (!dateString || typeof dateString !== 'string') return null;
    try {
        const parsed = parseISO(dateString);
        return isNaN(parsed.getTime()) ? null : parsed;
    } catch {
        return null;
    }
};

const safeParseInt = (value: string | null | undefined, fallback: number = 0): number => {
    if (!value || typeof value !== 'string') return fallback;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? fallback : parsed;
};

const getStatusFromDate = (dateString: string | null): { status: string; daysRemaining: number | null } => {
    const date = safeParseDate(dateString);
    if (!date) return { status: 'danger', daysRemaining: null };

    const today = new Date();
    const daysRemaining = differenceInDays(date, today);

    if (daysRemaining > 10) return { status: 'success', daysRemaining };
    if (daysRemaining > 3) return { status: 'warning', daysRemaining };
    return { status: 'danger', daysRemaining };
};

const getStatusFromHours = (hoursToCheck: string | null): { status: string; hoursRemaining: number } => {
    const hours = safeParseInt(hoursToCheck);

    if (hours > 10) return { status: 'success', hoursRemaining: hours };
    if (hours > 5) return { status: 'warning', hoursRemaining: hours };
    return { status: 'danger', hoursRemaining: hours };
};

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case 'danger':
            return 'destructive';
        case 'warning':
            return 'secondary';
        case 'success':
        default:
            return 'default';
    }
};

const StatusIndicator = ({ status, value, type }: { status: string; value: string | number | null; type: 'date' | 'hours' }) => {
    let icon = null;
    let tooltipText = '';

    if (status === 'danger') {
        icon = <AlertCircle className="text-red-500 ml-1 sm:ml-2 flex-shrink-0" size={16} />;
        tooltipText = type === 'date' ? 'Less than 3 days remaining' : 'Less than 5 hours remaining';
    } else if (status === 'warning') {
        icon = <AlertTriangle className="text-yellow-500 ml-1 sm:ml-2 flex-shrink-0" size={16} />;
        tooltipText = type === 'date' ? 'Less than 10 days remaining' : 'Less than 10 hours remaining';
    } else {
        icon = <CheckCircle className="text-green-500 ml-1 sm:ml-2 flex-shrink-0" size={16} />;
        tooltipText = type === 'date' ? 'More than 10 days remaining' : 'More than 10 hours remaining';
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center justify-start min-w-0 cursor-help">
                        <span className="truncate text-xs sm:text-sm">{value || 'Not set'}</span>
                        {icon}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const minutesToHoursMinutes = (minutes: number): string => {
    if (isNaN(minutes) || minutes < 0) return '00:00';
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
};

const formatCheckType = (checkType: string | null): string => {
    if (!checkType) return 'Unknown';
    switch (checkType) {
        case '5':
            return '5 days check';
        case '10':
            return '10 days check';
        case 'A':
            return 'Annual check';
        default:
            return '5 hours check';
    }
};

const formatDate = (dateString: string | null): string => {
    const date = safeParseDate(dateString);
    if (!date) return 'Not set';
    try {
        return format(date, 'dd MMM yyyy');
    } catch {
        return 'Invalid date';
    }
};

const ViewMaintenance = () => {
    const [maintenanceData, setMaintenanceData] = useState<MaintenanceRecord[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        // Transform the data to match the expected structure
        const transformedData = response.data.map(record => ({
            ...record,
            aircraft: record.aircrafts
        }));
        setMaintenanceData(transformedData);
    }, []);

    const filteredData = maintenanceData.filter(record => {
        if (!record || !searchTerm) return true;

        const searchLower = searchTerm.toLowerCase();
        const aircraft = record.aircrafts;

        if (!aircraft) return false;

        const registrationMatch = aircraft.registration_number?.toLowerCase()?.includes(searchLower) || false;
        const typeMatch = aircraft.type?.toLowerCase()?.includes(searchLower) || false;

        return registrationMatch || typeMatch;
    });

    return (
        <div className="min-h-screen">
            <div>
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">


                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:flex-initial">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <Input
                                placeholder="Search aircraft..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value || '')}
                                className="pl-10 w-full sm:w-64 lg:w-96"
                            />
                        </div>
                        <Button className="w-full sm:w-auto">
                            <Calendar className="mr-2" size={16} />
                            <span className="hidden sm:inline">Schedule Maintenance</span>
                            <span className="sm:hidden">Schedule</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="block lg:hidden">
                    {filteredData.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-8">
                                <AlertTriangle className="text-gray-400 mb-4" size={48} />
                                <p className="text-gray-500">No maintenance records found</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {filteredData.map((record) => {
                                if (!record) return null;

                                const aircraft = record.aircrafts;
                                const insuranceInfo = getStatusFromDate(record.insurance_renewal);
                                const radioInfo = getStatusFromDate(record.radio_licence_renewal);
                                const arcInfo = getStatusFromDate(record.arc_renewal);
                                const hoursInfo = getStatusFromHours(record.hours_to_check);
                                const minutesValue = safeParseInt(record.hours_to_check);

                                return (
                                    <Card key={record.check_id}>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg">
                                                        {aircraft?.registration_number || 'Unknown Aircraft'}
                                                    </CardTitle>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {aircraft?.type?.slice(-4) || 'Unknown Type'}
                                                    </p>
                                                </div>
                                                <Badge variant={getStatusBadgeVariant(hoursInfo.status)}>
                                                    {formatCheckType(record.check_type)}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div>
                                                <span className="font-medium text-gray-700">Defects:</span>
                                                <span className="ml-2 text-gray-600">{record.defects || 'None'}</span>
                                            </div>

                                            <div>
                                                <span className="font-medium text-gray-700">Insurance Renewal:</span>
                                                <div className="mt-1">
                                                    <StatusIndicator
                                                        status={insuranceInfo.status}
                                                        value={formatDate(record.insurance_renewal)}
                                                        type="date"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <span className="font-medium text-gray-700">Radio License:</span>
                                                <div className="mt-1">
                                                    <StatusIndicator
                                                        status={radioInfo.status}
                                                        value={formatDate(record.radio_licence_renewal)}
                                                        type="date"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <span className="font-medium text-gray-700">ARC Renewal:</span>
                                                <div className="mt-1">
                                                    <StatusIndicator
                                                        status={arcInfo.status}
                                                        value={formatDate(record.arc_renewal)}
                                                        type="date"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <span className="font-medium text-gray-700">Hours to Check:</span>
                                                <div className="mt-1">
                                                    <StatusIndicator
                                                        status={hoursInfo.status}
                                                        value={minutesToHoursMinutes(minutesValue)}
                                                        type="hours"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <span className="font-medium text-gray-700">Last Fuel:</span>
                                                    <p className="text-gray-600 mt-1">{record.last_fuel || 'Not recorded'}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-700">Last Oil:</span>
                                                    <p className="text-gray-600 mt-1">{record.last_oil || 'Not recorded'}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="hidden lg:block">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold border-2">Aircraft</TableHead>
                                    <TableHead className="font-semibold border-2">Defects</TableHead>
                                    <TableHead className="font-semibold border-2">Insurance Renewal</TableHead>
                                    <TableHead className="font-semibold border-2">Radio License</TableHead>
                                    <TableHead className="font-semibold border-2">ARC Renewal</TableHead>
                                    <TableHead className="font-semibold border-2">Hours to Check</TableHead>
                                    <TableHead className="font-semibold border-2">Check Type</TableHead>
                                    <TableHead className="font-semibold border-2">Last Fuel</TableHead>
                                    <TableHead className="font-semibold border-2">Last Oil</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.map((record) => {
                                    if (!record) return null;

                                    const aircraft = record.aircrafts;
                                    const insuranceInfo = getStatusFromDate(record.insurance_renewal);
                                    const radioInfo = getStatusFromDate(record.radio_licence_renewal);
                                    const arcInfo = getStatusFromDate(record.arc_renewal);
                                    const hoursInfo = getStatusFromHours(record.hours_to_check);
                                    const minutesValue = safeParseInt(record.hours_to_check);

                                    return (
                                        <TableRow key={record.check_id}>
                                            <TableCell className="font-medium border-2">
                                                {aircraft ? (
                                                    <>
                                                        {aircraft.registration_number || 'Unknown'}
                                                        <span className="text-gray-500 ml-2">
                                                            ({aircraft.type?.slice(-4) || 'N/A'})
                                                        </span>
                                                    </>
                                                ) : (
                                                    'No aircraft data'
                                                )}
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                {record.defects || 'None'}
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                <StatusIndicator
                                                    status={insuranceInfo.status}
                                                    value={formatDate(record.insurance_renewal)}
                                                    type="date"
                                                />
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                <StatusIndicator
                                                    status={radioInfo.status}
                                                    value={formatDate(record.radio_licence_renewal)}
                                                    type="date"
                                                />
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                <StatusIndicator
                                                    status={arcInfo.status}
                                                    value={formatDate(record.arc_renewal)}
                                                    type="date"
                                                />
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                <StatusIndicator
                                                    status={hoursInfo.status}
                                                    value={minutesToHoursMinutes(minutesValue)}
                                                    type="hours"
                                                />
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                {formatCheckType(record.check_type)}
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                {record.last_fuel || 'Not recorded'}
                                            </TableCell>
                                            <TableCell className='border-2'>
                                                {record.last_oil || 'Not recorded'}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    {filteredData.length === 0 && (
                        <Card className="mt-4">
                            <CardContent className="flex flex-col items-center justify-center py-8">
                                <AlertTriangle className="text-gray-400 mb-4" size={48} />
                                <p className="text-gray-500">No maintenance records found</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewMaintenance;