import React from 'react';
import { Grid, TableContainer, Table, Paper, Box, Typography } from '@mui/material';
import { HeaderTable } from '../components/tables/HeaderTable';
import { BodyTable } from '../components/tables/BodyTable';
import { MyPagination } from '../components/tables/MyPagination';
import BasicButton from '../components/buttons/BasicButton';

const columns = [
  { id: 'kpgz', label: 'Ключевое наименование работ' },
  { id: 'unit', label: 'Единица измерения' },
  { id: 'capacity', label: 'Объем' },
  { id: 'price', label: 'Цена за единицу, руб' },
  { id: 'summa', label: 'Сумма' },
];

const data = [
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
  { 
    'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'unit': 'Квадраты',
    'capacity': '318. 00',
    'price': '3 758, 89',
    'summa': '3 758, 89',
  },
];

const address = '"Пешеходная" Аллея вязо (ЗелАО)';

const CostWorks = () => {
  return(
    <Grid container>
      <Grid xs={3}></Grid>
      <Grid xs={9} mt={4}>
      <Box 
        sx={{
          display: 'flex',
          marginBottom: 2
        }}>
        <Typography>Адрес проведения работ:&nbsp;</Typography>
        <Typography>{address}</Typography>
      </Box>
        
        <TableContainer component={Paper} sx={{position: 'relative'}}>
          <Table>
            <HeaderTable columns={columns}/>
              {/* <BodyTableSelect data={data}/> */}
              <BodyTable data={data}/>
          </Table>
          <MyPagination />
          <Box 
            sx={{
              position: 'absolute',
              display: 'flex',
              columnGap: 2,
              bottom: '20px',
              right: '20px'
            }}>
            <BasicButton text="Назад"/>
            <BasicButton text="Завершить"/>
          </Box>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default CostWorks