import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MoreVertical, Send } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function ChatDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/chat">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Jane Doe</h2>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical size={20} />
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex justify-start">
          <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">Hey there! How's your day going?</p>
            <span className="text-xs text-gray-400 mt-1 block">10:30 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#e64054] rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">Pretty good! Just working on some new designs. How about you?</p>
            <span className="text-xs text-gray-200 mt-1 block">10:32 AM</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">I'm just catching up on some messages. Have you seen the new update to the app?</p>
            <span className="text-xs text-gray-400 mt-1 block">10:35 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#e64054] rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">Not yet! What's new in it?</p>
            <span className="text-xs text-gray-200 mt-1 block">10:36 AM</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">
              They added a bunch of new features like improved notifications and a dark mode. Also, check out this cute
              character they added:
            </p>
            <div className="mt-2 rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=200" alt="Character" className="w-full h-auto" />
            </div>
            <span className="text-xs text-gray-400 mt-1 block">10:40 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#e64054] rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">That's adorable! I'll have to update my app soon.</p>
            <span className="text-xs text-gray-200 mt-1 block">10:42 AM</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center space-x-2">
          <Input placeholder="Type a message..." className="bg-zinc-900 border-zinc-800" />
          <Button size="icon" className="rounded-full bg-[#e64054] hover:bg-[#d13046]">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </main>
  )
}
