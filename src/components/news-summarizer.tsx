'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeIndianFootballNews, type SummarizeIndianFootballNewsInput } from '@/ai/flows/summarize-indian-football-news';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { GlassCard } from './ui/glass-card';

const FormSchema = z.object({
  articleContent: z.string().min(50, { message: "Article content must be at least 50 characters." }).max(10000, {message: "Article content must be less than 10000 characters."}),
});

type FormData = z.infer<typeof FormSchema>;

export function NewsSummarizer() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      articleContent: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSummary(null);
    startTransition(async () => {
      try {
        const result = await summarizeIndianFootballNews(data as SummarizeIndianFootballNewsInput);
        if (result && result.summary) {
          setSummary(result.summary);
        } else {
          toast({
            title: "Error Summarizing",
            description: "Could not generate summary. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Summarization error:", error);
        toast({
          title: "Summarization Failed",
          description: "An unexpected error occurred. Please check the console for details.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <GlassCard className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Sparkles className="text-primary h-6 w-6" />
          AI News Summarizer
        </CardTitle>
        <CardDescription>
          Paste an Indian football news article below to get a quick summary.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="articleContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="articleContent">Article Content</FormLabel>
                  <FormControl>
                    <Textarea
                      id="articleContent"
                      placeholder="Paste the full news article here..."
                      className="min-h-[200px] bg-background/70 border-border focus:ring-primary"
                      {...field}
                      aria-label="Article content for summarization"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Summarizing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Summary
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {summary && (
        <CardFooter className="mt-6">
          <Card className="w-full bg-background/50 border-primary/30">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 whitespace-pre-line">{summary}</p>
            </CardContent>
          </Card>
        </CardFooter>
      )}
    </GlassCard>
  );
}
