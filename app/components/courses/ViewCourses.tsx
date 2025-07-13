import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Plus, BookOpen, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router';

interface Course {
    course_id: string;
    name: string;
    description: string;
}

const courses: Course[] = [
    {
        course_id: "0e8b3fe2-3f63-4038-9b0d-e0382d808c65",
        name: "UK CAA PPL(A)",
        description: "A PPL for aeroplanes will allow you to act as pilot in command (PIC) in non-commercial operations on aeroplanes or touring motor gliders (TMGs)"
    },
    {
        course_id: "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
        name: "UK CAA Night Rating",
        description: "A night rating allows a pilot to fly at night exercising visual flight rules (VFR). If a pilot wishes to fly at night using instrument flight rules (IFR) they are also required to have an instrument rating.\n\nThe night rating is non-expiring (it has lifetime validity)."
    },
    {
        course_id: "9eef0bba-f32d-49d3-b33d-f9f5c4cbad84",
        name: "UK CAA SEP Rating",
        description: "This Course is for SEP Rating"
    }
];

const getCourseIcon = (courseName: string) => {
    if (courseName.includes('PPL')) return <Award className="w-5 h-5 text-blue-600" />;
    if (courseName.includes('Night')) return <Clock className="w-5 h-5 text-purple-600" />;
    return <BookOpen className="w-5 h-5 text-green-600" />;
};


const handleAddCourse = () => {
    console.log('Add new course clicked');
    alert('Add new course functionality would be implemented here');
};

export default function ViewCourses() {
    const navigate = useNavigate()
    const handleCourseClick = (courseId: string) => {
        navigate(`/courses/${courseId}`);
    };
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {courses.map((course) => (
                        <Card
                            key={course.course_id}
                            className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary flex flex-col h-full"
                            onClick={() => handleCourseClick(course.course_id)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Navigate to ${course.name} course details`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleCourseClick(course.course_id);
                                }
                            }}
                        >
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        {getCourseIcon(course.name)}
                                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                            {course.name}
                                        </CardTitle>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="leading-relaxed">
                                    {course.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <div className="pt-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                            View Details
                                        </span>
                                        <div className="w-5 h-5 group-hover:text-primary transition-colors">
                                            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {courses.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No courses available</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first course.</p>
                        <Button
                            onClick={handleAddCourse}
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
                        >
                            <Plus className="w-5 h-5" />
                            Add Course
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}