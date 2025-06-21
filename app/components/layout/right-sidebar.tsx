"use client"

import * as React from "react"
import { Calendar } from "~/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { cn } from "~/lib/utils"
import { Button } from "../ui/button"

interface RightSidebarProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function RightSidebar({ open, onOpenChange }: RightSidebarProps) {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const upcomingEvents = [
        {
            title: "Team Standup",
            time: "9:00 AM",
            location: "Conference Room A",
            type: "meeting",
        },
        {
            title: "Design Review",
            time: "2:00 PM",
            location: "Online",
            type: "review",
        },
        {
            title: "Client Call",
            time: "4:30 PM",
            location: "Zoom",
            type: "call",
        },
        {
            title: "Project Deadline",
            time: "11:59 PM",
            location: "Development",
            type: "deadline",
        },
    ]

    const getEventColor = (type: string) => {
        switch (type) {
            case "meeting":
                return "bg-blue-500"
            case "review":
                return "bg-green-500"
            case "call":
                return "bg-purple-500"
            case "deadline":
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }

    return (
        <div className="w-80 p-4 min-w-96 bg-background animate-in slide-in-from-right duration-300 flex-shrink-0">
            <div className="h-full p-4 pt-0 space-y-4 overflow-auto">
                <div className="flex items-center justify-between pt-4">
                    <h2 className="text-lg font-semibold">Calendar</h2>
                </div>

                <Card className="shadow-sm">
                    <CardContent className="p-3 flex items-center justify-center">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-0 scale-110" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5" />
                            Today's Schedule
                        </CardTitle>
                        <CardDescription>Upcoming flights and bookings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">PPL Training • G-ABCD</p>
                                    <p className="text-sm text-muted-foreground">Alex Johnson with Instructor David</p>
                                </div>
                                <div className="text-sm font-medium">09:00 - 11:00</div>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">Navigation Time • G-EFGH</p>
                                    <p className="text-sm text-muted-foreground">Sarah Williams (Solo)</p>
                                </div>
                                <div className="text-sm font-medium">11:30 - 14:30</div>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">Night Rating • G-IJKL</p>
                                    <p className="text-sm text-muted-foreground">Michael Brown with Instructor Emma</p>
                                </div>
                                <div className="text-sm font-medium">19:00 - 21:00</div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            View Full Schedule
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Events Today</span>
                            <Badge variant="secondary">4</Badge>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">This Week</span>
                            <Badge variant="secondary">12</Badge>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">This Month</span>
                            <Badge variant="secondary">47</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}