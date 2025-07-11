import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { Progress } from '~/components/ui/progress';
import { Separator } from '~/components/ui/separator';
import {
    Plane,
    BookOpen,
    FileText,
    CheckCircle,
    AlertCircle,
    Clock,
    MapPin,
    Users,
    Award,
    GraduationCap
} from 'lucide-react';

const courseData = {
    "course_id": "0e8b3fe2-3f63-4038-9b0d-e0382d808c65",
    "name": "UK CAA PPL(A)",
    "description": "A PPL for aeroplanes will allow you to act as pilot in command (PIC) in non-commercial operations on aeroplanes or touring motor gliders (TMGs)",
    "exercises": [
        {
            "exercise_id": "05fc639c-2950-4f36-957b-ef067b43b706",
            "title": "Exercise 12/13 Solo (circuits)",
            "description": "train students",
            "subtasks": [
                {
                    "subtask_id": "dad0fea4-f7a1-4ead-9a0a-e65a7edf3f6b",
                    "description": "Pre solo checklist signed"
                },
                {
                    "subtask_id": "4758fa1a-8e40-4ed2-8c3e-5ab77396f382",
                    "description": "Solo circuits completed"
                }
            ]
        },
        {
            "exercise_id": "a42a5cd2-4cd7-4f0e-ba70-97bdc04dee63",
            "title": "Exercise 16 (PFLs)",
            "description": "train students",
            "subtasks": [
                {
                    "subtask_id": "fbcf0641-4e71-4d32-8e4d-53793596a5b8",
                    "description": "Engine restart procedures"
                },
                {
                    "subtask_id": "7697da64-8bd5-47c8-88f3-4c9447d60cdc",
                    "description": "Glide Approach field"
                },
                {
                    "subtask_id": "f4a94f77-811a-42a9-a8a4-d53ee37df707",
                    "description": "Selecting appropriate field"
                }
            ]
        },
        {
            "exercise_id": "fc0edcc5-04d4-4f9a-a30a-fdcd19556e43",
            "title": "Exercise 15 (advanced turning)",
            "description": "train students",
            "subtasks": []
        },
        {
            "exercise_id": "d7b0ad92-b585-4467-a9dc-05857d83144a",
            "title": "Medical",
            "description": "medical record of student",
            "subtasks": [
                {
                    "subtask_id": "b6015db5-36b3-403a-8f44-86c599219f20",
                    "description": "valid medical"
                }
            ]
        },
        {
            "exercise_id": "47024db9-09bd-4a3e-95f5-b6577c571e3c",
            "title": "Exercise 17 (precautionary landings)",
            "description": "train students",
            "subtasks": [
                {
                    "subtask_id": "e5d68bdf-3187-4ea1-b30c-53756516202f",
                    "description": "Glide Approach field"
                },
                {
                    "subtask_id": "90b1f76f-cd99-4cc2-85e3-81d1834f55e9",
                    "description": "Inspection circuit"
                },
                {
                    "subtask_id": "b1a2aeb0-49ca-4b80-b75e-c00ec40763d8",
                    "description": "Overall procedures"
                }
            ]
        }
    ],
    "ground_school": [
        {
            "ground_school_id": "6e2b26c5-60c8-432c-b7c8-a7c62806cc6f",
            "title": "Ground-School 2",
            "description": "weather, charts & NOTAMs",
            "ground_school_subtasks": [
                {
                    "subtask_id": "53f06550-da21-4ed6-a4dc-c0bfdeb76c9c",
                    "description": "MetOffice charts"
                },
                {
                    "subtask_id": "97336999-e4b4-4dd2-a7bd-d8f711c59e15",
                    "description": "NOTAMs"
                },
                {
                    "subtask_id": "94f0af0d-a71a-4e9f-a94c-0049235433e4",
                    "description": "AIP"
                }
            ]
        },
        {
            "ground_school_id": "8bcc0c69-1de0-4075-8c1a-008be45eb6de",
            "title": "Ground-School 3",
            "description": "emergency procedures",
            "ground_school_subtasks": [
                {
                    "subtask_id": "be431f0b-489f-4804-bdc8-2d4ba7f5a5f8",
                    "description": "EFATO"
                },
                {
                    "subtask_id": "734b3c4f-7c72-4f8d-8bdb-9f5efbc79d3b",
                    "description": "Engine Failure in Air"
                },
                {
                    "subtask_id": "c847344d-fe45-43e4-88e7-73ec054effed",
                    "description": "Rejected Takeoff"
                }
            ]
        }
    ],
    "requirements": [
        {
            "requirement_id": "dd598d10-d375-4526-a9ff-edcaee064cf1",
            "name": "Solo Navigation",
            "description": "test requirement description",
            "requirement_items": [
                {
                    "requirementitem_id": "402b86f8-219f-4642-b540-1545c5f70884",
                    "type": "Medical",
                    "description": "Current Medical"
                },
                {
                    "requirementitem_id": "e9bcd452-df11-4e6d-a7e2-100f78d20823",
                    "type": "Exam",
                    "description": "Navigation Exam Pass"
                }
            ]
        },
        {
            "requirement_id": "8ce7ac66-268b-4607-9ddd-5a6559497fb6",
            "name": "First Solo",
            "description": "test requirement description",
            "requirement_items": [
                {
                    "requirementitem_id": "46fa5d94-b7a3-4f1f-8912-dd2d0bc2c5f7",
                    "type": "Exam",
                    "description": "Air Law Exam Pass"
                },
                {
                    "requirementitem_id": "d2a6f67d-7b9b-4946-9d69-72458b76006b",
                    "type": "Exercises",
                    "description": "Progress check 1&2 complete"
                }
            ]
        }
    ],
    "exams": [
        {
            "exam_id": "a8c8bd2c-56f9-4789-9cfa-f4bb0c634161",
            "name": "Meteorology",
            "description": "Exam Related to Meteorology"
        },
        {
            "exam_id": "7b25918a-40d1-44dc-ba52-3c27bd84fcac",
            "name": "Aircraft General",
            "description": "Exam Related to Aircraft General"
        },
        {
            "exam_id": "3c11570c-eabf-4586-806f-dd066c818351",
            "name": "Navigation",
            "description": "Exam Related to Navigation"
        },
        {
            "exam_id": "020cd1b2-6d2f-4f56-8e92-e4b0db4044c0",
            "name": "Air Law",
            "description": "Exam Related to Air Law"
        }
    ]
};

const getRequirementTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case 'medical':
            return <AlertCircle className="h-4 w-4" />;
        case 'exam':
            return <FileText className="h-4 w-4" />;
        case 'exercises':
            return <CheckCircle className="h-4 w-4" />;
        case 'hours':
            return <Clock className="h-4 w-4" />;
        default:
            return <CheckCircle className="h-4 w-4" />;
    }
};

const getRequirementTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'medical':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'exam':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'exercises':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'hours':
            return 'bg-orange-100 text-orange-800 border-orange-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export default function PPLCourseDashboard() {
    const [selectedTab, setSelectedTab] = useState('overview');

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Plane className="h-8 w-8 text-primary" />
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {courseData.name}
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {courseData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Exercises</CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{courseData.exercises.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Flying training exercises
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Ground School</CardTitle>
                            <BookOpen className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{courseData.ground_school.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Theory modules
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Examinations</CardTitle>
                            <FileText className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{courseData.exams.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Required exams
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Requirements</CardTitle>
                            <Award className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{courseData.requirements.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Milestone requirements
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                        <TabsTrigger value="exercises">Exercises</TabsTrigger>
                        <TabsTrigger value="ground-school">Ground School</TabsTrigger>
                        <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    </TabsList>

                    <TabsContent value="exercises" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Plane className="h-5 w-5" />
                                    Flight Training Exercises
                                </CardTitle>
                                <CardDescription>
                                    Complete list of all practical flying exercises
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {courseData.exercises.map((exercise, index) => (
                                        <AccordionItem key={exercise.exercise_id} value={`exercise-${index}`}>
                                            <AccordionTrigger className="text-left  cursor-pointer">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline">{index + 1}</Badge>
                                                    <span>{exercise.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-3">
                                                    <p className="text-sm text-gray-600">{exercise.description}</p>
                                                    {exercise.subtasks.length > 0 && (
                                                        <div>
                                                            <h4 className="font-medium mb-2">Subtasks:</h4>
                                                            <ul className="space-y-1">
                                                                {exercise.subtasks.map((subtask) => (
                                                                    <li key={subtask.subtask_id} className="flex items-center gap-2 text-sm">
                                                                        <CheckCircle className="h-3 w-3 text-green-600" />
                                                                        {subtask.description}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="ground-school" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5" />
                                    Ground School Modules
                                </CardTitle>
                                <CardDescription>
                                    Theoretical knowledge training modules
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {courseData.ground_school.map((module) => (
                                        <Card key={module.ground_school_id}>
                                            <CardHeader>
                                                <CardTitle className="text-lg">{module.title}</CardTitle>
                                                <CardDescription>{module.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-2">
                                                    <h4 className="font-medium text-sm">Topics Covered:</h4>
                                                    <ul className="space-y-1">
                                                        {module.ground_school_subtasks.map((subtask) => (
                                                            <li key={subtask.subtask_id} className="flex items-center gap-2 text-sm">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                                {subtask.description}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="requirements" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5" />
                                    Course Requirements
                                </CardTitle>
                                <CardDescription>
                                    Prerequisites and requirements for major milestones
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {courseData.requirements.map((requirement) => (
                                        <div key={requirement.requirement_id} className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="default" className="text-sm">
                                                    {requirement.name}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-gray-600">{requirement.description}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {requirement.requirement_items.map((item) => (
                                                    <div
                                                        key={item.requirementitem_id}
                                                        className={`p-3 rounded-lg border ${getRequirementTypeColor(item.type)}`}
                                                    >
                                                        <div className="flex items-center gap-2 mb-1">
                                                            {getRequirementTypeIcon(item.type)}
                                                            <span className="font-medium text-sm">{item.type}</span>
                                                        </div>
                                                        <p className="text-sm">{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <Separator />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}