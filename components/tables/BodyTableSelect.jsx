import React from 'react';
import { useState } from 'react';
import { TableBody, TableRow, TableCell, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const BodyTableSelect = ({data}) => {

  const startValue = data.map((el) => el.spgz[0]);
  // console.log(startValue);
  const [spgz, setSpgz] = useState(startValue);
  
  const handleChange = (event) => {
    setSpgz(event.target.value);
  };

  return(
    <TableBody>
      {
        data.map((row) => (
          <TableRow key={row} 
          sx={{ borderBottom: '1.1px solid #cc2222', '&:last-child td, &:last-child th': {borderBottom: '1.1px solid #fff'}}}>
            {
              <TableCell width={'50%'}>{row['kpgz']}</TableCell>
            }
            {
              <TableCell width={'50%'}>
                <FormControl fullWidth>
                  <Select
                    id='spgz'
                    name='spgz'
                    value={spgz}
                    onChange={handleChange}
                  >
                    {row['spgz'].map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
                  </Select>
                </FormControl>
              </TableCell>
            }
          </TableRow>
        ))
      }
    </TableBody>
  )
}; 

// Этот код работает корректно, но Material UI некорректно отображает выбор
{/* <form>
      <select sx={{width: '600px'}} name="spgz" id="spgz">
        {row['spgz'].map((item) => (<option key={item} values={item}>{item}</option>))}
      </select>
  </form> */}



