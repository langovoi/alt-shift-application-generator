import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  client,
  type SaveLetterData,
  type UpsertLetterData,
} from "../api/client";
import { lettersQueries } from "./queries";

export function useSaveLetterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveLetterData) => client.save(data),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: lettersQueries.all().queryKey,
      });
    },
  });
}

export function useUpsertLetterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpsertLetterData) => client.upsert(data),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: lettersQueries.all().queryKey,
      });
    },
  });
}

export function useRemoveLetterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => client.remove(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: lettersQueries.all().queryKey,
      });
    },
  });
}
