'use client';

import { useState, useTransition, useEffect, type Dispatch, type SetStateAction } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb, Terminal, BookCopy, Code, Play } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

import { explainSqlQuery } from '@/ai/flows/explain-sql-query';
import type { Question } from '@/lib/sql-data';
import SchemaViewer from './schema-viewer';
import CommandList from './command-list';

interface SqlEditorPanelProps {
  selectedQuestion: Question;
  sqlQuery: string;
  setSqlQuery: Dispatch<SetStateAction<string>>;
}

export default function SqlEditorPanel({
  selectedQuestion,
  sqlQuery,
  setSqlQuery,
}: SqlEditorPanelProps) {
  const [explanation, setExplanation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleExplainQuery = async () => {
    if (!sqlQuery.trim()) {
        setError('Query cannot be empty.');
        return;
    }
    setError(null);
    setExplanation('');
    startTransition(async () => {
      try {
        const result = await explainSqlQuery(sqlQuery);
        setExplanation(result);
      } catch (e) {
        setError('An error occurred while explaining the query.');
        console.error(e);
      }
    });
  };

  useEffect(() => {
    setSqlQuery(selectedQuestion.query || '');
    setExplanation('');
    setError(null);
  }, [selectedQuestion, setSqlQuery]);

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg">
          {selectedQuestion.id}. {selectedQuestion.question}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          {selectedQuestion.answer}
        </p>
      </div>

      <div className="flex-grow flex flex-col min-h-0">
        <div className="p-4">
            <div className="relative">
                <Textarea
                    placeholder="Write your SQL query here..."
                    className="h-48 resize-none"
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    disabled={!selectedQuestion.query}
                />
                <div className="absolute bottom-2 right-2 flex gap-2">
                    <Button onClick={handleExplainQuery} disabled={isPending || !selectedQuestion.query} size="sm">
                        <Lightbulb className="mr-2 h-4 w-4" />
                        {isPending ? 'Explaining...' : 'Explain Query'}
                    </Button>
                    <Button size="sm" variant="secondary" disabled={!selectedQuestion.query}>
                        <Play className="mr-2 h-4 w-4" />
                        Execute
                    </Button>
                </div>
            </div>
        </div>

        <Tabs defaultValue="explanation" className="flex-grow flex flex-col min-h-0">
          <TabsList className="mx-4">
            <TabsTrigger value="explanation"><Lightbulb className="mr-2 h-4 w-4"/>Explanation</TabsTrigger>
            <TabsTrigger value="schema"><Terminal className="mr-2 h-4 w-4"/>Schema</TabsTrigger>
            <TabsTrigger value="commands"><BookCopy className="mr-2 h-4 w-4"/>Commands</TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="flex-grow overflow-y-auto mt-0">
            <div className="p-4">
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {isPending && (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              )}
              {explanation && !isPending && (
                <Card>
                  <CardContent className="p-4">
                    <pre className="whitespace-pre-wrap font-sans text-sm">{explanation}</pre>
                  </CardContent>
                </Card>
              )}
               {!explanation && !isPending && !error && selectedQuestion.query &&(
                 <div className="text-center text-muted-foreground p-8">
                    <p>Click "Explain Query" to see an AI-powered breakdown of the SQL.</p>
                </div>
               )}
               {!selectedQuestion.query && (
                 <div className="text-center text-muted-foreground p-8">
                    <Code className="mx-auto h-12 w-12 mb-4" />
                    <p>This is a conceptual question. There is no query to explain.</p>
                </div>
               )}
            </div>
          </TabsContent>
          <TabsContent value="schema" className="flex-grow mt-0 h-full overflow-hidden">
            <SchemaViewer tableNames={selectedQuestion.tableName} />
          </TabsContent>
          <TabsContent value="commands" className="flex-grow mt-0 h-full overflow-hidden">
            <CommandList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
