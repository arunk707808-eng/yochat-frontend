"use client";

import Image from "next/image";
import { CheckCheck, FileText, Download } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "other",
    avatar: "",
    text: "Hey Alex! Have you had a chance to review the new project timeline? I'd love to get your thoughts before the meeting tomorrow.",
    time: "10:42 AM",
  },

  {
    id: 2,
    sender: "me",
    text: "Just finished looking at it! Overall it looks solid. I have a few suggestions for the development phase but nothing major.",
  },

  {
    id: 3,
    sender: "me",
    text: "I can send over a quick summary now if you have a minute?",
    time: "10:45 AM",
    seen: true,
  },

  {
    id: 4,
    sender: "other",
    avatar: "",
    text: "That sounds like a great plan!",
    time: "10:46 AM",
  },

  {
    id: 5,
    sender: "file",
  },
];

export default function Messages() {
  return (
    <div className="flex-1 overflow-y-auto bg-white px-8 py-6">

      {/* Today */}

      <div className="mb-8 flex justify-center">

        <span className="rounded-full bg-[#edf6ea] px-4 py-1 text-sm text-[#6d7b6c]">
          Today
        </span>

      </div>

      <div className="space-y-6">

        {messages.map((message) => {

          if (message.sender === "file") {
            return (
              <div key={message.id} className="flex">

                <div className="ml-8 flex w-[430px] items-center rounded-3xl border border-[#bccbb9] bg-white p-5">

                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f0e4]">

                    <FileText
                      size={28}
                      className="text-[#006e2f]"
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="font-semibold text-[#161d16]">
                      Q3_Roadmap_Final.pdf
                    </h3>

                    <p className="text-sm text-[#6d7b6c]">
                      2.4 MB • PDF Document
                    </p>

                  </div>

                  <Download
                    className="text-[#6d7b6c]"
                    size={22}
                  />

                </div>

              </div>
            );
          }

          if (message.sender === "other") {
            return (
              <div key={message.id}>

                <div className="flex items-end gap-3">

                  <Image
                    src={message.avatar!}
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full"
                  />

                  <div className="max-w-[65%] rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#e8f0e4] px-5 py-4">

                    <p className="leading-8 text-[#3d4a3d]">
                      {message.text}
                    </p>

                  </div>

                </div>

                <p className="ml-9 mt-2 text-xs text-[#6d7b6c]">
                  {message.time}
                </p>

              </div>
            );
          }

          return (
            <div
              key={message.id}
              className="flex flex-col items-end"
            >

              <div className="max-w-[65%] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-[#006e2f] px-5 py-4 text-white">

                <p className="leading-8">
                  {message.text}
                </p>

              </div>

              {message.time && (
                <div className="mt-2 mr-2 flex items-center gap-1 text-xs text-[#6d7b6c]">

                  {message.time}

                  {message.seen && (
                    <CheckCheck
                      size={14}
                      className="text-[#6d7b6c]"
                    />
                  )}

                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}