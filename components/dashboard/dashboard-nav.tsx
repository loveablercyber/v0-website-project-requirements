"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Settings,
  MessageSquare,
  BarChart,
  Upload,
  Video,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  variant: "default" | "ghost"
}

export function DashboardNav() {
  const pathname = usePathname()

  const creatorItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard" ? "default" : "ghost",
    },
    {
      title: "Content",
      href: "/dashboard/content",
      icon: <FileText className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/content" ? "default" : "ghost",
    },
    {
      title: "Upload",
      href: "/dashboard/upload",
      icon: <Upload className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/upload" ? "default" : "ghost",
    },
    {
      title: "Live Stream",
      href: "/dashboard/live",
      icon: <Video className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/live" ? "default" : "ghost",
    },
    {
      title: "Subscribers",
      href: "/dashboard/subscribers",
      icon: <Users className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/subscribers" ? "default" : "ghost",
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/messages" ? "default" : "ghost",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/analytics" ? "default" : "ghost",
    },
    {
      title: "Earnings",
      href: "/dashboard/earnings",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/earnings" ? "default" : "ghost",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      variant: pathname === "/dashboard/settings" ? "default" : "ghost",
    },
  ]

  return (
    <nav className="flex flex-col space-y-1">
      {creatorItems.map((item) => (
        <Button
          key={item.href}
          variant={item.variant}
          size="sm"
          className={cn(
            "justify-start",
            item.variant === "default" && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
          )}
          asChild
        >
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
