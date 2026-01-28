import type { SubmissionResult } from "@conform-to/dom";

export interface GenerateLetterResponse {
  submission: SubmissionResult;
  text: string | null;
}

export async function generateLetter(
  formData: FormData,
): Promise<GenerateLetterResponse> {
  const response = await fetch("/api/generate", {
    method: "POST",
    body: formData,
  });

  const data: GenerateLetterResponse = await response.json();
  return data;
}
