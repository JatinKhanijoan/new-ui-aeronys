import { AppSidebar } from "~/components/layout/app-sidebar"
import { Header } from "~/components/layout/header"
import { SidebarInset } from "~/components/ui/sidebar"
import { SidebarProvider } from "~/components/ui/sidebar"

import type { Route } from "./+types/home"
import { useState } from "react"
import MainContent from "~/components/layout/main-content"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Aeronys" },
    { name: "description", content: "Aeronys" },
  ]
}

export default function Home() {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <AppSidebar variant="inset" />
        <SidebarInset className="flex-1 min-w-0">
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="flex flex-1 min-h-0">
              <MainContent />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}