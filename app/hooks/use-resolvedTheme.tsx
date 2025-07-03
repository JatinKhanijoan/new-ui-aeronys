import { useEffect, useState } from "react"
import { useTheme } from "~/components/ui/theme-provider"

type ResolvedTheme = "dark" | "light"

export function useResolvedTheme(): ResolvedTheme {
    const { theme } = useTheme()
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
        // Initial resolution on mount
        if (theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }
        return theme
    })

    useEffect(() => {
        const resolveTheme = () => {
            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                setResolvedTheme(systemTheme)
            } else {
                setResolvedTheme(theme)
            }
        }

        // Resolve theme immediately when theme changes
        resolveTheme()

        // If theme is system, listen for system theme changes
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            const handleChange = () => {
                setResolvedTheme(mediaQuery.matches ? "dark" : "light")
            }

            mediaQuery.addEventListener("change", handleChange)
            return () => mediaQuery.removeEventListener("change", handleChange)
        }
    }, [theme])

    return resolvedTheme
}