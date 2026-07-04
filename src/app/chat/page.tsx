"use client"
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import ChatList from "@/components/ChatList"
import { useAppData } from '@/context/appContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ChatHeader from '@/components/ChatHeader'
import Messages from '@/components/Messages'
import MessageInput from '@/components/MessageInput'

const ChatPage = () => {
  const { isAuth, loading } = useAppData()
  const [selectedChat, setSelectedChat] = useState<boolean>(true);
  const router = useRouter()

  useEffect(() => {
    if (!isAuth && !loading) {
      router.push("/login")
    }
  }, [isAuth, loading, router])
  if(loading){
    return <Loading/>
  }

  return (
    <div className="flex h-screen bg-[#F3FCEF]">
      <div className='hidden md:block'>
      <Sidebar />
      </div>
      

      <div className="flex flex-1 flex-col ">
      <div className='overflow-hidden'>
<Topbar />
      </div>

        <div className="flex flex-1 overflow-hidden min-w-0">

          {/* Chat List */}
          <div className={`${selectedChat ? "hidden md:block" : "block"} w-full md:w-85 border-r  border-gray-200 bg-white`}>
          <ChatList/>
          </div>

          {/* Chat Window */}
          <div className={`
      ${selectedChat ? "flex" : "hidden md:flex"}
      flex-1
      flex-col
    `}>
          <ChatHeader/>
           <div className="flex-1 overflow-y-auto">
    <Messages />
  </div>
  <div className='mt-auto'>
<MessageInput/>
  </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ChatPage