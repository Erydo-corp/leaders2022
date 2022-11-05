import {Button, Container, Dialog, Grid, Input, InputBase, Typography} from "@mui/material";
import {Label} from "@mui/icons-material";


const DownloadForm = ({handleBack, handleNext}) => {
    let index = 2
  return (
      <Grid container mt={3} >
      <Container color={"white"}
                 sx={{
                     background: "#1E2235",
                     borderRadius: 2,
                     padding: 5
                 }}>
            <Grid container>
                <Grid>
                    <Input type={"checkbox"} sx={{
                        height: "28px",
                        lineHeight: "28px",
                        marginRight: "10px",
                        position: "relative",
                        fontSize: "14px",
                        userSelect: "none",
                        boxSizing: "border-box",
                        width: "56px",
                        border: "1px solid rgba(0, 0, 0, .1)",
                        borderRadius: "25%/50%",
                        verticalAlign: "top",
                        background: "#eee",
                        transition: ".2s"
                    }}/>
                </Grid>
                <Grid xs={12}>
                      <Input type={"text"}
                             placeholder={"Адрес работ"}
                             id={"input_file"}
                             sx={{
                                 color: "white",
                                 border: "3px solid #252A41",
                                 borderRadius: 3,
                                 width: "60%",
                                 paddingLeft: 2,
                                 paddingBottom: .5,
                                 paddingTop: .5
                      }}/>
                </Grid>
                <Grid xs={12} mt={2}>
                    <Typography mb={1} ml={.2} sx={{
                        fontSize: 15
                    }}>
                        Номер листа в смете
                    </Typography>
                    <Input type={"text"}
                           placeholder={"Введите номера через запятую"}
                           id={"input_file"}
                           sx={{
                               color: "white",
                               border: "3px solid #252A41",
                               borderRadius: 3,
                               width: "60%",
                               paddingLeft: 2,
                               paddingBottom: .5,
                               paddingTop: .5
                           }}/>
                </Grid>
                <Grid xs={12} mt={28} mb={-10} ml={-2.9}>
                    <Container sx={{
                        height: 60,
                        width: "105.2%",
                        background: "#252A41",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Grid xs={5} ml={90} pt={1}>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{background: "#424867",
                                color: "white",
                                borderRadius: 3,
                                "&: hover": {
                                    background: "#424867",
                                    color: "white",
                                }}}>
                                Назад
                            </Button>
                            <Button
                                onClick={handleNext}
                                sx={{background: "#2563EB",
                                color: "white",
                                marginLeft: 2,
                                borderRadius: 3,
                                "&: hover": {
                                    background: "#2563EB",
                                    color: "white",
                                }}}>
                                {index === index - 1 ? 'Отправить' : 'Далее'}
                            </Button>
                        </Grid>
                    </Container>
                </Grid>
                </Grid>
      </Container>
      </Grid>
  )
}

export default DownloadForm