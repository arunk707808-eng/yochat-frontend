"use client";

import Image from "next/image";

const chats = [
  {
    id: 1,
    name: "Sarah Chen",
    lastMessage: "That sounds like a great plan!",
    time: "2m",
    avatar: "",
    online: true,
    active: true,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    lastMessage: "Did you see the new mockups?",
    time: "1h",
    avatar: "",
    online: false,
    active: false,
  },
  {
    id: 3,
    name: "Design Team",
    lastMessage: "Elena: I've updated the icons.",
    time: "3h",
    avatar: "",
    online: false,
    active: false,
    group: true,
  },
  {
    id: 4,
    name: "Jordan Lee",
    lastMessage: "Thanks for the feedback!",
    time: "Yesterday",
    avatar: "",
    online: false,
    active: false,
  },
];

export default function ChatList() {
  return (
    <aside className="w-full border-r border-[#bccbb9] bg-white flex flex-col">

      {/* Heading */}

      <div className="border-b border-[#bccbb9] px-5 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#006e2f]">
          Messages
        </h2>
      </div>

      {/* Chats */}

      <div className="overflow-y-auto">

        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`relative flex cursor-pointer items-center gap-4 border-l-4 px-5 py-5 transition-all
            ${
              chat.active
                ? "border-[#006e2f] bg-[#e8f0e4]"
                : "border-transparent hover:bg-[#edf6ea]"
            }`}
          >
            {/* Avatar */}

            {chat.group ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6e0f3]">
                👥
              </div>
            ) : (
              <div className="relative h-12 w-12">
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  fill
                  className="rounded-full object-cover"
                />

                {chat.online && (
                  <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />
                )}
              </div>
            )}

            {/* Text */}

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between">

                <h3 className="truncate text-[18px] font-semibold text-[#161d16]">
                  {chat.name}
                </h3>

                <span className="text-xs text-gray-500">
                  {chat.time}
                </span>

              </div>

              <p
                className={`truncate text-[15px] ${
                  chat.active
                    ? "font-medium text-[#006e2f]"
                    : "text-[#3d4a3d]"
                }`}
              >
                {chat.lastMessage}
              </p>

            </div>

          </div>
        ))}

      </div>

    </aside>
  );
}