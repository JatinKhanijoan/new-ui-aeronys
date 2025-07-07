import { Calendar } from "lucide-react"
import { Button } from "~/components/ui/button"
import { SidebarTrigger } from "~/components/ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import { cn } from "~/lib/utils"
import ThemeToggleButton from "~/components/ui/theme-toggle-button"
import { ThemeDropdown } from "~/provider/ColorThemeDropdown"
import { DashboardForDropdown } from "~/provider/DashboardForDropdown"
import { useLocation, useParams } from "react-router"

export function Header() {
    const location = useLocation();
    const title = location.pathname.split("/")[1]?.charAt(0).toUpperCase() + location.pathname.split("/")[1]?.slice(1).toLowerCase()

    return (
        <div className="w-full pb-20">
            <header className="flex border-l h-16 fixed z-50 bg-background right-0 shrink-0 items-center gap-2 px-4 border-b"
                style={{ left: 'var(--sidebar-width, 16rem)' }}
            >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <SidebarTrigger className="-ml-1 shrink-0" />
                    <Separator orientation="vertical" className="mr-2 h-4 shrink-0" />
                    <Breadcrumb className="min-w-0">
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href={location.pathname}>{title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-1">
                    <DashboardForDropdown />
                    <ThemeDropdown />
                    <ThemeToggleButton variant="circle" start="top-right" />
                </div>
            </header>
        </div>
    )
}