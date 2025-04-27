"use client"

import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { SubscriberChart } from "@/components/dashboard/subscriber-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TopContent } from "@/components/dashboard/top-content"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <TrendingUp className="mr-2 h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Suspense fallback={<div>Loading stats...</div>}>
            <StatsCards />
          </Suspense>

          <div className="grid gap-4 md:grid-cols-2">
            <Suspense fallback={<div>Loading revenue chart...</div>}>
              <RevenueChart />
            </Suspense>
            <Suspense fallback={<div>Loading subscriber chart...</div>}>
              <SubscriberChart />
            </Suspense>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Suspense fallback={<div>Loading activity...</div>}>
              <RecentActivity />
            </Suspense>
            <Suspense fallback={<div>Loading top content...</div>}>
              <TopContent />
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
