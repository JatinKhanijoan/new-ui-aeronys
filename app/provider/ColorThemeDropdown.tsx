import React from "react";
import { Palette, Check } from "lucide-react";
import { useTheme, themes, type Theme } from "./ColorThemeProvicer";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface ThemeDropdownProps {
    className?: string;
}

export function ThemeDropdown({ className }: ThemeDropdownProps) {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={`h-7 w-7 shrink-0 ${className}`}
                >
                    <Palette className="h-4 w-4" />
                    <span className="sr-only">Select theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {Object.entries(themes).map(([key, themeData]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => setTheme(key as Theme)}
                        className="flex items-center justify-between cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <span>{themeData.name}</span>
                        </div>
                        {theme === key && <Check className="h-4 w-4" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}