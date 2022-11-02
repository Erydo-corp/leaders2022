import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableFooter, Paper } from '@mui/material';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';


export const BasicTable = ({columns, data}) => {
  return(
    <TableContainer component={Paper} sx={{marginY: 3}}>
      <Table aria-aria-label='simple table'>
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
        <TableBody>
          {
            data.map((row) => (
              <TableRow key={row} 
              sx={{ borderBottom: '1.1px solid #cc2222', '&:last-child td, &:last-child th': {borderBottom: '1.1px solid #fff'}}}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.ID}</TableCell>
                <TableCell>{row.kpgz}</TableCell>
                <TableCell>{row.spgz}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.capacity}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.summa}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter sx={{ backgroundColor: '#cc2222', }}>
          
        </TableFooter>
      </Table>
    </TableContainer>
  );
}