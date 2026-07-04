"use client";

import Image from "next/image";
import { Phone, Video, Info } from "lucide-react";

interface ChatHeaderProps {
  name?: string;
  avatar?: string;
  online?: boolean;
  typing?: boolean;
}

export default function ChatHeader({
  name = "Sarah Chen",
  avatar = "",
  online = true,
  typing = true,
}: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-[#bccbb9] bg-white px-8">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="relative h-11 w-11">

          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />

        </div>

        <div>

          <h2 className="text-[20px] font-semibold text-[#161d16]">
            {name}
          </h2>

          {typing ? (
            <div className="mt-1 flex items-center gap-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />

              <p className="text-sm font-medium text-[#006e2f]">
                Typing...
              </p>

            </div>
          ) : online ? (
            <div className="mt-1 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-[#22c55e]" />

              <p className="text-sm text-[#3d4a3d]">
                Online
              </p>

            </div>
          ) : (
            <p className="mt-1 text-sm text-gray-500">
              Offline
            </p>
          )}

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button className="rounded-full p-3 transition hover:bg-[#edf6ea]">
          <Phone
            size={21}
            strokeWidth={1.8}
            className="text-[#161d16]"
          />
        </button>

        <button className="rounded-full p-3 transition hover:bg-[#edf6ea]">
          <Video
            size={21}
            strokeWidth={1.8}
            className="text-[#161d16]"
          />
        </button>

        <button className="rounded-full p-3 transition hover:bg-[#edf6ea]">
          <Info
            size={21}
            strokeWidth={1.8}
            className="text-[#161d16]"
          />
        </button>

      </div>
    </header>
  );
}