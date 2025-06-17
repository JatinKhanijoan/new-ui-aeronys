"use client"

import * as React from "react"
import { Calendar } from "~/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { Clock, MapPin } from "lucide-react"
import { cn } from "~/lib/utils"

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
        <div className="w-80 min-w-80 border-l bg-background animate-in slide-in-from-right duration-300 flex-shrink-0">
            <div className="h-full p-2 pt-0 space-y-4 overflow-auto">
                <div className="flex items-center justify-between pt-2">
                    <h2 className="text-lg font-semibold">Calendar</h2>
                </div>

                <Card className="shadow-sm">
                    <CardContent className="p-3">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-0" />
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Today's Events</CardTitle>
                        <CardDescription>
                            {new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ScrollArea className="h-[300px]">
                            <div className="space-y-3">
                                {upcomingEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className={cn("w-2 h-2 rounded-full mt-2", getEventColor(event.type))} />
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{event.title}</p>
                                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                                <MapPin className="w-3 h-3" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {event.type}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
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
