import {Button, MenuItem, Container, FormControl, Grid, Input, Box, InputBase, TextField, Typography, Select} from "@mui/material";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 45,
    height: 24,
    borderRadius: '12px',
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 24,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 1,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 23,
      height: 23,
      borderRadius: '50%',
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
}));

const task = [
    {id: 1, taskName: 'Какое-то наименовавние ТЗ 1'}, 
    {id: 2, taskName: 'Какое-то наименовавние ТЗ 2'},
];

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
            <Grid container rowGap={4}>

                <Grid xs={12}>
                 <Box 
                    sx={{
                        width: '60%', 
                        height: 'auto', 
                        border: '2px solid #424867', 
                        borderRadius: '8px',
                    }}>
                    <label htmlFor="upload">
                        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <input
                            style={{ display: "none" }}
                            id="upload"
                            name="upload"
                            type="file"
                            />
                            <Button variant="contained" component="span" 
                            sx={{
                                borderBottomLeftRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: '8px',
                                borderBottomRightRadius: '8px',
                            }}>
                                Выбрать файл
                            </Button>
                            <Typography 
                            sx={{
                                 position: 'absolute',
                                 left: 15,
                                 color: 'rgba(220, 222, 243, 0.5)',
                                 fontSize: '14px',
                                 }}>
                                 Файл сметы
                            </Typography>
                        </Box>
                    </label>
                 </Box>
                </Grid>

                <Grid xs={12}>
                    {/* <Input type={"checkbox"} sx={{
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
                    }}/> */}
                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                        <Typography>Шаблон ТЗ</Typography>
                            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>КПГЗ</Typography>
                    </Stack>
                    <FormControl sx={{width: '60%'}}>
                        <Select 
                        sx={{
                            width: '100%',
                            border: '2px solid #424867',
                            borderRadius: '8px',
                            height: '42px',
                        }}>
                            {task.map((item) => (
                                <MenuItem key={item.id}>{item.taskName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid xs={12}>
                      <Input type={"text"}
                             placeholder={"Адрес работ"}
                             id={"input_file"}
                             sx={{
                                 color: "white",
                                 border: "2px solid #424867",
                                 borderRadius: '8px',
                                 width: "60%",
                                 paddingLeft: 2,
                                 paddingBottom: .5,
                                 paddingTop: .5,
                                 fontSize: '14px',
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
                               border: "2px solid #424867",
                               borderRadius: '8px',
                               width: "60%",
                               paddingLeft: 2,
                               paddingBottom: .5,
                               paddingTop: .5,
                               fontSize: '14px',
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



{/* <FormControl fullWidth>
                  <Select
                    id='spgz'
                    name='spgz'
                    value={spgz}
                    onChange={handleChange}
                  >
                    {row['spgz'].map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
                  </Select>
                </FormControl> */}