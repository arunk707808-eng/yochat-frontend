"use client";

import { OTPInput, SlotProps } from "input-otp";

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
}

function Slot({ char, isActive }: SlotProps) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-xl border text-xl font-semibold transition-all duration-200
      ${isActive
          ? "border-green-500 ring-2 ring-green-200"
          : "border-gray-300"
        }`}
    >
      {char ?? ""}
    </div>
  );
}

export default function OTPInputComponent({
  value,
  onChange,
}: OTPInputProps) {
  return (
    <OTPInput
      value={value}
      onChange={onChange}
      maxLength={6}
      inputMode="numeric"
      autoComplete="one-time-code"
      containerClassName="flex justify-center gap-3"
      render={({ slots }) => (
        <>
          {slots.map((slot, index) => (
            <Slot key={index} {...slot} />
          ))}
        </>
      )}
    />
  );
}