import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, MessageSquare, User } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Messages</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search size={20} />
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <Link href="/chat/1">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-900">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Jane Doe</h3>
                  <span className="text-xs text-gray-400">2m ago</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Hey, how's it going?</p>
              </div>
            </div>
          </Link>

          <Link href="/chat/2">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-900">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">John Smith</h3>
                  <span className="text-xs text-gray-400">1h ago</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Did you see the latest update?</p>
              </div>
            </div>
          </Link>

          <Link href="/chat/3">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-900">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Alex Taylor</h3>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Let's meet up this weekend!</p>
              </div>
            </div>
          </Link>

          <Link href="/chat/4">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-900">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Sam Johnson</h3>
                  <span className="text-xs text-gray-400">2d ago</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Thanks for your help!</p>
              </div>
            </div>
          </Link>
        </div>
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
            <Button variant="ghost" className="flex flex-col items-center text-[#e64054]">
              <MessageSquare size={24} fill="#e64054" />
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
