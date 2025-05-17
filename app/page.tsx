import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="black" />
              <circle cx="30" cy="40" r="8" fill="white" />
              <circle cx="70" cy="40" r="8" fill="white" />
              <rect x="20" y="60" width="60" height="10" rx="5" fill="white" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-gray-400 mt-2">Welcome back</p>
        </div>

        <div className="mt-8 space-y-4">
          <Input type="email" placeholder="Email" className="bg-zinc-900 border-zinc-800" />
          <Input type="password" placeholder="Password" className="bg-zinc-900 border-zinc-800" />

          <div className="pt-4">
            <Link href="/home">
              <Button className="w-full bg-[#e64054] hover:bg-[#d13046] text-white">Login</Button>
            </Link>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button variant="link" className="text-gray-400 text-xs">
              Forgot password?
            </Button>
            <Button variant="link" className="text-gray-400 text-xs">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
