"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for dashboard
const revenueData = [
  { name: "Jan", revenue: 1200 },
  { name: "Feb", revenue: 1900 },
  { name: "Mar", revenue: 1500 },
  { name: "Apr", revenue: 2400 },
  { name: "May", revenue: 2800 },
  { name: "Jun", revenue: 3200 },
  { name: "Jul", revenue: 3800 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Your revenue over the last 7 months</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
