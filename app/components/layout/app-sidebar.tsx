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
    PlaneIcon,
    Receipt,
    Settings2,
    SquareTerminal,
    Tag,
    User,
} from "lucide-react"

import { NavUser } from "./nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, useSidebar } from "~/components/ui/sidebar"
import { UnifiedNav } from "./unified-nav"
import { useLocation } from "react-router"
import { useResolvedTheme } from "~/hooks/use-resolvedTheme"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation();
    const theme = useResolvedTheme();

    const data = {
        navMain: [
            {
                title: "Dashboard",
                type: "single" as const,
                path: "/",
                icon: SquareTerminal,
                isActive: location.pathname === "/",
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
                        isActive: location.pathname === "/organisation/settings",
                    },
                    {
                        title: "Billing",
                        path: "/organisation/billing",
                        isActive: location.pathname === "/organisation/billing",
                    },
                    {
                        title: "Logs",
                        path: "/organisation/logs",
                        isActive: location.pathname === "/organisation/logs",
                    }
                ],
            },
            {
                title: "Calendar",
                type: "single" as const,
                path: "/calendar",
                icon: Calendar,
                isActive: location.pathname === "/calendar",
            },
            {
                title: "Booking",
                type: "collapsible" as const,
                path: "/booking",
                icon: Bot,
                items: [
                    {
                        title: "Bookings",
                        path: "/booking",
                        isActive: location.pathname === "/booking",
                    },
                    {
                        title: "New Booking",
                        path: "/booking/new",
                        isActive: location.pathname === "/booking/new",
                    },
                    {
                        title: "Pending Requests",
                        path: "/booking/pending",
                        isActive: location.pathname === "/booking/pending",
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
                        isActive: location.pathname === "/aircraft",
                    },
                    {
                        title: "Defect",
                        path: "/aircraft/defects",
                        isActive: location.pathname === "/aircraft/defects",
                    }
                ],
            },
            {
                title: "Profile",
                type: "single" as const,
                path: "/profile",
                icon: User,
                isActive: location.pathname === "/profile",
            },
            {
                title: "Courses",
                type: "single" as const,
                path: "/courses",
                icon: BookOpen,
                isActive: location.pathname === "/courses",
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
                        isActive: location.pathname === "/training-records/view",
                    },
                    {
                        title: "Pending Requests",
                        path: "/training-records/pending",
                        isActive: location.pathname === "/training-records/pending",
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
                        isActive: location.pathname === "/invoicing/invoices",
                    },
                    {
                        title: "Pending Requests",
                        path: "/invoicing/pending",
                        isActive: location.pathname === "/invoicing/pending",
                    }
                ],
            },
            {
                title: "Maintenance",
                type: "single" as const,
                path: "/maintenance",
                icon: CalendarClock,
                isActive: location.pathname === "/maintenance",
            },
            {
                title: "Coupon",
                type: "single" as const,
                path: "/coupon",
                icon: Tag,
                isActive: location.pathname === "/coupon",
            }
        ],
        user: {
            name: "Chinmay Anaokar",
            email: "canaokar@gmail.com",
            avatar: "https://res.cloudinary.com/doahxfhjj/image/upload/v1734373964/ft5leuhqheqznyotmdjn.jpg",
        },
        teams: [
            {
                name: "EFG Flying School",
                logo: PlaneIcon,
                plan: "Enterprise",
            },
            {
                name: "Falcon",
                logo: PlaneIcon,
                plan: "Startup",
            },
        ],
    }

    return (
        <Sidebar collapsible="icon" {...props} className="scrollbar-custom">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <img
                                className="w-24 h-auto"
                                src={theme === 'dark' ? "/aeronys-logo-white.png" : "/aeronys-logo.png"}
                                alt="Aeronys Logo"
                            />
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