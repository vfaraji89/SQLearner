'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sqlDecks, type Question } from '@/lib/sql-data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronsRight } from 'lucide-react';

interface SqlDecksProps {
  onSelectQuestion: (question: Question) => void;
}

export default function SqlDecks({ onSelectQuestion }: SqlDecksProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (question: Question) => {
    setSelectedId(question.id);
    onSelectQuestion(question);
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 px-2 tracking-tight">
          SQL Decks
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          {sqlDecks.map((category) => (
            <AccordionItem value={`item-${category.id}`} key={category.id}>
              <AccordionTrigger className="text-md px-2 hover:no-underline font-semibold">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pl-2">
                  {category.questions.map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleSelect(question)}
                      className={cn(
                        'flex items-center text-left p-2.5 rounded-md hover:bg-accent/80 transition-colors text-sm w-full group',
                        selectedId === question.id && 'bg-accent'
                      )}
                    >
                      <span className="flex-1">
                        <span className="font-semibold">{question.id}.</span> {question.question}
                      </span>
                      <ChevronsRight className="h-4 w-4 ml-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollArea>
  );
}
