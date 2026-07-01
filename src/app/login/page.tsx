"use client";
import React, { useState } from 'react'
import {
  MessageCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`http://localhost:7000/api/v1/auth/login`, { email })
      alert(data.message)
      router.push(`/verify?email=${email}`)
    } catch (error: any) {
      alert(error.response.data?.message || error.message)
    } finally {
      setLoading(false)
    }

  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg">
            <MessageCircle size={32} />
          </div>

          <h1 className="text-4xl font-bold">YoChat</h1>
          <p className="mt-2 text-gray-500">
            Welcome back! Ready to chat?
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  id='email'
                  placeholder="name@example.com"
                  className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>



            <button
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Verification Code"}
              {!loading && <ArrowRight size={18} />}
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <button
              type="button"
              className="w-full rounded-xl border  py-3 font-medium hover:bg-gray-50"
            >
              Google
            </button>



          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
          <button className="ml-1 font-semibold text-green-600 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );

}

export default LoginPage