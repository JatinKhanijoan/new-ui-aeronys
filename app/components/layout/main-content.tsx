import { cn } from "~/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"
import { Separator } from "~/components/ui/separator"
import { Button } from "~/components/ui/button"
import { CalendarIcon, ClipboardList, PlaneTakeoff, PlaneLanding, WrenchIcon, CreditCard, BookOpenCheck, AlertTriangle, BarChart3 } from "lucide-react"

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <PlaneTakeoff className="h-4 w-4 text-primary" />
                            Today's Flights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">4 completed, 8 scheduled</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-primary" />
                            Upcoming Bookings
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">28</div>
                        <p className="text-xs text-muted-foreground">Next 7 days</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                            Active Defects
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">1 critical, 2 minor</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-primary" />
                            Pending Invoices
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">£1,240</div>
                        <p className="text-xs text-muted-foreground">8 invoices pending</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Flight Activity
                        </CardTitle>
                        <CardDescription>Weekly flight hours overview</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="font-medium">G-ABCD</div>
                                    <div className="text-muted-foreground">18.5 hrs</div>
                                </div>
                                <Progress value={75} className="h-2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="font-medium">G-EFGH</div>
                                    <div className="text-muted-foreground">12.3 hrs</div>
                                </div>
                                <Progress value={50} className="h-2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="font-medium">G-IJKL</div>
                                    <div className="text-muted-foreground">8.7 hrs</div>
                                </div>
                                <Progress value={35} className="h-2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="font-medium">G-MNOP</div>
                                    <div className="text-muted-foreground">5.2 hrs</div>
                                </div>
                                <Progress value={20} className="h-2" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpenCheck className="h-5 w-5" />
                            Student Progress
                        </CardTitle>
                        <CardDescription>Recent milestones</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <PlaneTakeoff className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">First Solo</p>
                                    <p className="text-sm text-muted-foreground">Alex Johnson • Today</p>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex items-start gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <PlaneLanding className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Navigation Test</p>
                                    <p className="text-sm text-muted-foreground">Sarah Williams • Yesterday</p>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex items-start gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <ClipboardList className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">PPL(A) Exam</p>
                                    <p className="text-sm text-muted-foreground">Michael Brown • 2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <PlaneTakeoff className="h-5 w-5" />
                            Airfield Movements
                        </CardTitle>
                        <CardDescription>Today's inbound and outbound traffic</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">Inbound • G-LNDN</p>
                                    <p className="text-sm text-muted-foreground">From: Manchester (EGCC) • ETA: 10:15</p>
                                </div>
                                <div className="text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">Inbound</div>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">Outbound • G-ABCD</p>
                                    <p className="text-sm text-muted-foreground">To: Leeds Bradford (EGNM) • ETD: 11:45</p>
                                </div>
                                <div className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">Outbound</div>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">Inbound • G-SCOT</p>
                                    <p className="text-sm text-muted-foreground">From: Edinburgh (EGPH) • ETA: 14:30</p>
                                </div>
                                <div className="text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">Inbound</div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <PlaneLanding className="mr-2 h-4 w-4" />
                            View Movement Log
                        </Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <WrenchIcon className="h-5 w-5" />
                            Maintenance Status
                        </CardTitle>
                        <CardDescription>Aircraft maintenance overview</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">G-ABCD</p>
                                        <p className="text-xs text-muted-foreground">Next 50hr check</p>
                                    </div>
                                    <div className="text-sm font-medium text-amber-500">12.5 hrs remaining</div>
                                </div>
                                <Progress value={75} className="h-2" />
                            </div>
                            <Separator />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">G-EFGH</p>
                                        <p className="text-xs text-muted-foreground">Annual inspection</p>
                                    </div>
                                    <div className="text-sm font-medium text-red-500">Due in 5 days</div>
                                </div>
                                <Progress value={90} className="h-2" />
                            </div>
                            <Separator />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">G-IJKL</p>
                                        <p className="text-xs text-muted-foreground">Engine hours</p>
                                    </div>
                                    <div className="text-sm font-medium text-green-500">342 hrs to overhaul</div>
                                </div>
                                <Progress value={30} className="h-2" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <WrenchIcon className="mr-2 h-4 w-4" />
                            View Maintenance Log
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}