"use client";

import { Button, LoadingIcon, RepeatIcon } from "@shared/ui";
import { useFormStatus } from "react-dom";

interface GenerateButtonProps {
  isGenerated: boolean;
  disabled?: boolean;
}

export function GenerateButton({ isGenerated, disabled }: GenerateButtonProps) {
  const { pending } = useFormStatus();

  if (isGenerated) {
    return (
      <Button
        type="submit"
        variant="outline"
        size="lg"
        disabled={disabled || pending}
      >
        {pending ? (
          <LoadingIcon size="lg" className="animate-spin" />
        ) : (
          <>
            <RepeatIcon size="lg" />
            Try Again
          </>
        )}
      </Button>
    );
  }

  return (
    <Button
      type="submit"
      variant={pending ? "outline" : "primary"}
      size="lg"
      disabled={disabled || pending}
    >
      {pending ? (
        <LoadingIcon size="lg" className="animate-spin" />
      ) : (
        "Generate Now"
      )}
    </Button>
  );
}
