"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

type CopyStatus = "idle" | "copied" | "error";

type CopyAddressButtonProps = {
  value: string;
  className?: string;
};

/**
 * 주소 복사 버튼.
 * Clipboard API → execCommand 순으로 시도하고, 모두 실패하면 직접 복사 안내를 노출합니다.
 * 결과는 aria-live 영역으로 스크린리더에도 전달됩니다.
 */
export function CopyAddressButton({ value, className }: CopyAddressButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const flash = (next: CopyStatus) => {
    setStatus(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), 3200);
  };

  const legacyCopy = (): boolean => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        flash("copied");
        return;
      }
    } catch {
      // Clipboard API 사용 불가 시 아래 대체 경로로 진행
    }

    flash(legacyCopy() ? "copied" : "error");
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-11 w-fit items-center gap-2.5 border border-warm-500/50 px-5 py-3 text-[0.75rem] font-medium tracking-[0.16em] text-cream uppercase transition-colors duration-500 hover:border-gold hover:text-gold-soft"
      >
        {status === "copied" ? (
          <Check className="h-4 w-4 text-gold" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4 text-gold" aria-hidden="true" />
        )}
        주소 복사
      </button>

      <p
        aria-live="polite"
        className={cn(
          "text-xs leading-relaxed transition-opacity duration-500",
          status === "idle" && "opacity-0",
          status === "copied" && "text-gold-soft opacity-100",
          status === "error" && "text-warm-200 opacity-100",
        )}
      >
        {status === "copied" && "주소를 복사했습니다."}
        {status === "error" &&
          "복사에 실패했습니다. 위 주소를 직접 선택해 복사해 주세요."}
        {status === "idle" && " "}
      </p>
    </div>
  );
}
