import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, MessageSquare, Settings, User } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white pb-16">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Profile</h1>
          <Link href="/settings">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings size={20} />
            </Button>
          </Link>
        </div>
      </header>

      <div className="p-4">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
            <AvatarFallback className="text-2xl">ME</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-bold">My Profile</h2>
            <p className="text-gray-400">@myusername</p>
          </div>
          <p className="text-center text-sm">Digital artist and designer. Creating beautiful things every day.</p>
          <Button className="bg-[#e64054] hover:bg-[#d13046]">Edit Profile</Button>
        </div>

        <div className="flex items-center justify-around mb-6 text-center">
          <div>
            <p className="font-bold">248</p>
            <p className="text-xs text-gray-400">Posts</p>
          </div>
          <div>
            <p className="font-bold">12.4k</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div>
            <p className="font-bold">142</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-900">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#f0cfe7" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#ade2ff" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#ffc47f" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#612a74" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#e64054" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Post"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#ade2ff" }}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="saved" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Saved"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#612a74" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Saved"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#ffc47f" }}
                />
              </div>
              <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Saved"
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#f0cfe7" }}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <nav className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-2">
        <div className="flex items-center justify-around">
          <Link href="/home">
            <Button variant="ghost" className="flex flex-col items-center text-gray-400">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="ghost" className="flex flex-col items-center text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2a10 10 0 1010 10h-10V2z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-xs mt-1">Explore</span>
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="ghost" className="flex flex-col items-center text-gray-400">
              <MessageSquare size={24} />
              <span className="text-xs mt-1">Chat</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" className="flex flex-col items-center text-[#e64054]">
              <User size={24} fill="#e64054" />
              <span className="text-xs mt-1">Profile</span>
            </Button>
          </Link>
        </div>
      </nav>
    </main>
  )
}
