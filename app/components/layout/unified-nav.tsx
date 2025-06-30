"use client"

import { ChevronRight, MoreHorizontal, type LucideIcon } from "lucide-react"
import { NavLink } from "react-router"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "~/components/ui/sidebar"

export interface NavItem {
    title: string
    type: "dropdown" | "collapsible" | "single"
    path: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
        title: string
        path: string
    }[]
}

export function UnifiedNav({
    items,
    groupLabel = "Navigation",
}: {
    items: NavItem[]
    groupLabel?: string
}) {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    const renderSingleItem = (item: NavItem) => (
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? item.title : undefined}
            >
                <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? "font-medium" : ""}
                >
                    {item.icon && (
                        <item.icon
                            className={`shrink-0 ${isCollapsed
                                ? "size-5"
                                : "size-4"
                                }`}
                        />
                    )}
                    <span>{item.title}</span>
                </NavLink>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )

    const renderDropdownItem = (item: NavItem) => (
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? item.title : undefined}
            >
                <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? "font-medium" : ""}
                >
                    {item.icon && (
                        <item.icon
                            className={`shrink-0 ${isCollapsed
                                ? "size-5"
                                : "size-4"
                                }`}
                        />
                    )}
                    <span>{item.title}</span>
                </NavLink>
            </SidebarMenuButton>
            {item.items && item.items.length > 0 && !isCollapsed && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuAction showOnHover>
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">More</span>
                        </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 rounded-lg" side="bottom" align="end">
                        {item.items.map((subItem) => (
                            <DropdownMenuItem key={subItem.title} asChild>
                                <NavLink
                                    to={subItem.path}
                                    className={({ isActive }) =>
                                        isActive ? "bg-accent font-medium" : ""
                                    }
                                >
                                    <span>{subItem.title}</span>
                                </NavLink>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </SidebarMenuItem>
    )

    const renderCollapsibleItem = (item: NavItem) => {
        if (isCollapsed) {
            return (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? "font-medium" : ""}
                        >
                            {item.icon && (
                                <item.icon className="size-5 shrink-0" />
                            )}
                            <span>{item.title}</span>
                        </NavLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
        }

        return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon className="size-4 shrink-0" />}
                            <span>{item.title}</span>
                            {item.items && item.items.length > 0 && (
                                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            )}
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items && item.items.length > 0 && (
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {item.items.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton asChild>
                                            <NavLink
                                                to={subItem.path}
                                                className={({ isActive }) =>
                                                    isActive ? "font-medium" : ""
                                                }
                                            >
                                                <span>{subItem.title}</span>
                                            </NavLink>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    )}
                </SidebarMenuItem>
            </Collapsible>
        )
    }

    return (
        <SidebarGroup>
            {!isCollapsed && <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>}
            <SidebarMenu>
                {items.map((item) => {
                    switch (item.type) {
                        case "single":
                            return renderSingleItem(item)
                        case "dropdown":
                            return renderDropdownItem(item)
                        case "collapsible":
                            return renderCollapsibleItem(item)
                        default:
                            return renderSingleItem(item)
                    }
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}