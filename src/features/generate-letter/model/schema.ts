import { z } from "zod";

export const generateLetterSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  skills: z.string().min(1, "Please describe your skills"),
  additionalDetails: z
    .string()
    .min(1, "Additional details are required")
    .max(1200),
});

export type GenerateLetterData = z.infer<typeof generateLetterSchema>;
