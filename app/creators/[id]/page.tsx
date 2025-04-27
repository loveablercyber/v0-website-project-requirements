import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star, Users, Calendar, Globe, Instagram, Twitter, Heart, MessageSquare, Share2 } from "lucide-react"

// This would normally come from a database
const getCreator = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Alex Morgan",
    username: "@alexmorgan",
    category: "Photography",
    rating: 4.9,
    followers: 15600,
    joinDate: "January 2022",
    location: "New York, USA",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    coverUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500&q=80",
    bio: "Professional photographer specializing in portrait and landscape photography. I share exclusive photoshoots, behind-the-scenes content, and photography tutorials with my subscribers.",
    instagram: "alexmorgan",
    twitter: "alexmorgan",
    featured: true,
    subscriptionPlans: [
      {
        id: 1,
        name: "Basic",
        price: 9.99,
        features: ["Access to exclusive photos", "Weekly updates", "Direct messaging"],
      },
      {
        id: 2,
        name: "Premium",
        price: 19.99,
        features: [
          "All Basic features",
          "Behind-the-scenes content",
          "Monthly exclusive photoshoots",
          "Photography tutorials",
        ],
        popular: true,
      },
      {
        id: 3,
        name: "VIP",
        price: 39.99,
        features: [
          "All Premium features",
          "Early access to all content",
          "Input on future photoshoots",
          "Personalized photo edits",
        ],
      },
    ],
    gallery: [
      {
        id: 1,
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Summer Collection",
      },
      {
        id: 2,
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Urban Photography",
      },
      {
        id: 3,
        type: "video",
        thumbnail:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Behind the Scenes",
      },
      {
        id: 4,
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Nature Series",
      },
      {
        id: 5,
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Portrait Session",
      },
      {
        id: 6,
        type: "video",
        thumbnail:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
        title: "Photography Tips",
      },
    ],
  }
}

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  const creator = getCreator(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src={creator.coverUrl || "/placeholder.svg"}
          alt={`${creator.name} cover`}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background mb-4">
              <Image src={creator.imageUrl || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
            </div>
            <h1 className="text-2xl font-bold">{creator.name}</h1>
            <p className="text-muted-foreground mb-2">{creator.username}</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="outline">{creator.category}</Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>{creator.rating}</span>
              </div>
            </div>
            <div className="flex gap-2 mb-6">
              <Button>
                <Heart className="h-4 w-4 mr-2" />
                Follow
              </Button>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 w-full gap-4 mb-6">
              <div className="flex flex-col items-center">
                <Users className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="font-semibold">{creator.followers.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="font-semibold">Since</span>
                <span className="text-xs text-muted-foreground">{creator.joinDate}</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="font-semibold">Location</span>
                <span className="text-xs text-muted-foreground">{creator.location}</span>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              {creator.instagram && (
                <a
                  href={`https://instagram.com/${creator.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {creator.twitter && (
                <a
                  href={`https://twitter.com/${creator.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
            <div className="text-left w-full">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">{creator.bio}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="gallery">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="subscribe">Subscribe</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {creator.gallery.map((item) => (
                  <div key={item.id} className="relative group rounded-lg overflow-hidden">
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="object-cover aspect-square"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="font-medium">{item.title}</p>
                        <Button variant="secondary" size="sm" className="mt-2">
                          View {item.type === "video" ? "Video" : "Image"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="subscribe" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creator.subscriptionPlans.map((plan) => (
                  <Card key={plan.id} className={`relative ${plan.popular ? "border-primary" : ""}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-3xl font-bold mb-4">
                        ${plan.price}
                        <span className="text-sm font-normal text-muted-foreground">/month</span>
                      </p>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5 text-green-500 mr-2 shrink-0"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">About {creator.name}</h3>
                  <p className="text-muted-foreground">{creator.bio}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">{creator.location}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Member Since</h3>
                  <p className="text-muted-foreground">{creator.joinDate}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Social Media</h3>
                  <div className="flex gap-4">
                    {creator.instagram && (
                      <a
                        href={`https://instagram.com/${creator.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-foreground"
                      >
                        <Instagram className="h-5 w-5 mr-2" />
                        <span>@{creator.instagram}</span>
                      </a>
                    )}
                    {creator.twitter && (
                      <a
                        href={`https://twitter.com/${creator.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-5 w-5 mr-2" />
                        <span>@{creator.twitter}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
