import React, { createContext, useContext, useState } from "react";

type UserRole = "admin" | "member" | "non-member" | "instructor" | "restricted-instructor" | "ops" | "cfa";

interface DashboardForContextType {
    userRole: UserRole;
    setUserRole: (role: UserRole) => void;
}

const DashboardForContext = createContext<DashboardForContextType | undefined>(undefined);

export function useDashboardFor() {
    const context = useContext(DashboardForContext);
    if (!context) {
        throw new Error("useDashboardFor must be used within a DashboardForProvider");
    }
    return context;
}

interface DashboardForProviderProps {
    children: React.ReactNode;
}

export function DashboardForProvider({ children }: DashboardForProviderProps) {
    const [userRole, setUserRole] = useState<UserRole>("admin"); // Default role is admin

    return (
        <DashboardForContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </DashboardForContext.Provider>
    );
}