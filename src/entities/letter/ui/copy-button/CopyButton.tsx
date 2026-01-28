"use client";

import { Button, CopyIcon } from "@shared/ui";
import { useCallback, useState } from "react";

interface CopyButtonProps {
  content: string;
}

export function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [content]);

  return (
    <Button type="button" variant="ghost" size="inline" onClick={handleCopy}>
      {copied ? "Copied!" : "Copy to clipboard"}
      <CopyIcon />
    </Button>
  );
}
