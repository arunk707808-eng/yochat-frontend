"use client";

import { Bell, MoreVertical, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-[#F3FCEF] px-4">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search conversations..."
          className="w-80 rounded-full border bg-white py-2 pl-10 pr-4 outline-none focus:border-green-600"
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell size={22} />

        <MoreVertical size={22} />

        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="profile"
          className="h-9 w-9 rounded-full"
        />

      </div>

    </header>
  );
}