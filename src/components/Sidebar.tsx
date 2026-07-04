"use client";

import Link from "next/link";
import { MessageSquare, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-[#F3FCEF] flex flex-col">

      {/* Logo */}

      <div className="px-7 py-4">

        <h1 className="text-4xl font-bold text-green-700">
          YoChat
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Active Now
        </p>

      </div>

      {/* Navigation */}

      <nav className="space-y-2 px-3">

        <Link
          href="/chat"
          className="flex items-center gap-3 rounded-xl border-l-4 border-green-700 bg-green-100 px-4 py-3"
        >
          <MessageSquare size={20} />
          Chats
        </Link>

        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-green-50"
        >
          <Users size={20} />
          People
        </button>

        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-green-50"
        >
          <Settings size={20} />
          Settings
        </button>

      </nav>

      {/* Profile */}

      <div className="mt-auto p-5">

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="h-12 w-12 rounded-full"
          />

          <div>

            <p className="font-semibold">

              Alex Rivera

            </p>

            <p className="text-sm text-green-600 flex items-center gap-1">
            <span className="relative flex size-3">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
</span> ONLINE
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}