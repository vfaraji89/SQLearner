'use client';

import { useState } from 'react';
import type { Question } from '@/lib/sql-data';
import SqlDecks from '@/components/sql-decks';
import SqlEditorPanel from '@/components/sql-editor-panel';
import { DatabaseZap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [sqlQuery, setSqlQuery] = useState<string>('');

  const handleSelectQuestion = (question: Question) => {
    setSelectedQuestion(question);
    setSqlQuery(question.query || '');
  };

  return (
    <div className="h-screen bg-background text-foreground font-body">
      <header className="flex h-16 items-center justify-between border-b px-6 bg-card shadow-sm">
        <div className="flex items-center gap-3">
          <DatabaseZap className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary">
            SQLearner
          </h1>
        </div>
      </header>
      <main className="flex h-[calc(100vh-4rem)]">
        <div className="w-full md:w-1/3 border-r overflow-y-auto">
          <SqlDecks onSelectQuestion={handleSelectQuestion} />
        </div>
        <div className="hidden md:flex md:w-2/3 flex-col">
          {selectedQuestion ? (
            <SqlEditorPanel
              key={selectedQuestion.id}
              selectedQuestion={selectedQuestion}
              sqlQuery={sqlQuery}
              setSqlQuery={setSqlQuery}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center p-8">
              <Card className="w-full max-w-md text-center shadow-lg">
                <CardContent className="p-8">
                  <BookOpen className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">
                    Welcome to SQLearner
                  </h2>
                  <p className="text-muted-foreground">
                    Select a question from the decks on the left to get started.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
