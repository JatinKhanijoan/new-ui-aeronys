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
const monthlyBookingData = [
    { month: 'Jan', bookings: 45, revenue: 12500, efficiency: 85 },
    { month: 'Feb', bookings: 52, revenue: 14200, efficiency: 88 },
    { month: 'Mar', bookings: 48, revenue: 13100, efficiency: 82 },
    { month: 'Apr', bookings: 61, revenue: 16800, efficiency: 91 },
    { month: 'May', bookings: 58, revenue: 15900, efficiency: 89 },
    { month: 'Jun', bookings: 67, revenue: 18400, efficiency: 93 },
]

const licenseExpiryData = [
    {
        name: 'Alex Quessy',
        licenses: [
            { type: 'SEP', expiryDate: '2024-08-15', daysUntilExpiry: 45, status: 'warning' }
        ]
    },
    {
        name: 'Ben McCutcheon',
        licenses: [
            { type: 'Medical', expiryDate: '2024-07-22', daysUntilExpiry: 21, status: 'critical' },
            { type: 'IR Single Engine', expiryDate: '2024-09-10', daysUntilExpiry: 71, status: 'ok' },
            { type: 'IR Multi Engine', expiryDate: '2024-08-05', daysUntilExpiry: 35, status: 'warning' },
            { type: 'IR Restricted', expiryDate: '2024-12-15', daysUntilExpiry: 167, status: 'ok' }
        ]
    },
    {
        name: 'Colin Cleaver',
        licenses: [
            { type: 'SEP', expiryDate: '2024-07-18', daysUntilExpiry: 17, status: 'critical' }
        ]
    },
    {
        name: 'Seamus Fogarty',
        licenses: [
            { type: 'IR Multi Engine', expiryDate: '2024-08-28', daysUntilExpiry: 58, status: 'warning' }
        ]
    },
    {
        name: 'Zoltan Arthoffer',
        licenses: [
            { type: 'Medical', expiryDate: '2024-07-25', daysUntilExpiry: 24, status: 'critical' },
            { type: 'MEP', expiryDate: '2024-09-08', daysUntilExpiry: 69, status: 'ok' },
            { type: 'IR Single Engine', expiryDate: '2024-08-12', daysUntilExpiry: 42, status: 'warning' },
        ]
    }
]

const flightActivityData = [
    { aircraft: 'G-BSVM', hours: 18.5, maxHours: 25, utilization: 74 },
    { aircraft: 'G-BTNH', hours: 12.3, maxHours: 25, utilization: 49 },
    { aircraft: 'G-ENNA', hours: 8.7, maxHours: 25, utilization: 35 },
    { aircraft: 'G-BTID', hours: 5.2, maxHours: 25, utilization: 21 },
]

const maintenanceData = [
    { aircraft: 'G-ABCD', type: 'Next 50hr check', remaining: 12.5, total: 50, status: 'warning', progress: 75 },
    { aircraft: 'G-EFGH', type: 'Annual inspection', remaining: 5, total: 365, status: 'critical', progress: 98 },
    { aircraft: 'G-IJKL', type: 'Engine hours', remaining: 342, total: 1200, status: 'ok', progress: 28 },
]

const utilizationData = [
    { name: 'Active', value: 65, color: 'var(--color-primary)' },
    { name: 'Maintenance', value: 15, color: 'var(--color-destructive)' },
    { name: 'Available', value: 20, color: 'var(--color-muted)' },
]

const revenueBreakdown = [
    { category: 'Training', amount: 45600, percentage: 42 },
    { category: 'Charter', amount: 35200, percentage: 32 },
    { category: 'Rental', amount: 28400, percentage: 26 },
]

const getStatusColor = (status: string): string => {
    switch (status) {
        case 'critical': return 'border-l-destructive bg-destructive/5'
        case 'warning': return 'border-l-orange-500 bg-orange-50 dark:bg-orange-950/20'
        case 'ok': return 'border-l-green-500 bg-green-50 dark:bg-green-950/20'
        default: return 'border-l-muted bg-muted/20'
    }
}

const getStatusBadgeColor = (status: string): string => {
    switch (status) {
        case 'critical': return 'bg-destructive/10 text-destructive hover:bg-destructive/20'
        case 'warning': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
        case 'ok': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
        default: return 'bg-muted text-muted-foreground'
    }
}

const MainContent = ({ rightSidebarOpen }: MainContentProps) => {
    const cn = (...classes: (string | boolean | undefined)[]): string =>
        classes.filter(Boolean).join(' ')

    return (
        <div
            className={cn(
                "flex-1 w-full p-4 pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto",
                rightSidebarOpen ? "pr-0" : "pr-4",
            )}
        >
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                                <p className="text-2xl font-bold">181</p>
                                <p className="text-xs text-primary">+12% from last month</p>
                            </div>
                            <Calendar className="h-8 w-8 text-primary" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                                <p className="text-2xl font-bold">£90.9K</p>
                                <p className="text-xs text-primary">+8% from last month</p>
                            </div>
                            <DollarSign className="h-8 w-8 text-primary" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Flight Hours</p>
                                <p className="text-2xl font-bold">44.7</p>
                                <p className="text-xs text-primary">This week</p>
                            </div>
                            <Activity className="h-8 w-8 text-primary" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Licenses Expiring</p>
                                <p className="text-2xl font-bold">7</p>
                                <p className="text-xs text-primary">Next 60 days</p>
                            </div>
                            <AlertTriangle className="h-8 w-8 text-primary" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Monthly Trends Chart */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Monthly Performance Overview
                    </CardTitle>
                    <CardDescription>Booking trends in the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={monthlyBookingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                                <XAxis
                                    dataKey="month"
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
                                {/* <Area
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="var(--color-primary)"
                                    fill="url(#colorRevenue)"
                                    strokeWidth={2}
                                    name="Revenue (£)"
                                /> */}
                                <Bar
                                    yAxisId="left"
                                    dataKey="bookings"
                                    fill="var(--color-chart-2)"
                                    radius={[4, 4, 0, 0]}
                                    name="Bookings"
                                    opacity={0.8}
                                />
                                {/* <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="efficiency"
                                    stroke="var(--color-chart-3)"
                                    strokeWidth={3}
                                    dot={{ fill: 'var(--color-chart-3)', strokeWidth: 2, r: 4 }}
                                    name="Efficiency %"
                                /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-6">
                {/* Flight Activity Chart */}
                {/* <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Aircraft Utilization
                        </CardTitle>
                        <CardDescription>Weekly flight hours and utilization rates</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={flightActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                                    <YAxis
                                        yAxisId="util"
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
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Bar
                                        yAxisId="hours"
                                        dataKey="hours"
                                        fill="var(--color-primary)"
                                        radius={[4, 4, 0, 0]}
                                        name="Flight Hours"
                                        opacity={0.8}
                                    />
                                    <Line
                                        yAxisId="util"
                                        type="monotone"
                                        dataKey="utilization"
                                        stroke="var(--color-chart-2)"
                                        strokeWidth={3}
                                        dot={{ fill: 'var(--color-chart-2)', strokeWidth: 2, r: 4 }}
                                        name="Utilization %"
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-2">
                            {flightActivityData.map((aircraft, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium">{aircraft.aircraft}</div>
                                        <Badge variant="outline" className="text-xs">
                                            {aircraft.utilization}%
                                        </Badge>
                                    </div>
                                    <div className="text-muted-foreground">{aircraft.hours}h / {aircraft.maxHours}h</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card> */}

                {/* Fleet Utilization Pie Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex w-full items-center gap-2">
                            <Plane className="h-5 w-5 text-primary" />
                            Fleet Status
                        </CardTitle>
                        <CardDescription>Current fleet utilization</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={utilizationData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {utilizationData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-2 mt-4">
                            {utilizationData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="font-medium">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
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
                                            {maintenance.remaining} {maintenance.status === 'critical' ? 'days' : 'hours'} remaining
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
            </div>

            {/* Maintenance Status */}

            {/* License Expiry Section - Moved to bottom with compact design */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" />
                        License & Medical Expiry Alerts
                    </CardTitle>
                    <CardDescription>Upcoming license and certification renewals</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {licenseExpiryData.map((person, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border bg-card/50">
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <div className="font-medium text-sm">{person.name}</div>
                                    {person.licenses.some(l => l.status === 'critical') && (
                                        <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                                            <AlertTriangle className="h-3 w-3 mr-1" />
                                            Critical
                                        </Badge>
                                    )}
                                    {person.licenses.some(l => l.status === 'warning') && !person.licenses.some(l => l.status === 'critical') && (
                                        <Badge variant="outline" className="text-xs px-1.5 py-0.5 bg-orange-50 text-orange-700 border-orange-200">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            Warning
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {person.licenses.map((license, licenseIndex) => (
                                        <div
                                            key={licenseIndex}
                                            className={cn(
                                                "flex items-center gap-2 px-2 py-1 rounded text-xs border-l-2",
                                                getStatusColor(license.status)
                                            )}
                                        >
                                            <span className="font-medium">{license.type}</span>
                                            <Badge
                                                className={cn("text-xs px-1 py-0", getStatusBadgeColor(license.status))}
                                            >
                                                {license.daysUntilExpiry}d
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">
                        <UserCheck className="mr-2 h-4 w-4" />
                        Send Reminders
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default MainContent