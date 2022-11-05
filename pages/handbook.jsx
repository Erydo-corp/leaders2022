import {Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import { TableContainer, Table, Paper } from "@mui/material";
import { HeaderTable } from "../components/tables/HeaderTable";
import { BodyTable } from "../components/tables/BodyTable";
import { MyPagination } from "../components/tables/MyPagination";

const columns = [
    { id: 1, label: 'ID' },
    { id: 2, label: 'Наименование шаблона ТЗ' },
    { id: 3, label: 'КПГЗ' },
    { id: 4, label: 'Наименнование СПГЗ' },
    { id: 5, label: '' },
    { id: 6, label: '' },
    { id: 7, label: '' },
    { id: 8, label: '' },
    { id: 9, label: '' },
    { id: 10, label: '' },
    { id: 11, label: '' },
];

const data = [
    { ID: 1234,
      name: 'Какое-то наименовавние ТЗ',
      gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
    { ID: 1234,
      name: 'Какое-то наименовавние ТЗ',
      gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
    { ID: 1234,
        name: 'Какое-то наименовавние ТЗ',
        gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
        spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
    { ID: 1234,
        name: 'Какое-то наименовавние ТЗ',
        gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
        spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
    { ID: 1234,
        name: 'Какое-то наименовавние ТЗ',
        gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
        spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
    { ID: 1234,
        name: 'Какое-то наименовавние ТЗ',
        gkpz: '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
        spgz: 'Устройство из резиновой в рамках благоустройств территории',
    },
];


const Handbook = () => {
  return(
        <Grid container>
            <Grid
                xs={12}
                mt={4} ml={10}>
                <Typography sx={{
                    fontSize: 35,
                    fontWeight: 600
                }}>
                    Справочник шаблонов
                </Typography>
            </Grid>
            
            <Grid xs={12} mt={5}>
                {/* Вывод таблицы */}
                <TableContainer component={Paper}>
                    <Table >
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