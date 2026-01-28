"use client";

import { Button, TrashIcon } from "@shared/ui";

interface DeleteButtonProps {
  onDelete: () => void;
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <Button type="button" variant="ghost" size="inline" onClick={onDelete}>
      <TrashIcon />
      Delete
    </Button>
  );
}
