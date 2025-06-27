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
    CreditCard,
    UserCheck,
    Plane,
    Wrench,
    CalendarClock,
    AlertCircle,
    CheckCircle2,
    User,
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

// Sample data for license/medical renewals
const licenseRenewalData = [
    { name: 'Leia Skywalker', type: 'Medical', expiryDate: '2025-12-15', daysRemaining: 25, status: 'warning' },
    { name: 'Luke Skywalker', type: 'IRR', expiryDate: '2025-01-10', daysRemaining: 51, status: 'warning' },
    { name: 'Obi Wan', type: 'MEP', expiryDate: '2025-11-30', daysRemaining: 10, status: 'critical' },
    { name: 'Anakin Skywalker', type: 'SEP', expiryDate: '2025-02-20', daysRemaining: 92, status: 'ok' },
    { name: 'John Doe', type: 'MEP', expiryDate: '2025-01-25', daysRemaining: 66, status: 'warning' },
]

// Sample data for outstanding payments
const outstandingPaymentsData = [
    { member: 'John Doe', amount: 850, daysOverdue: 15, invoiceNumber: 'FLCN0025' },
    { member: 'Leia Skywalker', amount: 1200, daysOverdue: 30, invoiceNumber: 'FLCN0026' },
    { member: 'Luke Skywalker', amount: 450, daysOverdue: 7, invoiceNumber: 'FLCN0027' },
    { member: 'Obi Wan', amount: 2100, daysOverdue: 45, invoiceNumber: 'FLCN0028' },
]

// Sample data for today's flight schedule
const flightScheduleData = [
    { time: '08:00 - 10:00', student: 'Luke Skywalkekr', instructor: 'John Doe', aircraft: 'G-BSVM', type: 'Training', status: 'completed' },
    { time: '10:30 - 12:30', student: 'Obi Wan', instructor: 'John Doe', aircraft: 'G-BTNH', type: 'Solo', status: 'in-progress' },
    { time: '13:00 - 15:00', student: 'Leia Sywalker', instructor: 'John Doe', aircraft: 'G-ENNA', type: 'Training', status: 'scheduled' },
    { time: '15:30 - 17:30', student: 'Anakin Skywalker', instructor: 'John Doe', aircraft: 'G-BTID', type: 'Solo', status: 'scheduled' },
]

// Sample data for aircraft availability
const aircraftAvailabilityData = [
    { aircraft: 'G-OXFD', type: 'PA34', status: 'available' },
    { aircraft: 'G-BTNH', type: 'PA28', status: 'available' },
    { aircraft: 'G-ENNA', type: 'PA28', status: 'available' },
    { aircraft: 'G-BSVM', type: 'PA28', status: 'maintenance' },
    { aircraft: 'G-LSFT', type: 'PA28', status: 'maintenance' },
    { aircraft: 'G-BTID', type: 'PA28', status: 'maintenance' },
]

// Sample data for maintenance vs bookings
const maintenanceBookingData = [
    { aircraft: 'G-BSVM', maintenanceDate: '2025-06-25', maintenanceType: '50hr Check', conflictingBookings: 2, resolved: false },
    { aircraft: 'G-LSFT', maintenanceDate: '2025-06-26', maintenanceType: 'Annual Inspection', conflictingBookings: 5, resolved: false },
    { aircraft: 'G-BTID', maintenanceDate: '2025-06-27', maintenanceType: 'Avionics Update', conflictingBookings: 3, resolved: false },
]

// Pie chart data for license renewals by timeframe
const renewalTimeframeData = [
    { name: '0-30 days', value: 2, fill: 'var(--color-destructive)' },
    { name: '31-60 days', value: 3, fill: 'var(--color-chart-3)' },
    { name: '61-90 days', value: 4, fill: 'var(--color-chart-1)' },
]

const OpsDashboard = () => {
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
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, Operations Manager</h1>
                    <p className="text-muted-foreground">Here's what's happening at your flight school today.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* License/Medical Renewals */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-primary" />
                            License & Medical Renewals
                        </CardTitle>
                        <CardDescription>Upcoming renewals in the next 90 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold mb-1">{licenseRenewalData.filter(item => item.daysRemaining <= 30).length}</div>
                                <div className="text-xs text-muted-foreground">Next 30 Days</div>
                            </div>
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold mb-1">{licenseRenewalData.filter(item => item.daysRemaining > 30 && item.daysRemaining <= 60).length}</div>
                                <div className="text-xs text-muted-foreground">31-60 Days</div>
                            </div>
                            <div className="p-4 rounded-lg border bg-card text-center">
                                <div className="text-3xl font-bold mb-1">{licenseRenewalData.filter(item => item.daysRemaining > 60 && item.daysRemaining <= 90).length}</div>
                                <div className="text-xs text-muted-foreground">61-90 Days</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {licenseRenewalData.map((item, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{item.name}</span>
                                            <Badge variant="outline" className="text-xs">
                                                {item.type}
                                            </Badge>
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
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            View All Renewals
                        </Button>
                    </CardFooter>
                </Card>

                {/* Outstanding Payments */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-primary" />
                            Outstanding Payments
                        </CardTitle>
                        <CardDescription>Overdue payments requiring attention</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={outstandingPaymentsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                                    <XAxis
                                        dataKey="member"
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
                                        dataKey="amount"
                                        fill="var(--color-primary)"
                                        radius={[4, 4, 0, 0]}
                                        name="Amount Due (£)"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-4">
                            {outstandingPaymentsData.map((payment, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{payment.member}</span>
                                            <Badge variant="outline" className="text-xs">
                                                {payment.invoiceNumber}
                                            </Badge>
                                        </div>
                                        <span className="text-sm font-medium text-destructive">£{payment.amount}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Overdue by {payment.daysOverdue} days
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Process Payments
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Today's Flight Schedule */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarClock className="h-5 w-5 text-primary" />
                        Today's Flight Schedule
                    </CardTitle>
                    <CardDescription>Current and upcoming flights with instructor assignments</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {flightScheduleData.map((flight, index) => (
                            <div key={index} className="p-4 rounded-lg border bg-card">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            className={cn(
                                                "text-xs",
                                                flight.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                    flight.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-gray-100 text-gray-700'
                                            )}
                                        >
                                            {flight.status === 'completed' ? 'Completed' :
                                                flight.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                                        </Badge>
                                        <span className="font-medium">{flight.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-xs">
                                            {flight.aircraft}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                            {flight.type}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Member: <span className="font-medium">{flight.student}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <UserCheck className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Instructor: <span className="font-medium">{flight.instructor}</span></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        View Full Schedule
                    </Button>
                </CardFooter>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Aircraft Availability */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plane className="h-5 w-5 text-primary" />
                            Aircraft Availability
                        </CardTitle>
                        <CardDescription>Available aircraft for walk-in bookings today</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {aircraftAvailabilityData.map((aircraft, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h4 className="font-medium">{aircraft.aircraft}</h4>
                                            <p className="text-sm text-muted-foreground">{aircraft.type}</p>
                                        </div>
                                        <Badge
                                            className={cn(
                                                "text-xs",
                                                aircraft.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-destructive/10 text-destructive'
                                            )}
                                        >
                                            {aircraft.status === 'available' ? 'Available' : 'Maintenance'}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <Clock className="mr-2 h-4 w-4" />
                            Book Aircraft
                        </Button>
                    </CardFooter>
                </Card>

                {/* Maintenance vs Booking Conflicts */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-primary" />
                            Maintenance & Booking Conflicts
                        </CardTitle>
                        <CardDescription>Scheduled maintenance that conflicts with bookings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {maintenanceBookingData.map((item, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="font-semibold">{item.aircraft}</p>
                                            <p className="text-sm text-muted-foreground">{item.maintenanceType}</p>
                                        </div>
                                        <Badge
                                            className={cn(
                                                "text-xs",
                                                item.resolved ? 'bg-green-100 text-green-700' : 'bg-destructive/10 text-destructive'
                                            )}
                                        >
                                            {item.resolved ? 'Resolved' : 'Conflict'}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Maintenance Date:</span>
                                            <span className="font-medium">{new Date(item.maintenanceDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Conflicting Bookings:</span>
                                            <span className="font-medium">{item.conflictingBookings}</span>
                                        </div>
                                    </div>
                                    {!item.resolved && (
                                        <div className="mt-3">
                                            <Button variant="default" size="sm" className="w-full">
                                                Resolve Conflicts
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <Wrench className="mr-2 h-4 w-4" />
                            View Maintenance Schedule
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default OpsDashboard