"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, MessageSquare, Heart, Eye } from "lucide-react"

export function RecentActivity() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent platform activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <CreditCard className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">New subscription</p>
              <p className="text-sm text-muted-foreground">User123 subscribed to your Premium plan</p>
            </div>
            <div className="text-sm text-muted-foreground">2 hours ago</div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">New message</p>
              <p className="text-sm text-muted-foreground">You have 3 unread messages</p>
            </div>
            <div className="text-sm text-muted-foreground">5 hours ago</div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Content liked</p>
              <p className="text-sm text-muted-foreground">Your photo "Summer Collection" received 45 likes</p>
            </div>
            <div className="text-sm text-muted-foreground">1 day ago</div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Content viewed</p>
              <p className="text-sm text-muted-foreground">Your video "Behind the Scenes" has 1,200 new views</p>
            </div>
            <div className="text-sm text-muted-foreground">2 days ago</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
