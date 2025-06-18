"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Progress } from "~/components/ui/progress"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { cn } from "~/lib/utils"

interface MainContentProps {
    rightSidebarOpen: boolean
}


export function MainContent({ rightSidebarOpen }: MainContentProps) {
    return (
        <div
            className={cn(
                "flex-1 w-full p-4 pt-0 space-y-4 transition-all duration-300 ease-in-out overflow-auto",
                rightSidebarOpen ? "pr-0" : "pr-4",
            )}
        >
            {/* Stats Cards */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Cards */}
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
                <Card className="lg:col-span-4 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Chart placeholder - Revenue over time
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                                { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                                { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
                            ].map((sale, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                                        <p className="text-sm text-muted-foreground">{sale.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{sale.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Project Cards */}
            <div
                className={cn(
                    "grid gap-4 transition-all duration-300",
                    rightSidebarOpen
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                )}
            >
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Design System
                            <Badge variant="secondary">In Progress</Badge>
                        </CardTitle>
                        <CardDescription>Building a comprehensive design system for the platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Mobile App
                            <Badge variant="outline">Planning</Badge>
                        </CardTitle>
                        <CardDescription>Native mobile application development</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            API Integration
                            <Badge variant="default">Completed</Badge>
                        </CardTitle>
                        <CardDescription>Third-party API integrations and documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
                {!rightSidebarOpen && (
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Marketing Campaign
                                <Badge variant="secondary">Active</Badge>
                            </CardTitle>
                            <CardDescription>Q4 marketing campaign optimization</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Progress</span>
                                    <span>60%</span>
                                </div>
                                <Progress value={60} className="h-2" />
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
