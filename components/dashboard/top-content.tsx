"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Heart } from "lucide-react"

export function TopContent() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Performing Content</CardTitle>
        <CardDescription>Your most popular content this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Content thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Summer Collection</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Eye className="mr-1 h-3 w-3" /> 4.2k views
                <Heart className="ml-3 mr-1 h-3 w-3" /> 320 likes
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Content thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Behind the Scenes</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Eye className="mr-1 h-3 w-3" /> 3.8k views
                <Heart className="ml-3 mr-1 h-3 w-3" /> 290 likes
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Content thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Urban Photography</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Eye className="mr-1 h-3 w-3" /> 2.9k views
                <Heart className="ml-3 mr-1 h-3 w-3" /> 210 likes
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
