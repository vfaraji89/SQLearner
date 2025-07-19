'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

type Column = {
  name: string;
  type: string;
  key?: 'PK' | 'FK';
  description: string;
};

type Schema = {
  tableName: string;
  columns: Column[];
};

const schemas: Schema[] = [
  {
    tableName: 'clicks',
    columns: [
      { name: 'click_id', type: 'INT', key: 'PK', description: 'Unique ID for the click' },
      { name: 'user_id', type: 'VARCHAR', key: 'FK', description: 'ID of the user who clicked' },
      { name: 'campaign_id', type: 'INT', key: 'FK', description: 'ID of the campaign' },
      { name: 'timestamp', type: 'DATETIME', description: 'Time of the click' },
      { name: 'country', type: 'VARCHAR', description: 'Country where the click originated' },
    ],
  },
  {
    tableName: 'bookings',
    columns: [
      { name: 'booking_id', type: 'INT', key: 'PK', description: 'Unique ID for the booking' },
      { name: 'user_id', type: 'VARCHAR', key: 'FK', description: 'ID of the user who booked' },
      { name: 'booking_date', type: 'DATE', description: 'Date of the booking' },
      { name: 'booking_value', type: 'DECIMAL', description: 'Value of the booking' },
      { name: 'hotel_id', type: 'INT', key: 'FK', description: 'ID of the hotel' },
    ],
  },
  {
    tableName: 'users',
    columns: [
      { name: 'user_id', type: 'VARCHAR', key: 'PK', description: 'Unique ID for the user' },
      { name: 'signup_date', type: 'DATE', description: 'Date the user signed up' },
    ],
  },
  {
    tableName: 'campaigns',
    columns: [
        { name: 'campaign_id', type: 'INT', key: 'PK', description: 'Unique ID for the campaign' },
        { name: 'campaign_name', type: 'VARCHAR', description: 'Name of the campaign' },
        { name: 'channel', type: 'VARCHAR', description: 'Marketing channel (e.g., TikTok, Google)' },
    ],
  },
  {
    tableName: 'employees',
    columns: [
        { name: 'id', type: 'INT', key: 'PK', description: 'Unique ID for the employee' },
        { name: 'name', type: 'VARCHAR', description: 'Name of the employee' },
        { name: 'manager_id', type: 'INT', key: 'FK', description: 'ID of the employee`s manager' },
    ],
  },
  {
    tableName: 'campaign_performance',
    columns: [
        { name: 'performance_id', type: 'INT', key: 'PK', description: 'Unique ID for performance record' },
        { name: 'campaign_id', type: 'INT', key: 'FK', description: 'ID of the campaign' },
        { name: 'cost', type: 'DECIMAL', description: 'Cost of the campaign for a period' },
        { name: 'date', type: 'DATE', description: 'Date of the performance record' },
    ]
  }
];

export function getSchemaForTable(tableNames?: string[]) {
    if (!tableNames) return schemas;
    return schemas.filter(s => tableNames.includes(s.tableName));
}

interface SchemaViewerProps {
    tableNames?: string[];
}


export default function SchemaViewer({ tableNames }: SchemaViewerProps) {
    const relevantSchemas = getSchemaForTable(tableNames);

  return (
    <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
        {relevantSchemas.map((schema) => (
            <Card key={schema.tableName} className="shadow-md">
            <CardHeader>
                <CardTitle className="font-mono text-lg">{schema.tableName}</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schema.columns.map((col) => (
                    <TableRow key={col.name}>
                        <TableCell className="font-mono font-medium">
                        {col.name}{' '}
                        {col.key && (
                            <Badge variant={col.key === 'PK' ? 'default' : 'secondary'} className="ml-2">
                            {col.key}
                            </Badge>
                        )}
                        </TableCell>
                        <TableCell className="font-mono text-muted-foreground">{col.type}</TableCell>
                        <TableCell>{col.description}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
        ))}
        </div>
    </ScrollArea>
  );
}
