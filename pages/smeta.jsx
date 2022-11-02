import {Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import { TableInfo } from "../components/tables/TableInfo";

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
                <TableInfo />
            </Grid>
        </Grid>
  )
}

export default Smeta