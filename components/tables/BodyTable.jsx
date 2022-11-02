import React from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';

export const BodyTable = ({data}) => {
  return(
    <TableBody>
      {
        data.map((row) => (
          <TableRow key={row} 
          sx={{ borderBottom: '1.1px solid #cc2222', '&:last-child td, &:last-child th': {borderBottom: '1.1px solid #fff'}}}>
            {
              Object.values(row).map((td) => (<TableCell>{td}</TableCell>))
            }
          </TableRow>
        ))
      }
    </TableBody>
  )
}; 