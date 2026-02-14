'use server';
/**
 * @fileOverview An AI assistant that answers questions about Harshitha Manneri's portfolio content.
 *
 * - aiPortfolioAssistant - A function that handles the question-answering process.
 * - AiPortfolioAssistantInput - The input type for the aiPortfolioAssistant function.
 * - AiPortfolioAssistantOutput - The return type for the aiPortfolioAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiPortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The question from the recruiter about Harshitha Manneri\'s portfolio.'),
  portfolioContent: z.string().describe('The complete textual content of Harshitha Manneri\'s portfolio, including all sections.'),
});
export type AiPortfolioAssistantInput = z.infer<typeof AiPortfolioAssistantInputSchema>;

const AiPortfolioAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the query, based on the provided portfolio content.'),
});
export type AiPortfolioAssistantOutput = z.infer<typeof AiPortfolioAssistantOutputSchema>;

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioAssistantPrompt',
  input: { schema: AiPortfolioAssistantInputSchema },
  output: { schema: AiPortfolioAssistantOutputSchema },
  prompt: `You are an AI assistant for Harshitha Manneri's professional portfolio. Your task is to answer questions about her skills, projects, accomplishments, research, and other relevant details based *solely* on the provided portfolio content.

If the information required to answer the question is not available in the 'Portfolio Content' provided, please state that you cannot find the answer in the provided portfolio and politely suggest that the user might want to review the full portfolio.

Portfolio Content:
---
{{{portfolioContent}}}
---

Question: {{{query}}}`,
});

const aiPortfolioAssistantFlow = ai.defineFlow(
  {
    name: 'aiPortfolioAssistantFlow',
    inputSchema: AiPortfolioAssistantInputSchema,
    outputSchema: AiPortfolioAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
