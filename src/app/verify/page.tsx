"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import OTPInputComponent from "@/components/OTPInput";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(30);

  const [canResend, setCanResend] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const searchParams = useSearchParams();

  const email = searchParams.get("email");


  // Countdown Timer
  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Verify OTP
  const handleVerify = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const { data } = await axios.post(`http://localhost:7000/api/v1/auth/verify`, { email,otp });

      setSuccess(data.message || "OTP Verified Successfully");

      setTimeout(() => {
        router.push("/me");
      }, 1000);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Invalid verification code."
      );
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    try {
      setError("");
      setSuccess("");

      const { data } = await axios.post(`http://localhost:7000/api/v1/auth/login`, { email });

      setSuccess(data.message || "OTP Sent Successfully");

      setTimer(30);

      setCanResend(false);

      setOtp("");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Unable to resend OTP."
      );
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 px-4">
      {/* Background Blur */}
      <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500 text-white">
            <ShieldCheck size={30} />
          </div>

          <h1 className="text-3xl font-bold">
            Verify Email
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter the 6-digit verification code sent to your email.
          </p>
        </div>

        {/* OTP */}
        <OTPInputComponent
          value={otp}
          onChange={setOtp}
        />

        {/* Success */}
        {success && (
          <p className="mt-4 text-center text-sm text-green-600">
            {success}
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-sm text-red-500">
            {error}
          </p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.length !== 6 || loading}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            "Verifying..."
          ) : (
            <>
              Verify
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Timer / Resend */}
        <div className="mt-6 text-center text-sm">
          {canResend ? (
            <button
              onClick={handleResend}
              className="font-semibold text-green-600 hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-500">
              Resend OTP in{" "}
              <span className="font-semibold text-green-600">
                {timer}s
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}