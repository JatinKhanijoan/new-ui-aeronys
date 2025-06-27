import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import {
    Calendar,
    Clock,
    BookOpen,
    MessageSquare,
    Wallet,
    AlertTriangle,
    CheckCircle,
    User,
    GraduationCap,
    CreditCard,
    Plus,
    Star,
    Target
} from 'lucide-react'

// Sample data for member dashboard
const upcomingRenewals = [
    { type: 'Medical Certificate', expiryDate: '2025-07-15', daysRemaining: 18, status: 'critical', category: 'Medical' },
    { type: 'PPL License', expiryDate: '2025-08-20', daysRemaining: 54, status: 'warning', category: 'License' },
    { type: 'Radio License', expiryDate: '2025-09-30', daysRemaining: 95, status: 'ok', category: 'License' }
]

const courseProgress = [
    { course: 'PPL(A) Training', totalHours: 45, completedHours: 32.5, requiredHours: 45, progress: 72, nextMilestone: 'Solo Navigation' },
    // { course: 'Theory Knowledge', totalModules: 9, completedModules: 6, progress: 67, nextMilestone: 'Air Law Exam' },
    { course: 'Night Rating', totalHours: 5, completedHours: 2.5, requiredHours: 5, progress: 50, nextMilestone: 'Night Solo' }
]

const upcomingExams = [
    // { exam: 'Air Law', date: '2025-07-05', time: '09:00', location: 'Training Room A', status: 'scheduled' },
    { exam: 'Navigation', date: '2025-07-12', time: '14:00', status: 'scheduled' },
    { exam: 'Ground School', date: '2025-07-02', time: '10:00', status: 'upcoming' }
]

const instructorFeedback = [
    {
        instructor: 'Luke Skywalker',
        date: '2025-06-25',
        lesson: 'Circuit Training',
        feedback: 'Great improvement in landing technique. Focus on maintaining consistent approach speed.',
        recommendations: ['Review crosswind landing procedures']
    },
    {
        instructor: 'Obi Wan',
        date: '2025-06-23',
        lesson: 'Navigation Exercise',
        feedback: 'Excellent flight planning and execution. Ready for solo navigation.',
        recommendations: ['Book solo navigation flight', 'Review emergency procedures']
    }
]

const walletData = {
    balance: 1250.00,
    currency: '£',
    recentTransactions: [
        { date: '2025-06-26', description: 'Flight Training - G-BSVM', amount: -180.00 },
        { date: '2025-06-24', description: 'Ground School Session', amount: -45.00 },
        { date: '2025-06-20', description: 'Wallet Top-up', amount: 500.00 }
    ]
}

const MemberDashboard = () => {
    const [topUpAmount, setTopUpAmount] = useState('')

    const cn = (...classes: (string | boolean | undefined)[]): string =>
        classes.filter(Boolean).join(' ')

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'critical':
                return 'bg-destructive/10 text-destructive'
            case 'warning':
                return 'bg-orange-100 text-orange-700'
            default:
                return 'bg-green-100 text-green-700'
        }
    }

    const getRenewalIcon = (daysRemaining: number) => {
        if (daysRemaining <= 30) return <AlertTriangle className="h-4 w-4 text-destructive" />
        if (daysRemaining <= 60) return <Clock className="h-4 w-4 text-orange-500" />
        return <CheckCircle className="h-4 w-4 text-green-600" />
    }

    return (
        <div className="flex-1 w-full p-4 pt-0 space-y-6 transition-all duration-300 ease-in-out overflow-auto">
            <div className="flex p-2 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, John</h1>
                    <p className="text-muted-foreground">Track your flight training progress and manage your account.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Badge>
                </div>
            </div>

            {/* Upcoming Renewals */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                        Upcoming License & Medical Renewals
                    </CardTitle>
                    <CardDescription>Stay on top of your certification requirements</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {upcomingRenewals.map((renewal, index) => (
                            <div key={index} className="p-4 rounded-lg border bg-card">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        {getRenewalIcon(renewal.daysRemaining)}
                                        <div>
                                            <p className="font-medium text-sm">{renewal.type}</p>
                                            <p className="text-xs text-muted-foreground">{renewal.category}</p>
                                        </div>
                                    </div>
                                    <Badge className={cn("text-xs", getStatusColor(renewal.status))}>
                                        {renewal.daysRemaining} days
                                    </Badge>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Expires:</span>
                                        <span>{new Date(renewal.expiryDate).toLocaleDateString()}</span>
                                    </div>
                                    {/* <Button
                                        size="sm"
                                        variant={renewal.status === 'critical' ? 'default' : 'outline'}
                                        className="w-full"
                                    >
                                        {renewal.status === 'critical' ? 'Renew Now' : 'Schedule Renewal'}
                                    </Button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Course Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Hours Completed & Course Requirements
                        </CardTitle>
                        <CardDescription>Your training progress across all courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {courseProgress.map((course, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">{course.course}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Next: {course.nextMilestone}
                                            </p>
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {course.progress}%
                                        </Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {course.completedHours && (
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>Hours: {course.completedHours}/{course.requiredHours}</span>
                                                <span>{(course.requiredHours - course.completedHours).toFixed(1)}h remaining</span>
                                            </div>
                                        )}
                                        {/* {course.completedModules ? (
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>Modules: {course.completedModules}/{course.totalModules}</span>
                                                <span>{course.totalModules - course.completedModules} remaining</span>
                                            </div>
                                        ) : null} */}
                                        <Progress value={course.progress} className="h-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Detailed Progress
                        </Button>
                    </CardFooter>
                </Card>

                {/* Upcoming Exams */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            Upcoming Exams & Ground School
                        </CardTitle>
                        <CardDescription>Your scheduled exams and study sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingExams.map((exam, index) => (
                                <div key={index} className="p-3 rounded-lg border bg-card/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {exam.status === 'upcoming' ?
                                                <BookOpen className="h-4 w-4 text-primary" /> :
                                                <GraduationCap className="h-4 w-4 text-primary" />
                                            }
                                            <span className="font-medium">{exam.exam}</span>
                                        </div>
                                        <Badge
                                            variant={exam.status === 'upcoming' ? 'default' : 'outline'}
                                            className="text-xs"
                                        >
                                            {exam.status}
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(exam.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {exam.time}
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Instructor Feedback */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            Instructor Feedback & Recommendations
                        </CardTitle>
                        <CardDescription>Recent feedback from your flight instructors</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {instructorFeedback.map((feedback, index) => (
                                <div key={index} className="p-4 rounded-lg border bg-card">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-primary" />
                                            <div>
                                                <p className="font-medium text-sm">{feedback.instructor}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {feedback.lesson} • {new Date(feedback.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "h-3 w-3",
                                                        i < feedback.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-muted-foreground/30"
                                                    )}
                                                />
                                            ))}
                                        </div> */}
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-sm">{feedback.feedback}</p>
                                        <div className="space-y-2">
                                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                                Recommendations:
                                            </p>
                                            <ul className="space-y-1">
                                                {feedback.recommendations.map((rec, recIndex) => (
                                                    <li key={recIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                                                        <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                                        {rec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            View All Feedback
                        </Button>
                    </CardFooter>
                </Card>

                {/* Wallet */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Wallet className="h-5 w-5 text-primary" />
                            Wallet Balance
                        </CardTitle>
                        <CardDescription>Manage your training account balance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="text-center p-4 rounded-lg bg-primary/5">
                                <p className="text-2xl font-bold">
                                    {walletData.currency}{walletData.balance.toFixed(2)}
                                </p>
                                <p className="text-sm text-muted-foreground">Available Balance</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm font-medium">Recent Transactions</p>
                                {walletData.recentTransactions.map((transaction, index) => (
                                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                        <div>
                                            <p className="text-xs font-medium">{transaction.description}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(transaction.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <span className={cn(
                                            "text-xs font-medium",
                                            transaction.amount > 0 ? "text-green-600" : "text-muted-foreground"
                                        )}>
                                            {transaction.amount > 0 ? '+' : ''}{walletData.currency}{Math.abs(transaction.amount).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full" size="sm">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Top Up Wallet
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                            <Wallet className="mr-2 h-4 w-4" />
                            Transaction History
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default MemberDashboard