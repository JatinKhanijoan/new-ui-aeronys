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

interface HeaderProps {
    rightSidebarOpen: boolean
    setRightSidebarOpen: (open: boolean) => void
}

export function Header({ rightSidebarOpen, setRightSidebarOpen }: HeaderProps) {
    return (
        <div className="w-full p-4">
            <header className="flex h-14 w-full shrink-0 items-center gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 rounded-lg border shadow-sm transition-all duration-300 ease-linear">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <SidebarTrigger className="-ml-1 shrink-0" />
                    <Separator orientation="vertical" className="mr-2 h-4 shrink-0" />
                    <Breadcrumb className="min-w-0">
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Overview</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-1">
                    <ThemeDropdown />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                        className={cn("h-7 w-7 shrink-0 transition-colors", rightSidebarOpen ? "bg-muted" : "")}
                    >
                        <Calendar className="h-4 w-4" />
                        <span className="sr-only">Toggle Calendar</span>
                    </Button>
                    <ThemeToggleButton variant="circle" start="center" />
                </div>
            </header>
        </div>
    )
}