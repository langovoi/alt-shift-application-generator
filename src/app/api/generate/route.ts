import { parseWithZod } from "@conform-to/zod/v4";
import { generateLetterSchema } from "@features/generate-letter";
import { gateway, generateText } from "ai";
import { NextResponse } from "next/server";

const PROMPT = `You are a professional cover letter writer. Generate a concise, professional cover letter based on the user's input.

**User Input:**
- Job Title: {{job_title}}
- Company: {{company}}
- Skills: {{skills_list}}
- Additional Details: {{additional_details}}

**Output Requirements:**
1. Follow this exact structure:
   - Opening: Address to company and state interest in the specific position
   - Skills paragraph: Naturally incorporate the provided skills, explaining how they make the candidate suitable
   - Additional details paragraph: Expand on the provided additional details in a professional tone
   - Closing: Express confidence and enthusiasm, thank them, request opportunity to discuss further

2. Formatting rules:
   - Keep it under 200 words
   - Use professional but warm tone
   - Do not invent skills, experiences, or qualifications not provided
   - Do not use generic filler phrases like "fast learner" or "team player" unless explicitly provided in skills or additional details
   - Output only the cover letter text, no explanations, commentary, placeholder, markdown, or any formatting expect new lines for paragraphs

3. Structure template:`;

export async function POST(request: Request) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: generateLetterSchema });

  if (submission.status !== "success") {
    return NextResponse.json({ submission: submission.reply(), text: null });
  }

  const { jobTitle, company, skills, additionalDetails } = submission.value;

  const userMessage = [
    `Job Title: ${jobTitle}`,
    `Company: ${company}`,
    `Skills: ${skills}`,
    `Additional Details: ${additionalDetails}`,
  ]
    .filter(Boolean)
    .join("\n");

  const { text } = await generateText({
    model: gateway("openai/gpt-5.2"),
    system: PROMPT,
    prompt: userMessage,
  });

  return NextResponse.json({
    submission: submission.reply(),
    text,
  });
}
