import React, { useEffect, useState } from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DotsMenu } from '../buttons/DotsMenu';

export const BodyTable = ({data}) => {

  const [menuActive, setMenuActive] = useState()

  return(
    <TableBody>
      {
        data.map((row) => (
          <TableRow key={row} 
          sx={{ position: 'relative', borderBottom: '1.1px solid #cc2222', '&:last-child td, &:last-child th': {borderBottom: '1.1px solid #fff'}}}>
            {
              Object.values(row).map((td) => (
                <TableCell sx={{position: 'relative'}}>{td}</TableCell>
                ))
            }
            <DotsMenu active={menuActive} setActive={setMenuActive}/>
            {
              row['spgz'] ? <MoreVertIcon onClick={() => setMenuActive(true)} 
              sx={{
                mt: 2,
                ml: -4,
                cursor: 'pointer',
              }} /> 
              : null
            }
          </TableRow>
        ))
      }
    </TableBody>
  )
}; 