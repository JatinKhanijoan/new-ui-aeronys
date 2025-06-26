import React from "react";
import { Users, Check } from "lucide-react";
import { useDashboardFor } from "./DashboardForProvider";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

type UserRole = "admin" | "member" | "non-member" | "instructor" | "restricted-instructor" | "ops" | "cfa";

const roleNames: Record<UserRole, string> = {
    "admin": "Admin",
    "member": "Member",
    "non-member": "Non-Member",
    "instructor": "Instructor",
    "restricted-instructor": "Restricted Instructor",
    "ops": "Operations",
    "cfa": "CFA"
};

export function DashboardForDropdown() {
    const { userRole, setUserRole } = useDashboardFor();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={`h-7 w-7 shrink-0`}
                >
                    <Users className="h-4 w-4" />
                    <span className="sr-only">Select user role</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {Object.entries(roleNames).map(([role, name]) => (
                    <DropdownMenuItem
                        key={role}
                        onClick={() => setUserRole(role as UserRole)}
                        className="flex items-center justify-between cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <span>{name}</span>
                        </div>
                        {userRole === role && <Check className="h-4 w-4" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}