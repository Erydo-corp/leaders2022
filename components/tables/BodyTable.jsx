import React from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const BodyTable = ({data}) => {
  return(
    <TableBody>
      {
        data.map((row) => (
          <TableRow key={row} 
          sx={{ borderBottom: '1.1px solid #cc2222', '&:last-child td, &:last-child th': {borderBottom: '1.1px solid #fff'}}}>
            {
              Object.values(row).map((td) => (
                <TableCell>{td}</TableCell>
                ))
            }
            {
              row['spgz'] ? <MoreVertIcon  sx={{
                mt: 2,
                ml: -4,
                cursor: 'pointer',
              }}/> 
              : null
            }
          </TableRow>
        ))
      }
    </TableBody>
  )
}; 