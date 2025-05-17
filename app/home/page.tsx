import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Bell, User } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Blebot</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell size={20} />
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">What's on your mind?</h2>
            <p className="text-xs text-gray-400">Share with your community</p>
          </div>
          <Button className="ml-auto bg-[#e64054] hover:bg-[#d13046] rounded-full">Post</Button>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Username</h3>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <p className="mb-4">Check out these amazing new designs I've been working on!</p>

            <div className="grid-post mb-4">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Post"
                className="rounded-lg w-full h-32 object-cover"
                style={{ backgroundColor: "#f0cfe7" }}
              />
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Post"
                className="rounded-lg w-full h-32 object-cover"
                style={{ backgroundColor: "#ade2ff" }}
              />
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Post"
                className="rounded-lg w-full h-32 object-cover"
                style={{ backgroundColor: "#ffc47f" }}
              />
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Post"
                className="rounded-lg w-full h-32 object-cover"
                style={{ backgroundColor: "#612a74" }}
              />
            </div>

            <div className="flex items-center justify-between text-gray-400">
              <Button variant="ghost" size="sm" className="text-gray-400">
                <MessageSquare size={16} className="mr-1" /> 24 comments
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400">
                Share
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Another User</h3>
                <p className="text-xs text-gray-400">5 hours ago</p>
              </div>
            </div>
            <p className="mb-4">Just launched my new project! What do you think?</p>

            <div className="flex items-center justify-between text-gray-400">
              <Button variant="ghost" size="sm" className="text-gray-400">
                <MessageSquare size={16} className="mr-1" /> 8 comments
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400">
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-2">
        <div className="flex items-center justify-around">
          <Link href="/home">
            <Button variant="ghost" className="flex flex-col items-center text-[#e64054]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  fill="#e64054"
                  stroke="#e64054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            <Button variant="ghost" className="flex flex-col items-center text-gray-400">
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </Button>
          </Link>
        </div>
      </nav>
    </main>
  )
}
