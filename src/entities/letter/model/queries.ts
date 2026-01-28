import { queryOptions } from "@tanstack/react-query";
import { client } from "../api/client";

export const lettersQueries = {
  all: () =>
    queryOptions({
      queryKey: ["letters"],
      queryFn: () => client.getAll(),
    }),

  byId: (id: string) =>
    queryOptions({
      queryKey: ["letters", id],
      queryFn: async () => (await client.getById(id)) ?? null,
    }),
};
