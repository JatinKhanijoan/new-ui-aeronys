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

        </div>
    )
}
