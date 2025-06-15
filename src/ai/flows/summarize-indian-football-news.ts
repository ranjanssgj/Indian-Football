// 'use server';

/**
 * @fileOverview AI-powered news summarizer tool for Indian football news.
 *
 * - summarizeIndianFootballNews - A function that generates summaries of Indian football news articles.
 * - SummarizeIndianFootballNewsInput - The input type for the summarizeIndianFootballNews function.
 * - SummarizeIndianFootballNewsOutput - The return type for the summarizeIndianFootballNews function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeIndianFootballNewsInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the Indian football news article to summarize.'),
});

export type SummarizeIndianFootballNewsInput = z.infer<
  typeof SummarizeIndianFootballNewsInputSchema
>;

const SummarizeIndianFootballNewsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the Indian football news article.'),
});

export type SummarizeIndianFootballNewsOutput = z.infer<
  typeof SummarizeIndianFootballNewsOutputSchema
>;

export async function summarizeIndianFootballNews(
  input: SummarizeIndianFootballNewsInput
): Promise<SummarizeIndianFootballNewsOutput> {
  return summarizeIndianFootballNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeIndianFootballNewsPrompt',
  input: {schema: SummarizeIndianFootballNewsInputSchema},
  output: {schema: SummarizeIndianFootballNewsOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing Indian football news articles.

  Please provide a concise and informative summary of the following article:

  {{articleContent}}
  `,
});

const summarizeIndianFootballNewsFlow = ai.defineFlow(
  {
    name: 'summarizeIndianFootballNewsFlow',
    inputSchema: SummarizeIndianFootballNewsInputSchema,
    outputSchema: SummarizeIndianFootballNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
