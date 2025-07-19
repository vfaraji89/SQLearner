'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

const commands = [
  {
    command: 'SELECT',
    description: 'Retrieves data from one or more tables.',
  },
  {
    command: 'FROM',
    description: 'Specifies the table to select or delete data from.',
  },
  {
    command: 'WHERE',
    description: 'Filters records based on a specific condition.',
  },
  {
    command: 'GROUP BY',
    description:
      'Groups rows that have the same values into summary rows, like "find the number of customers in each country".',
  },
  {
    command: 'HAVING',
    description:
      'Filters groups based on a specific condition, used with GROUP BY.',
  },
  {
    command: 'ORDER BY',
    description: 'Sorts the result set in ascending or descending order.',
  },
  {
    command: 'JOIN',
    description: 'Combines rows from two or more tables based on a related column between them.',
  },
  {
    command: 'LEFT JOIN',
    description: 'Returns all records from the left table, and the matched records from the right table.',
  },
  {
    command: 'INSERT INTO',
    description: 'Inserts new records into a table.',
  },
  {
    command: 'UPDATE',
    description: 'Modifies the existing records in a table.',
  },
  {
    command: 'DELETE',
    description: 'Deletes existing records in a table.',
  },
  {
    command: 'AS',
    description: 'Renames a column or table with an alias.',
  },
  {
    command: 'LIMIT',
    description: 'Specifies the maximum number of records to return.',
  },
  {
    command: 'CASE',
    description: 'Goes through conditions and returns a value when the first condition is met (like an if-then-else statement).',
  },
  {
    command: 'WITH',
    description: 'Creates a Common Table Expression (CTE), a temporary result set that you can reference.',
  },
];

export default function CommandList() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Command</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commands.map((cmd) => (
              <TableRow key={cmd.command}>
                <TableCell className="font-mono font-semibold">
                  {cmd.command}
                </TableCell>
                <TableCell>{cmd.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ScrollArea>
  );
}
