import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Star, Search, Filter } from "lucide-react"

// Mock data for creators
const creators = [
  {
    id: 1,
    name: "Alex Morgan",
    category: "Photography",
    rating: 4.9,
    followers: 15600,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: true,
    description: "Professional photographer specializing in portrait and landscape photography.",
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
    description: "Fitness coach sharing workout routines and nutrition advice.",
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
    description: "Lifestyle content creator sharing daily vlogs and travel experiences.",
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
    description: "Digital artist creating unique illustrations and animations.",
  },
  {
    id: 5,
    name: "Riley Johnson",
    category: "Music",
    rating: 4.8,
    followers: 22400,
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: true,
    description: "Musician sharing original songs and behind-the-scenes content.",
  },
  {
    id: 6,
    name: "Casey Wilson",
    category: "Cooking",
    rating: 4.5,
    followers: 8700,
    imageUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: false,
    description: "Chef sharing recipes and cooking tutorials.",
  },
  {
    id: 7,
    name: "Morgan Taylor",
    category: "Fashion",
    rating: 4.7,
    followers: 14300,
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: false,
    description: "Fashion designer sharing style tips and outfit inspirations.",
  },
  {
    id: 8,
    name: "Avery Martinez",
    category: "Technology",
    rating: 4.9,
    followers: 19600,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
    featured: true,
    description: "Tech enthusiast sharing reviews and tutorials on the latest gadgets.",
  },
]

export default function CreatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Discover Creators</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search creators..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="cooking">Cooking</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creators.map((creator) => (
          <Card key={creator.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative h-64 w-full">
                <Image src={creator.imageUrl || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
                {creator.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{creator.name}</CardTitle>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{creator.category}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm">{creator.rating}</span>
                </div>
              </div>
              <CardDescription className="line-clamp-2 mb-2">{creator.description}</CardDescription>
              <p className="text-sm text-muted-foreground">{creator.followers.toLocaleString()} followers</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/creators/${creator.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="default" size="icon">
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <Button variant="outline" size="icon">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}
