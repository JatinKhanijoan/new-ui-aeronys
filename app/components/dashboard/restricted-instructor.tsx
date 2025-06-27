import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import {
    Calendar,
    BookOpen,
    GraduationCap,
} from 'lucide-react'
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

// Sample data for student progress
const studentProgressData = [
    { student: 'Leia Skywalker', totalHours: 45.2, soloHours: 12.5, dualHours: 32.7, progress: 68, course: 'PPL(A)', nextLesson: 'Navigation Exercise' },
    { student: 'Obi Wan', totalHours: 28.8, soloHours: 5.2, dualHours: 23.6, progress: 42, course: 'PPL(A)', nextLesson: 'Basic Instrument Flying' },
    { student: 'Luke Skywalker', totalHours: 62.1, soloHours: 28.3, dualHours: 33.8, progress: 85, course: 'CPL', nextLesson: 'Advanced Navigation' },
]

// Pie chart data for student progress distribution
const progressDistributionData = [
    { name: '0-25%', value: 0, fill: 'var(--color-chart-3)' },
    { name: '26-50%', value: 1, fill: 'var(--color-chart-2)' },
    { name: '51-75%', value: 1, fill: 'var(--color-chart-1)' },
    { name: '76-100%', value: 1, fill: 'var(--color-primary)' },
]

const RestrictedInstructorDashboard = () => {
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
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, Anakin Skywalker</h1>
                    <p className="text-muted-foreground">Overview of members' training progress.</p>
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
        </div>
    )
}

export default RestrictedInstructorDashboard