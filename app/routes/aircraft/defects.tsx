import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { AlertTriangle, CheckCircle, Clock, Search, Filter, Plane, User, Calendar, FileText } from 'lucide-react';
import PageTitle from '~/components/shared/pageTitle';
import { useNavigate } from 'react-router';

interface Aircraft {
    registration_number: string;
    type: string;
    company_name: string | null;
}

interface User {
    first_name: string;
    last_name: string;
}

interface Defect {
    defect_id: string;
    aircraft_id: string;
    type_of_defect: string;
    date_time_reported: string;
    details: string;
    reported_by_user_id: string;
    images: string[] | null;
    severity: 'low' | 'moderate' | 'high';
    approved: boolean;
    status: boolean;
    organisation_id: string;
    aircrafts: Aircraft;
    users: User;
}

const DefectsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [severityFilter, setSeverityFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const navigate = useNavigate();

    const defectsData: Defect[] = [
        {
            "defect_id": "d96742db-6426-4dba-8083-89b8b16507b5",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-07-07T14:36:04.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "2c51ccda-91eb-4972-b6d9-8d62123bc9df",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-06-27T19:14:52.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "597f836c-549a-4f43-a0a6-a328483dbf91",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-06-27T19:14:30.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "fd5c45c5-a571-46e8-93bb-4035a6920c12",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-06-27T19:14:20.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "99fee095-3e97-470c-adb4-a7ed8ee3eeaa",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-06-27T19:13:54.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "7b4f5162-e362-41fd-b2b9-e290e92096a1",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-06-24T11:08:43.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "e6a5a1f3-624a-4004-8b71-6ef136650199",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-06-19T15:10:54.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "e68e141c-fcee-41c3-a5b7-03bc0ad22185",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-06-19T15:06:13.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "5bc55f1a-c4ce-43e0-997b-3a1c59198534",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-06-19T14:45:03.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "3dd66768-f438-47ee-b08a-b69eb5c04ce8",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Test",
            "date_time_reported": "2025-06-19T13:14:07.000Z",
            "details": "Test",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "high",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "61da74c7-cd13-4b69-99c5-7ea072c7ebef",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-06-19T09:57:54.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": false,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "62b4b594-2544-462f-85e3-f62afdb9b651",
            "aircraft_id": "5d3c8291-aa0d-4d76-9d2b-ad6c145cc5da",
            "type_of_defect": "'a'",
            "date_time_reported": "2025-06-03T18:18:46.000Z",
            "details": "hey",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": [
                "https://res.cloudinary.com/doahxfhjj/image/upload/v1748974716/z8bhb1ipqqhj7jqkw9xx.png"
            ],
            "severity": "high",
            "approved": true,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BSVM",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "383e2d1b-8658-4581-a32f-1cd1b1d34bd3",
            "aircraft_id": "5d3c8291-aa0d-4d76-9d2b-ad6c145cc5da",
            "type_of_defect": "left oleo .",
            "date_time_reported": "2025-04-21T10:12:39.000Z",
            "details": "decompressed .",
            "reported_by_user_id": "16f2b264-c091-70a2-2320-b8702c2383dc",
            "images": [
                "https://res.cloudinary.com/doahxfhjj/image/upload/v1745230347/lyovnjkevniocbbojnoi.jpg"
            ],
            "severity": "low",
            "approved": true,
            "status": false,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BSVM",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Anna",
                "last_name": "Sivyer"
            }
        },
        {
            "defect_id": "d279069a-6182-443c-a657-08afb15f309b",
            "aircraft_id": "4e014cc6-7a56-46ef-9578-d4aaa9760f7c",
            "type_of_defect": "test",
            "date_time_reported": "2025-02-10T13:21:58.000Z",
            "details": "test",
            "reported_by_user_id": "16f2b264-c091-70a2-2320-b8702c2383dc",
            "images": [],
            "severity": "moderate",
            "approved": true,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-CLFY",
                "type": "Piper Archer PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Anna",
                "last_name": "Sivyer"
            }
        },
        {
            "defect_id": "07e906b7-8dc5-4730-b9cf-972f0a1fcd6a",
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "type_of_defect": "Turbine",
            "date_time_reported": "2025-01-22T14:15:50.000Z",
            "details": "Not Attaining Maximum Speed",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": null,
            "severity": "low",
            "approved": true,
            "status": true,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        },
        {
            "defect_id": "251a2417-5965-456d-9bc3-b0583ad75998",
            "aircraft_id": "688e5609-029f-4929-a971-eadddd44708e",
            "type_of_defect": "Cracked Windshield",
            "date_time_reported": "2025-01-10T12:37:18.000Z",
            "details": "The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces",
            "reported_by_user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "images": [
                "https://res.cloudinary.com/doahxfhjj/image/upload/v1736512327/lq3bxonezidphozzgq1n.jpg"
            ],
            "severity": "high",
            "approved": true,
            "status": false,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "aircrafts": {
                "registration_number": "G-BTNH",
                "type": "Piper Warrior PA28",
                "company_name": null
            },
            "users": {
                "first_name": "Chinmay",
                "last_name": "Anaokar"
            }
        }
    ];

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'high': return 'bg-red-100 text-red-800 border-red-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'low': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: boolean) => {
        return status ? (
            <CheckCircle className="w-4 h-4 text-green-600" aria-label="Resolved" />
        ) : (
            <Clock className="w-4 h-4 text-orange-600" aria-label="Pending" />
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const filteredDefects = defectsData.filter(defect => {
        const matchesSearch =
            defect.type_of_defect.toLowerCase().includes(searchTerm.toLowerCase()) ||
            defect.aircrafts.registration_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            defect.aircrafts.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            defect.details.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesSeverity = severityFilter === 'all' || defect.severity === severityFilter;
        const matchesStatus = statusFilter === 'all' ||
            (statusFilter === 'resolved' && defect.status) ||
            (statusFilter === 'pending' && !defect.status);

        return matchesSearch && matchesSeverity && matchesStatus;
    });

    const sortedDefects = [...filteredDefects].sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return new Date(b.date_time_reported).getTime() - new Date(a.date_time_reported).getTime();
            case 'severity':
                const severityOrder = { high: 3, moderate: 2, low: 1 };
                return severityOrder[b.severity] - severityOrder[a.severity];
            case 'aircraft':
                return a.aircrafts.registration_number.localeCompare(b.aircrafts.registration_number);
            default:
                return 0;
        }
    });

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <PageTitle title='Defect Management' description='Monitor and manage aircraft defects and maintenance issues' />
                <div className="mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={16} />
                                <Input
                                    type="text"
                                    placeholder="Search by defect type, aircraft registration, or details..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                    aria-label="Search defects"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Select value={severityFilter} onValueChange={setSeverityFilter}>
                                <SelectTrigger className="w-32">
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue placeholder="Severity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Severities</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="resolved">Resolved</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="date">Date</SelectItem>
                                    <SelectItem value="severity">Severity</SelectItem>
                                    <SelectItem value="aircraft">Aircraft</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Results Summary */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm">
                        Showing {sortedDefects.length} of {defectsData.length} defects
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="text-red-600">
                            {defectsData.filter(d => d.severity === 'high').length} High Priority
                        </Badge>
                        {/* <Badge variant="outline" className="text-orange-600">
                            {defectsData.filter(d => !d.status).length} Pending
                        </Badge> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {sortedDefects.map((defect) => (
                        <Card key={defect.defect_id} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <AlertTriangle className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg line-clamp-1 font-semibold">
                                                {defect.type_of_defect}
                                            </CardTitle>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Plane className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {defect.aircrafts.registration_number} • {defect.aircrafts.type.slice(-4)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            className={getSeverityColor(defect.severity)}
                                            variant="outline"
                                        >
                                            {defect.severity.charAt(0).toUpperCase() + defect.severity.slice(1)}
                                        </Badge>
                                        {getStatusIcon(defect.status)}
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-1">Details</h4>
                                        <p className="text-sm leading-relaxed">
                                            {truncateText(defect.details, 150)}
                                        </p>
                                    </div>
                                </div>

                                {/* {defect.images && defect.images.length > 0 && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Images</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {defect.images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        alt={`Defect image ${index + 1}`}
                                                        className="w-full h-24 object-cover rounded-lg border"
                                                        loading="lazy"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )} */}

                            </CardContent>
                            <CardFooter className='mt-auto'>
                                <div className='w-full flex flex-col gap-4 justify-between'>
                                    <div className="flex justify-between items-center pt-2 border-t">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="w-4 h-4" />
                                            <span className='line-clamp-1'>
                                                {defect.users.first_name} {defect.users.last_name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span className='line-clamp-1'>{formatDate(defect.date_time_reported)}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Button onClick={() => navigate(`/aircraft/${defect.defect_id}`)} variant="outline" size="sm" className="flex-1">
                                            <FileText className="w-4 h-4 mr-2" />
                                            View Details
                                        </Button>
                                        {!defect.status && (
                                            <Button size="sm" className="flex-1">
                                                Mark Resolved
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {sortedDefects.length === 0 && (
                    <div className="text-center py-12">
                        <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No defects found</h3>
                        <p>Try adjusting your search criteria or filters</p>
                    </div>
                )}
            </div>
        </div >
    );
};

export default DefectsPage;