// ExplainSqlQuery flow provides a step-by-step explanation of a given SQL query.
// - explainSqlQuery - A function that accepts an SQL query and returns its explanation.
// - ExplainSqlQueryInput - The input type for the explainSqlQuery function.
// - ExplainSqlQueryOutput - The return type for the explainSqlQuery function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainSqlQueryInputSchema = z.string().describe('The SQL query to explain.');
export type ExplainSqlQueryInput = z.infer<typeof ExplainSqlQueryInputSchema>;

const ExplainSqlQueryOutputSchema = z.string().describe('The explanation of the SQL query.');
export type ExplainSqlQueryOutput = z.infer<typeof ExplainSqlQueryOutputSchema>;

export async function explainSqlQuery(input: ExplainSqlQueryInput): Promise<ExplainSqlQueryOutput> {
  return explainSqlQueryFlow(input);
}

const explainSqlQueryPrompt = ai.definePrompt({
  name: 'explainSqlQueryPrompt',
  input: {schema: ExplainSqlQueryInputSchema},
  output: {schema: ExplainSqlQueryOutputSchema},
  prompt: `You are an expert SQL tutor. Given the following SQL query, provide a clear, step-by-step explanation of what the query does, what each part of the query means, and how it will affect the database. Focus on explaining the logic and purpose of the query in simple terms that a beginner can understand.\n\nSQL Query: {{{$input}}}`,
});

const explainSqlQueryFlow = ai.defineFlow(
  {
    name: 'explainSqlQueryFlow',
    inputSchema: ExplainSqlQueryInputSchema,
    outputSchema: ExplainSqlQueryOutputSchema,
  },
  async input => {
    const {text} = await explainSqlQueryPrompt(input);
    return text!;
  }
);
