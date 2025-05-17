import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Search, MessageSquare, User } from "lucide-react"

export default function ExplorePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Explore</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search size={20} />
          </Button>
        </div>
        <div className="mt-4">
          <Input placeholder="Search..." className="bg-zinc-900 border-zinc-800" prefixIcon={<Search size={16} />} />
        </div>
      </header>

      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#e64054" }}
            />
          </div>
          <h3 className="font-semibold">Art</h3>
        </div>

        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#ade2ff" }}
            />
          </div>
          <h3 className="font-semibold">Photography</h3>
        </div>

        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#ffc47f" }}
            />
          </div>
          <h3 className="font-semibold">Design</h3>
        </div>

        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#f0cfe7" }}
            />
          </div>
          <h3 className="font-semibold">Technology</h3>
        </div>

        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#612a74" }}
            />
          </div>
          <h3 className="font-semibold">Music</h3>
        </div>

        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="aspect-square rounded-md overflow-hidden mb-2">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Category"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#e8a089" }}
            />
          </div>
          <h3 className="font-semibold">Fashion</h3>
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
            <Button variant="ghost" className="flex flex-col items-center text-[#e64054]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#e64054" strokeWidth="2" fill="none" />
                <path d="M12 2a10 10 0 1010 10h-10V2z" fill="#e64054" stroke="#e64054" strokeWidth="2" />
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
