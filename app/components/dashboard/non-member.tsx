import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import {
    Calendar,
    Clock,
    BookOpen,
    Info,
    ShoppingCart,
    Plane,
    Star,
    Users,
    Award,
    MapPin,
    Phone,
    Mail,
    CreditCard,
    Gift,
    AlertCircle,
    CheckCircle,
    ArrowRight,
    Timer,
    AlertTriangle,
    CheckCircle2,
    Bell
} from 'lucide-react'

const systemNoticesData = [
    { title: 'Weather Warning for Tomorrow', date: '2023-11-18', priority: 'high', category: 'Operations' },
    { title: 'Staff Meeting - Friday 3PM', date: '2023-11-20', priority: 'medium', category: 'Administrative' },
    { title: 'Aircraft G-BTNH Maintenance Complete', date: '2023-11-05', priority: 'low', category: 'Maintenance' },
]

const trialFlights = [
    {
        name: 'Discovery Flight',
        description: 'Your first taste of flying',
        duration: '30 minutes'
    },
    {
        name: 'Trial Lesson',
        description: 'Hands-on flying experience',
        duration: '45 minutes'
    },
    {
        name: 'Introductory Course',
        description: 'Complete beginner package',
        duration: '2 hours'
    }
]

const courses = [
    {
        name: 'Private Pilot License (PPL)',
        code: 'PPL(A)',
        description: 'Complete private pilot training'
    },
    {
        name: 'Commercial Pilot License (CPL)',
        code: 'CPL(A)',
        description: 'Professional pilot certification'
    },
    {
        name: 'Instrument Rating (IR)',
        code: 'IR(A)',
        description: 'Advanced instrument flying'
    }
]

const NonMemberDashboard = () => {

    return (
        <div className="flex-1 w-full p-4 pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight">Welcome to EFG Flying School</h1>
                    <p className="text-muted-foreground text-sm sm:text-base">Start your aviation journey today with our professional flight training programs.</p>
                </div>
                <Badge variant="outline" className="text-xs flex items-center gap-1 w-fit">
                    <Calendar className="h-3 w-3" />
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </Badge>
            </div>

            {/* Quick Actions */}
            <Card className="bg-primary/5 border-primary/20">
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="text-center sm:text-left space-y-2">
                            <h3 className="text-lg font-semibold">Ready to Take Flight?</h3>
                            <p className="text-muted-foreground text-sm">Book your discovery flight or start your training journey</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Button size="lg" className="flex items-center gap-2 w-full sm:w-auto">
                                <Calendar className="h-4 w-4" />
                                New Booking
                            </Button>
                            <Button size="lg" variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
                                <Phone className="h-4 w-4" />
                                Call Us
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Trial Flights and Courses */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Trial Flights */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Gift className="h-5 w-5 text-primary" />
                            Trial Flights & Discovery Sessions
                        </CardTitle>
                        <CardDescription>Experience flying before committing to full training</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {trialFlights.map((flight, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-base">{flight.name}</h3>
                                            <p className="text-sm text-muted-foreground">{flight.description}</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Timer className="h-3 w-3" />
                                                {flight.duration}
                                            </div>
                                            <Button size="sm" className="w-full sm:w-auto">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Book
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Course Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            Course Information
                        </CardTitle>
                        <CardDescription>Professional pilot training programs</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {courses.map((course, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="space-y-2">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <Badge variant="outline" className="font-mono text-xs w-fit">
                                                    {course.code}
                                                </Badge>
                                                <h3 className="font-semibold text-base">{course.name}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{course.description}</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                                                <BookOpen className="mr-2 h-4 w-4" />
                                                Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Contact CTA */}
            <Card className="bg-primary/5 border-primary/20">
                <CardContent>
                    <div className="w-full text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Not sure which option is right for you?
                        </p>
                        <Button variant="outline" size="sm">
                            <Phone className="mr-2 h-4 w-4" />
                            Speak to Our Team
                        </Button>
                    </div>
                </CardContent>
            </Card>
            {/* System Notices */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        System Notices
                    </CardTitle>
                    <CardDescription>Important announcements and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {systemNoticesData.map((notice, index) => (
                            <div key={index} className="p-4 rounded-lg border">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        {notice.priority === 'high' ? (
                                            <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                                        ) : notice.priority === 'medium' ? (
                                            <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                                        ) : (
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        )}
                                        <span className="font-medium text-sm sm:text-base">{notice.title}</span>
                                    </div>
                                    <Badge variant="outline" className="text-xs w-fit">
                                        {notice.category}
                                    </Badge>
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground mt-2 sm:mt-1">
                                    <span>Posted: {new Date(notice.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                        <Bell className="mr-2 h-4 w-4" />
                        View All Notices
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default NonMemberDashboard