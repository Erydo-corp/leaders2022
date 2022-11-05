import {Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import { TableContainer, Table, Paper } from "@mui/material";
import { HeaderTable } from "../components/tables/HeaderTable";
import { BodyTable } from "../components/tables/BodyTable";
import { MyPagination } from "../components/tables/MyPagination";


const columns = [
    { id: 'number', label: '№' },
    { id: 'ID', label: 'ID' },
    { id: 'kpgz', label: 'КПГЗ' },
    { id: 'spgz', label: 'СПГЗ' },
    { id: 'unit', label: 'Единица измерения' },
    { id: 'capacity', label: 'Объем' },
    { id: 'price', label: 'Цена за единицу, руб' },
    { id: 'summa', label: 'Сумма' },
    { id: 'address', label: 'Адрес' },
];

const data = [
    { 'number': '1',
      'ID': 1234,
      'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
      'unit': 'Квадраты',
      'capacity': '318. 00',
      'price': '3 758, 89',
      'summa': '1 195 234, 00',
      'address': '"Пешеходна "Аллея вязо (ЗелАО)',
    },
    { 'number': '1',
      'ID': 1234,
      'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
      'unit': 'Квадраты',
      'capacity': '318. 00',
      'price': '3 758, 89',
      'summa': '1 195 234, 00',
      'address': '"Пешеходна "Аллея вязо (ЗелАО)',
    },
    { 'number': '1',
      'ID': 1234,
      'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
      'unit': 'Квадраты',
      'capacity': '318. 00',
      'price': '3 758, 89',
      'summa': '1 195 234, 00',
      'address': '"Пешеходна "Аллея вязо (ЗелАО)',
    },
    { 'number': '1',
      'ID': 1234,
      'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
      'unit': 'Квадраты',
      'capacity': '318. 00',
      'price': '3 758, 89',
      'summa': '1 195 234, 00',
      'address': '"Пешеходна "Аллея вязо (ЗелАО)',
    },
    { 'number': '1',
      'ID': 1234,
      'kpgz': '02.03.03.11 ОБУСТРОЙСТВ ПОКРЫТИЙ И ЭЛЕМЕНТОВ СОПРЯЖЕНИЯ ТЕРРИТОРИЙ',
      'spgz': 'Устройство из резиновой в рамках благоустройств территории',
      'unit': 'Квадраты',
      'capacity': '318. 00',
      'price': '3 758, 89',
      'summa': '1 195 234, 00',
      'address': '"Пешеходна "Аллея вязо (ЗелАО)',
    },
];

const Smeta = () => {
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
                    Сметы
                </Typography>
            </Grid>
            <Grid mt={5}>
                <Link href="/downloadSmeta">
                    <Button sx={{
                        background: "#2563EB",
                        color: 'white',
                        "&: hover": {
                            background: "#2563EB",
                            color: "white",
                        }
                    }}>
                        Загрузить смету
                    </Button>
                </Link>
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

export default Smeta