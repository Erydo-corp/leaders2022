import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

export const HeaderTable = ({columns}) => {
  return(
    <TableHead>
          <TableRow
          sx={{ backgroundColor: "#252A41"}}>
            {columns.map((col) => (
              <TableCell key={col.id}
                         sx={{
                             marginLeft: 10,
                             color: '#fff',
                             background: "#252A41"
                         }}>
                {col.label }
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
  );
}
