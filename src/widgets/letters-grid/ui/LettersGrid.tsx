"use client";

import {
  CopyButton,
  DeleteButton,
  LetterCard,
  lettersQueries,
  useRemoveLetterMutation,
} from "@entities/letter";
import { Grid } from "@shared/ui/Grid/Grid";
import { useQuery } from "@tanstack/react-query";

export function LettersGrid() {
  const { isPending, data } = useQuery(lettersQueries.all());
  const { mutate: removeLetter } = useRemoveLetterMutation();

  if (isPending || !data) {
    // TODO: add skeleton?
    return null;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <Grid>
      {data.map((letter) => (
        <LetterCard
          key={letter.id}
          content={letter.generatedContent}
          href={`/letter/${letter.id}`}
          footer={
            <>
              <DeleteButton onDelete={() => removeLetter(letter.id)} />
              <CopyButton content={letter.generatedContent} />
            </>
          }
        />
      ))}
    </Grid>
  );
}
