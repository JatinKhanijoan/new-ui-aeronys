import * as React from "react"
import {
    ArrowUpCircleIcon,
    AudioWaveform,
    BookOpen,
    Bot,
    Calendar,
    CalendarClock,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Plane,
    Receipt,
    Settings2,
    SquareTerminal,
    Tag,
    User,
} from "lucide-react"

import { NavUser } from "./nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, useSidebar } from "~/components/ui/sidebar"
import { UnifiedNav } from "./unified-nav"
import logo from "../../../public/aeronys-logo.png"

const data = {
    navMain: [
        {
            title: "Dashboard",
            type: "single" as const,
            path: "/",
            icon: SquareTerminal,
            isSelected: true,
        },
        {
            title: "Organisation",
            type: "collapsible" as const,
            path: "/organisation",
            icon: Settings2,
            items: [
                {
                    title: "Settings",
                    path: "/organisation/settings",
                },
                {
                    title: "Billing",
                    path: "/organisation/billing",
                },
                {
                    title: "Logs",
                    path: "/organisation/logs",
                }
            ],
        },
        {
            title: "Calendar",
            type: "single" as const,
            path: "/calendar",
            icon: Calendar,
        },
        {
            title: "Booking",
            type: "collapsible" as const,
            path: "/booking",
            icon: Bot,
            items: [
                {
                    title: "New Booking",
                    path: "/booking/new",
                },
                {
                    title: "View Bookings",
                    path: "/booking/view",
                },
                {
                    title: "Pending Requests",
                    path: "/booking/pending",
                }
            ],
        },
        {
            title: "Aircraft",
            type: "collapsible" as const,
            path: "/aircraft",
            icon: Plane,
            items: [
                {
                    title: "Aircrafts",
                    path: "/aircraft",
                },
                {
                    title: "Defect",
                    path: "/aircraft/defects",
                }
            ],
        },
        {
            title: "Profile",
            type: "single" as const,
            path: "/profile",
            icon: User,
        },
        {
            title: "Courses",
            type: "single" as const,
            path: "/courses",
            icon: BookOpen,
        },
        {
            title: "Training Records",
            type: "collapsible" as const,
            path: "/training-records",
            icon: Frame,
            items: [
                {
                    title: "View Records",
                    path: "/training-records/view",
                },
                {
                    title: "Pending Requests",
                    path: "/training-records/pending",
                }
            ],
        },
        {
            title: "Invoicing",
            type: "collapsible" as const,
            path: "/invoicing",
            icon: Receipt,
            items: [
                {
                    title: "Invoices",
                    path: "/invoicing/invoices",
                },
                {
                    title: "Pending Requests",
                    path: "/invoicing/pending",
                }
            ],
        },
        {
            title: "Maintenance",
            type: "single" as const,
            path: "/maintenance",
            icon: CalendarClock,
        },
        {
            title: "coupon",
            type: "single" as const,
            path: "/coupon",
            icon: Tag,
        }
    ],
    user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <img className="w-24 h-auto dark:hidden" src={logo} alt="" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <UnifiedNav items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}