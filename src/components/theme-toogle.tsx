"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])
    if (!mounted) return <div className="w-9 h-9" />

    return (
        <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10 relative overflow-hidden group"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
            key={theme === "dark" ? "dark" : "light"}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
            >
            {theme === "dark" ? (
                <Moon className="h-5 w-5 text-blue-400 fill-blue-400/20" />
            ) : (
                <Sun className="h-5 w-5 text-orange-500 fill-orange-500/20" />
            )}
            </motion.div>
        </AnimatePresence>
        <span className="sr-only">Toggle theme</span>
        </Button>
    )
}