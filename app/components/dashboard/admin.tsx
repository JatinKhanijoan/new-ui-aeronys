import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Separator } from '~/components/ui/separator'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import {
    Calendar,
    Wrench,
    AlertTriangle,
    BarChart3,
    UserCheck,
    TrendingUp,
    Activity,
    DollarSign,
    Plane,
    Zap,
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
    Area,
    AreaChart,
    PieChart,
    Pie,
    Cell,
    ComposedChart,
} from 'recharts'

interface MainContentProps {
    rightSidebarOpen: boolean
}

// Sample data for charts
const weeklyInvoiceData = [
    { week: 'Week 1', invoices: 24, amount: 6800, paid: 18, pending: 6 },
    { week: 'Week 2', invoices: 31, amount: 8900, paid: 28, pending: 3 },
    { week: 'Week 3', invoices: 28, amount: 7600, paid: 22, pending: 6 },
    { week: 'Week 4', invoices: 35, amount: 9200, paid: 32, pending: 3 },
]

const studentProgressData = [
    { student: 'Leia Skywalker', totalHours: 45.2, soloHours: 12.5, dualHours: 32.7, progress: 68, course: 'PPL(A)' },
    { student: 'Obi Wan', totalHours: 28.8, soloHours: 5.2, dualHours: 23.6, progress: 42, course: 'PPL(A)' },
    { student: 'Anakin Skywalker', totalHours: 15.7, soloHours: 0, dualHours: 15.7, progress: 24, course: 'PPL(A)' },
    { student: 'Luke Skywalker', totalHours: 38.4, soloHours: 8.1, dualHours: 30.3, progress: 58, course: 'PPL(A)' },
]

const aircraftUtilizationData = [
    { aircraft: 'G-BSVM', thisWeek: 18.5, lastWeek: 22.1, bookings: 12 },
    { aircraft: 'G-BTNH', thisWeek: 15.2, lastWeek: 18.7, bookings: 9 },
    { aircraft: 'G-ENNA', thisWeek: 12.8, lastWeek: 14.3, bookings: 8 },
    { aircraft: 'G-BTID', thisWeek: 8.4, lastWeek: 11.2, bookings: 5 },
]

const instructorPerformanceData = [
    { instructor: 'Luke Skywalker', students: 8, weeklyHours: 24.5 },
    { instructor: 'Leia Skywalker', students: 6, weeklyHours: 18.2 },
    { instructor: 'Obi Wan', students: 5, weeklyHours: 15.8 },
    { instructor: 'Anakin Skywalker', students: 7, weeklyHours: 21.3 },
]

const maintenanceData = [
    { aircraft: 'G-ABCD', type: '5 day check', remaining: 1, total: 50, status: 'critical', progress: 80 },
    { aircraft: 'G-EFGH', type: 'Annual check', remaining: 5, total: 365, status: 'critical', progress: 98 },
    { aircraft: 'G-IJKL', type: 'ARC Renewal', remaining: 56, total: 1200, status: 'ok', progress: 28 },
]

const AdminDashboard = () => {
    const cn = (...classes: (string | boolean | undefined)[]): string =>
        classes.filter(Boolean).join(' ')

    return (
        <div
            className={cn(
                "flex-1 w-full p-4 pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto",
            )}
        >
            <div className="flex p-2 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, Admin</h1>
                    <p className="text-muted-foreground">Here's what's happening at your flight school today.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Badge>
                </div>
            </div>
            {/* Invoice & Revenue Tracking */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Weekly Invoice & Payment Tracking
                    </CardTitle>
                    <CardDescription>Invoice generation and payment status over the last 4 weeks</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={weeklyInvoiceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                                <XAxis
                                    dataKey="week"
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    yAxisId="left"
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'var(--color-popover)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                    labelStyle={{ color: 'var(--color-popover-foreground)' }}
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="paid"
                                    stackId="a"
                                    fill="var(--color-chart-1)"
                                    radius={[0, 0, 0, 0]}
                                    name="Paid Invoices"
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="pending"
                                    stackId="a"
                                    fill="var(--color-chart-3)"
                                    radius={[4, 4, 0, 0]}
                                    name="Pending Invoices"
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="var(--color-primary)"
                                    strokeWidth={3}
                                    dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                                    name="Total Amount (£)"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Student Progress Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Student Progress Overview
                        </CardTitle>
                        <CardDescription>Flight hours and course completion status</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <UserCheck className="mr-2 h-4 w-4" />
                            View All Students
                        </Button>
                    </CardFooter>
                </Card>

                {/* Aircraft Performance */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plane className="h-5 w-5 text-primary" />
                            Aircraft Performance
                        </CardTitle>
                        <CardDescription>Weekly utilization per aircraft</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={aircraftUtilizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                                    <XAxis
                                        dataKey="aircraft"
                                        stroke="var(--color-muted-foreground)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        yAxisId="hours"
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
                                        yAxisId="hours"
                                        dataKey="thisWeek"
                                        fill="var(--color-primary)"
                                        radius={[4, 4, 0, 0]}
                                        name="This Week (hrs)"
                                        opacity={0.8}
                                    />
                                    <Bar
                                        yAxisId="hours"
                                        dataKey="lastWeek"
                                        fill="var(--color-chart-2)"
                                        radius={[4, 4, 0, 0]}
                                        name="Last Week (hrs)"
                                        opacity={0.6}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Instructor Performance */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" />
                        Instructor Performance
                    </CardTitle>
                    <CardDescription>Teaching load, student satisfaction, and weekly hours</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {instructorPerformanceData.map((instructor, index) => (
                            <div key={index} className="p-4 rounded-lg border bg-card">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">{instructor.instructor}</h4>
                                        <Badge variant={'outline'}>
                                            Instructor
                                        </Badge>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Students:</span>
                                            <span className="font-medium">{instructor.students}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Weekly Hours:</span>
                                            <span className="font-medium">{instructor.weeklyHours}h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Maintenance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-primary" />
                            Maintenance Overview
                        </CardTitle>
                        <CardDescription>Aircraft maintenance status and upcoming requirements</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                            {maintenanceData.map((maintenance, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="font-semibold">{maintenance.aircraft}</p>
                                            <p className="text-sm text-muted-foreground">{maintenance.type}</p>
                                        </div>
                                        <Badge
                                            className={cn(
                                                "text-xs",
                                                maintenance.status === 'critical' ? 'bg-destructive/10 text-destructive' :
                                                    maintenance.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-green-100 text-green-700'
                                            )}
                                        >
                                            {maintenance.status}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Progress</span>
                                            <span>{maintenance.progress}%</span>
                                        </div>
                                        <Progress
                                            value={maintenance.progress}
                                            className={cn(
                                                "h-2",
                                                maintenance.status === 'critical' && "[&>div]:bg-destructive",
                                                maintenance.status === 'warning' && "[&>div]:bg-orange-500"
                                            )}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            {maintenance.remaining} {maintenance.status === 'critical' ? 'day(s)' : 'hour(s)'} remaining
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <Wrench className="mr-2 h-4 w-4" />
                            View Full Maintenance Schedule
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            Quick Actions
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-4'>
                            <Button>New Booking</Button>
                            <Button>View Training Records</Button>
                            <Button>View Invoices</Button>
                            <Button>Create Custom Invoice</Button>
                            <Button>New User</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AdminDashboard