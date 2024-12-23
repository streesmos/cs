import { cn } from '@/lib/utils';
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"

interface Props {
  className?: string;
 
  items: any[]
}



export const ProductTable: React.FC<Props> = ({  className,items}) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 px-8', className)}>
      
        
       
      <Table>
    
      <TableBody>
      {items.map((item, i) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

       </div>
  );
};
