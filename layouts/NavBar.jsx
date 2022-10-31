import {Avatar, Button, Container, Grid, ListItem, Typography} from "@mui/material";
import Link from "next/link";

const navData = [
    {key: 1, text: "Сметы", href: "/smeta"},
    {key: 2, text: "Справочники", href: ""},
]

const NavBar = ({children})=>{
    return(
        <>
            <Container maxWidth={"xl"} sx={{
                background: "#1E2235",
                color: "white",
                height: "12vh"
            }}>
               <Grid container>
                   <Grid xs={10}>
                       <ListItem alignItems="flex-start">
                               {navData.map(item=>(
                                      <Grid ml={3} pt={1.5}>
                                          <Link href={item.href}>
                                              <Typography pt={1} pl={2} sx={{
                                                  "&: hover": {
                                                      background: "#424867",
                                                      height: "6vh",
                                                      width: "120%",
                                                      borderRadius: 2
                                                  }
                                              }}>
                                                  {item.text}
                                              </Typography>
                                          </Link>
                                      </Grid>
                               ))}
                       </ListItem>
                   </Grid>
                   <Grid xs={2} mt={2} container>
                        <Grid>
                            <Avatar/>
                        </Grid>
                        <Grid ml={3} mt={.5}>
                            <Button sx={{
                                background: "#2563EB",
                                color: "white",
                                "&: hover": {
                                    background: "#2563EB",
                                    color: "white",
                                }
                            }}>Выйти</Button>
                        </Grid>
                   </Grid>
               </Grid>
            </Container>
            <Container maxWidth={'xl'} sx={{
                color: "white",
                background: "#171A2B"
            }}>
                {children}
            </Container>
        </>
    )
}

export default NavBar