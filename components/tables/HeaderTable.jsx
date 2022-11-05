import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

export const HeaderTable = ({columns}) => {
  return(
    <TableHead>
          <TableRow
          sx={{ backgroundColor: '#cc2222', }}>
            {columns.map((col) => (
              <TableCell key={col.id} sx={{ color: '#fff', }}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
  );
}
