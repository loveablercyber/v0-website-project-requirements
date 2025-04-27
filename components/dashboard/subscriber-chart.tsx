"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for dashboard
const subscriberData = [
  { name: "Jan", subscribers: 120 },
  { name: "Feb", subscribers: 145 },
  { name: "Mar", subscribers: 162 },
  { name: "Apr", subscribers: 190 },
  { name: "May", subscribers: 210 },
  { name: "Jun", subscribers: 235 },
  { name: "Jul", subscribers: 280 },
]

export function SubscriberChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Subscriber Growth</CardTitle>
        <CardDescription>Your subscriber count over the last 7 months</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={subscriberData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="subscribers" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
