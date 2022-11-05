import React, { useEffect, useState } from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DotsMenu } from '../buttons/DotsMenu';

export const BodyTable = ({data}) => {

  const [menuActive, setMenuActive] = useState(false)

  return(
    <TableBody sx={{color: 'white'}}>
      {
        data.map(item => (
          <TableRow key={item.number}
          sx={{ position: 'relative',
            background: "#1E2235",
            borderBottom: '1.1px solid white',
            '&:last-child td, &:last-child th': {
                borderBottom: '1.1px solid #fff'
          }}}>
            <TableCell sx={{color: "white"}}>{item.number !== "" ? item.number : null }</TableCell>
            <TableCell sx={{color: "white"}}>{item.ID !== "" ? item.ID : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.name !== "" ? item.name : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.kpgz !== "" ? item.kpgz : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.spgz !== "" ? item.spgz : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.unit !== "" ? item.unit : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.capacity !== "" ? item.capacity : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.price !== "" ? item.price : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.summa !== "" ? item.summa : null}</TableCell>
            <TableCell sx={{color: "white"}}>{item.address !== "" ? item.address : null}</TableCell>
            <TableCell sx={{color: "white"}}>{
              menuActive ?
                  <DotsMenu/> :
                  <MoreVertIcon onClick={()=>setMenuActive(true)}/>
            }</TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  )
}; 