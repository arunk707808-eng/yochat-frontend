"use client"

import axios from "axios";
import React, { Children, createContext, ReactNode, useContext, useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export const USER_SERVICE = "http://localhost:7000"
export const CHAT_SERVICE = "http://localhost:7002"

interface Iuser {
  _id: string
  name: string;
  email: string;

}

interface appContextType {
  user: Iuser | null
  isAuth: boolean
  loading: boolean
  setUser: React.Dispatch<React.SetStateAction<Iuser | null>>
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<appContextType | undefined>(undefined)

interface appProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: appProviderProps) => {
  const [user, setUser] = useState<Iuser | null>(null)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const fetchUser = async () => {
    setLoading(true)
    try {
      //  await new Promise((resolve) => setTimeout(resolve, 9000));
      const { data } = await axios.get(`${USER_SERVICE}/api/v1/me`, { withCredentials: true })
      setUser(data)
      setIsAuth(true)
    } catch (error: any) {
      toast.error(error.response?.data?.message || "failed to fetch data")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <AppContext.Provider value={{ user, isAuth, loading, setUser, setIsAuth, setLoading }}>
      {children} <Toaster/>
    </AppContext.Provider>
  )
}

export const useAppData = (): appContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppData must be used in appProvider")
  }
  return context;
}