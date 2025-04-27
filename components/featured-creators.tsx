"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"

// Mock data for featured creators
const mockCreators = [
  {
    id: 1,
    name: "Alex Morgan",
    category: "Photography",
    rating: 4.9,
    followers: 15600,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Jamie Smith",
    category: "Fitness",
    rating: 4.7,
    followers: 12300,
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: false,
  },
  {
    id: 3,
    name: "Taylor Reed",
    category: "Lifestyle",
    rating: 4.8,
    followers: 18900,
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: true,
  },
  {
    id: 4,
    name: "Jordan Casey",
    category: "Art",
    rating: 4.6,
    followers: 9800,
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: false,
  },
]

export function FeaturedCreators() {
  const [followedCreators, setFollowedCreators] = useState<number[]>([])

  const toggleFollow = (creatorId: number) => {
    if (followedCreators.includes(creatorId)) {
      setFollowedCreators(followedCreators.filter((id) => id !== creatorId))
    } else {
      setFollowedCreators([...followedCreators, creatorId])
    }
  }

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Creators</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover trending content creators and subscribe to their exclusive content
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {mockCreators.map((creator) => (
            <Card key={creator.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={creator.imageUrl || "/placeholder.svg"}
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                  {creator.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{creator.name}</CardTitle>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{creator.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{creator.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{creator.followers.toLocaleString()} followers</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleFollow(creator.id)}
                  className={followedCreators.includes(creator.id) ? "bg-primary/10" : ""}
                >
                  <Heart
                    className={`h-4 w-4 mr-2 ${followedCreators.includes(creator.id) ? "fill-primary text-primary" : ""}`}
                  />
                  {followedCreators.includes(creator.id) ? "Following" : "Follow"}
                </Button>
                <Button size="sm" asChild>
                  <a href={`/creators/${creator.id}`}>View Profile</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="/creators">View All Creators</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
