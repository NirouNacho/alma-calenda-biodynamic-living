import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  bezel = "#1a1f2e",
  className = "",
}: {
  children: ReactNode;
  bezel?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 w-[320px] h-[680px] rounded-[44px] p-[6px] shadow-2xl ${className}`}
      style={{ background: bezel }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
      <div className="w-full h-full rounded-[38px] overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
