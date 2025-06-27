import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Separator } from '~/components/ui/separator'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import {
    Calendar,
    Clock,
    AlertTriangle,
    BarChart3,
    UserCheck,
    User,
    Bell,
    AlertCircle,
    CheckCircle2,
    CalendarClock,
    BookOpen,
    GraduationCap,
} from 'lucide-react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Legend,
} from 'recharts'

// Sample data for student progress
const studentProgressData = [
    { student: 'Leia Skywalker', totalHours: 45.2, soloHours: 12.5, dualHours: 32.7, progress: 68, course: 'PPL(A)', nextLesson: 'Navigation Exercise' },
    { student: 'John Doe', totalHours: 28.8, soloHours: 5.2, dualHours: 23.6, progress: 42, course: 'PPL(A)', nextLesson: 'Basic Instrument Flying' },
    { student: 'Luke Skywalker', totalHours: 62.1, soloHours: 28.3, dualHours: 33.8, progress: 85, course: 'CPL', nextLesson: 'Advanced Navigation' },
]

// Sample data for license/medical renewals
const licenseRenewalData = [
    { type: 'Flight Instructor Rating', expiryDate: '2023-12-15', daysRemaining: 25, status: 'warning' },
    { type: 'Medical Class 1', expiryDate: '2024-01-10', daysRemaining: 51, status: 'warning' },
    { type: 'SEP Rating', expiryDate: '2024-03-30', daysRemaining: 130, status: 'ok' },
]

// Sample data for availability vs bookings
const availabilityData = [
    { day: 'Monday', availableHours: 8, bookedHours: 6, pendingRequests: 2 },
    { day: 'Tuesday', availableHours: 6, bookedHours: 6, pendingRequests: 3 },
    { day: 'Wednesday', availableHours: 8, bookedHours: 4, pendingRequests: 1 },
    { day: 'Thursday', availableHours: 6, bookedHours: 5, pendingRequests: 0 },
    { day: 'Friday', availableHours: 8, bookedHours: 7, pendingRequests: 2 },
    { day: 'Saturday', availableHours: 6, bookedHours: 6, pendingRequests: 4 },
    { day: 'Sunday', availableHours: 0, bookedHours: 0, pendingRequests: 0 },
]

// Sample data for system notices
const systemNoticesData = [
    { title: 'Weather Warning for Tomorrow', date: '2023-11-18', priority: 'high', read: false, category: 'Operations' },
    { title: 'Staff Meeting - Friday 3PM', date: '2023-11-20', priority: 'medium', read: false, category: 'Administrative' },
    { title: 'Aircraft G-BTNH Maintenance Complete', date: '2023-11-05', priority: 'low', read: true, category: 'Maintenance' },
]

// Pie chart data for student progress distribution
const progressDistributionData = [
    { name: '0-25%', value: 1, fill: 'var(--color-chart-3)' },
    { name: '26-50%', value: 1, fill: 'var(--color-chart-2)' },
    { name: '51-75%', value: 2, fill: 'var(--color-chart-1)' },
    { name: '76-100%', value: 1, fill: 'var(--color-primary)' },
]

const InstructorDashboard = () => {
    const cn = (...classes: (string | boolean | undefined)[]): string =>
        classes.filter(Boolean).join(' ')

    return (
        <div
            className={cn(
                "flex-1 w-full p-4 pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto",
            )}
        >
            {/* Welcome Header */}
            <div className="flex p-2 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, John Smith</h1>
                    <p className="text-muted-foreground">You have {availabilityData.reduce((acc, day) => acc + day.pendingRequests, 0)} pending booking requests.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Badge>
                </div>
            </div>

            {/* Student Progress Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Members' Progress Summary
                    </CardTitle>
                    <CardDescription>Overview of members' training progress</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 rounded-lg border bg-card text-center">
                            <div className="text-3xl font-bold text-primary mb-1">{studentProgressData.length}</div>
                            <div className="text-xs text-muted-foreground">Active Members</div>
                        </div>
                        <div className="p-4 rounded-lg border bg-card text-center">
                            <div className="text-3xl font-bold text-primary mb-1">
                                {Math.round(studentProgressData.reduce((acc, student) => acc + student.progress, 0) / studentProgressData.length)}%
                            </div>
                            <div className="text-xs text-muted-foreground">Average Progress</div>
                        </div>
                        <div className="p-4 rounded-lg border bg-card text-center">
                            <div className="text-3xl font-bold text-primary mb-1">
                                {studentProgressData.reduce((acc, student) => acc + student.totalHours, 0).toFixed(1)}h
                            </div>
                            <div className="text-xs text-muted-foreground">Total Training Hours</div>
                        </div>
                        <div className="p-4 rounded-lg border bg-card text-center">
                            <div className="text-3xl font-bold text-primary mb-1">
                                {studentProgressData.reduce((acc, student) => acc + student.soloHours, 0).toFixed(1)}h
                            </div>
                            <div className="text-xs text-muted-foreground">Total Solo Hours</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                            {studentProgressData.map((student, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{student.student}</span>
                                            <Badge variant="outline" className="text-xs">
                                                {student.course}
                                            </Badge>
                                        </div>
                                        <span className="text-sm font-medium">{student.totalHours}h</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>Dual: {student.dualHours}h | Solo: {student.soloHours}h</span>
                                            <span>{student.progress}% Complete</span>
                                        </div>
                                        <Progress value={student.progress} className="h-2" />
                                        <div className="flex justify-between text-xs">
                                            <span className="text-muted-foreground">Next lesson: </span>
                                            <span className="font-medium">{student.nextLesson}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-80">
                            <p className="text-sm font-medium mb-2 text-center">Member Progress Distribution</p>
                            <ResponsiveContainer width="100%" height="90%">
                                <PieChart>
                                    <Pie
                                        data={progressDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                        labelLine={false}
                                    >
                                        {progressDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value, name) => [`${value} students`, name]}
                                        contentStyle={{
                                            backgroundColor: 'var(--color-popover)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        View Detailed Member Records
                    </Button>
                </CardFooter>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* License/Medical Renewals */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-primary" />
                            Your License & Medical Renewals
                        </CardTitle>
                        <CardDescription>Upcoming personal certification renewals</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold text-destructive mb-1">{licenseRenewalData.filter(item => item.daysRemaining <= 30).length}</div>
                                <div className="text-xs text-muted-foreground">Next 30 Days</div>
                            </div>
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold text-orange-500 mb-1">{licenseRenewalData.filter(item => item.daysRemaining > 30 && item.daysRemaining <= 60).length}</div>
                                <div className="text-xs text-muted-foreground">31-60 Days</div>
                            </div>
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold text-green-500 mb-1">{licenseRenewalData.filter(item => item.daysRemaining > 60 && item.daysRemaining <= 90).length}</div>
                                <div className="text-xs text-muted-foreground">61-90 Days</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {licenseRenewalData.map((item, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{item.type}</span>
                                        </div>
                                        <Badge
                                            className={cn(
                                                "text-xs",
                                                item.status === 'critical' ? 'bg-destructive/10 text-destructive' :
                                                    item.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-green-100 text-green-700'
                                            )}
                                        >
                                            {item.daysRemaining} days
                                        </Badge>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Expires: {new Date(item.expiryDate).toLocaleDateString()}
                                    </div>
                                    <div className="mt-2">
                                        <Progress
                                            value={100 - (item.daysRemaining / 90 * 100)}
                                            className={cn(
                                                "h-2",
                                                item.status === 'critical' && "[&>div]:bg-destructive",
                                                item.status === 'warning' && "[&>div]:bg-orange-500"
                                            )}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Schedule Renewal Appointments
                        </Button>
                    </CardFooter>
                </Card>

                {/* Availability vs Booking Requests */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CalendarClock className="h-5 w-5 text-primary" />
                            Your Availability vs. Booking Requests
                        </CardTitle>
                        <CardDescription>Weekly schedule and pending member requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={availabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                                    <XAxis
                                        dataKey="day"
                                        stroke="var(--color-muted-foreground)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="var(--color-muted-foreground)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'var(--color-popover)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Bar
                                        dataKey="availableHours"
                                        stackId="a"
                                        fill="var(--color-chart-1)"
                                        name="Available Hours"
                                    />
                                    <Bar
                                        dataKey="bookedHours"
                                        stackId="b"
                                        fill="var(--color-primary)"
                                        name="Booked Hours"
                                    />
                                    <Bar
                                        dataKey="pendingRequests"
                                        fill="var(--color-chart-3)"
                                        name="Pending Requests"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-4">
                            {availabilityData.filter(day => day.pendingRequests > 0).map((day, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{day.day}</span>
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {day.pendingRequests} pending requests
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Available: {day.availableHours}h | Booked: {day.bookedHours}h</span>
                                        <span>{Math.round((day.bookedHours / day.availableHours) * 100)}% Booked</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Manage Your Schedule
                        </Button>
                    </CardFooter>
                </Card>
            </div>

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

export default InstructorDashboard