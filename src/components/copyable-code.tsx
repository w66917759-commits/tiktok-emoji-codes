"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState, type ElementType } from "react";

type CopyableCodeProps = {
  value: string;
  label?: string;
  as?: "code" | "span";
  className?: string;
  codeClassName?: string;
  buttonClassName?: string;
};

async function writeClipboardText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

export function CopyableCode({
  value,
  label,
  as = "code",
  className,
  codeClassName,
  buttonClassName,
}: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const CodeTag = as as ElementType;
  const copyLabel = label ?? value;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    if (!value) {
      return;
    }

    await writeClipboardText(value);
    setCopied(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <span className={`copy-code ${className ?? ""}`}>
      <CodeTag className={codeClassName}>{value}</CodeTag>
      <button suppressHydrationWarning
        type="button"
        className={`copy-code-button ${buttonClassName ?? ""}`}
        onClick={handleCopy}
        aria-label={`Copy ${copyLabel}`}
        title={`Copy ${copyLabel}`}
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      </button>
    </span>
  );
}
