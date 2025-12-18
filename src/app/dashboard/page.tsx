import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/reKro.png"
                alt="reKro Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="ml-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                reKro Admin
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {user.email}
              </span>
              <form action="/api/auth/logout" method="post">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome back!
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            You&apos;re logged in to the reKro Admin Dashboard
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Dashboard Cards */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Users
              </h3>
              <Image src="/Account.png" alt="Users" width={24} height={24} />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">0</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Total registered users
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Events
              </h3>
              <Image src="/Events.png" alt="Events" width={24} height={24} />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">0</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Active events
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Messages
              </h3>
              <Image src="/Messages.png" alt="Messages" width={24} height={24} />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">0</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Unread messages
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

