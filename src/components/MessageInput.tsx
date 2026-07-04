"use client";

import { PlusCircle, Smile, SendHorizontal } from "lucide-react";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    // TODO: API CALL
    // await sendMessage(message)

    console.log(message);

    setMessage("");
  };

  return (
    <div className="  px-8 py-2 ">

      <div className="mx-auto flex max-w-[900px] items-center gap-4">

        {/* Input */}

        <div className="relative flex-1">

          {/* Add Button */}

          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6d7b6c] transition hover:text-[#006e2f]">
            <PlusCircle size={24} />
          </button>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="h-16 w-full rounded-full border border-[#bccbb9] bg-white pl-14 pr-14 text-[16px] outline-none transition focus:border-[#006e2f] focus:ring-2 focus:ring-[#006e2f]/10"
          />

          {/* Emoji */}

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6d7b6c] transition hover:text-[#006e2f]">
            <Smile size={23} />
          </button>

        </div>

        {/* Send */}

        <button
          onClick={handleSend}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006e2f] text-white shadow-lg transition hover:scale-105 active:scale-95"
        >
          <SendHorizontal
            size={22}
            strokeWidth={2.2}
          />
        </button>

      </div>

    </div>
  );
}