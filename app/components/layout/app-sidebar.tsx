import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"
import { UnifiedNav } from "./unified-nav"
import logo from "../../../public/aeronys-logo.png"
import { useTheme } from "../ui/theme-provider"

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
            title: "Aircraft",
            type: "collapsible" as const,
            path: "/aircraft",
            icon: Map,
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
    const { state } = useSidebar()
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null)
    const theme = useTheme()

    return (
        <Sidebar collapsible="icon" variant="floating" {...props}>
            <SidebarHeader>
                <img src={logo} alt="" />
            </SidebarHeader>
            <SidebarContent>
                <TeamSwitcher teams={data.teams} />
                <UnifiedNav items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
