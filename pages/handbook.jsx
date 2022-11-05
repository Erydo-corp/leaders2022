import {Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import { TableContainer, Table, Paper } from "@mui/material";
import { HeaderTable } from "../components/tables/HeaderTable";
import { BodyTable } from "../components/tables/BodyTable";
import { MyPagination } from "../components/tables/MyPagination";

const columns = [
    { id: 'ID', label: 'ID' },
    { id: 'name', label: 'Наименование шаблона ТЗ' },
    { id: 'gkpz', label: 'КПГЗ' },
    { id: 'spgz', label: 'Наименнование СПГЗ' },
];

const data = [
    { 'ID': 1234,
      'name': 'Какое-то наименовавние ТЗ',
      'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
    { 'ID': 1234,
      'name': 'Какое-то наименовавние ТЗ',
      'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
    { 'ID': 1234,
    'name': 'Какое-то наименовавние ТЗ',
    'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
    'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
    { 'ID': 1234,
      'name': 'Какое-то наименовавние ТЗ',
      'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
    { 'ID': 1234,
      'name': 'Какое-то наименовавние ТЗ',
      'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
    { 'ID': 1234,
      'name': 'Какое-то наименовавние ТЗ',
      'gkpz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
    },
];


const Handbook = () => {
  return(
        <Grid container>
            <Grid
                ml={10}
                xs={9}
                mt={4}>
                <Typography sx={{
                    fontSize: 35,
                    fontWeight: 600
                }}>
                    Справочник шаблонов
                </Typography>
            </Grid>
            
            <Grid xs={12}>
                {/* Вывод таблицы */}
                <TableContainer component={Paper}>
                    <Table>
                        <HeaderTable columns={columns}/>
                        <BodyTable data={data}/>
                    </Table>
                    <MyPagination />
                </TableContainer>
            </Grid>
        </Grid>
  )
}

export default Handbook