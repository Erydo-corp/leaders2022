import {Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";

//Компонент с отрисовкой шагов

const StepList = ({activeStep, steps}) => {

  return(
      <Box ml={-3} pl={4} mt={3} pt={5}
           sx={{
               maxWidth: "100%",
               background: "#1E2235",
               height: "75vh",
               borderBottomRightRadius: 30,
               borderTopRightRadius: 30
           }}>
          <Stepper activeStep={activeStep} orientation="vertical" color={"white"}>
              {steps.map((step, index) => (
                  <Step key={step.key} >
                      <StepLabel
                          optional={
                              index === 2 ? (
                                  <Typography variant="caption" color={"white"}>Следующий шаг</Typography>
                              ) : null
                          }
                      >
                          <Typography sx={{color: 'white'}}>
                              {step.text}
                          </Typography>
                      </StepLabel>
                  </Step>
              ))}
          </Stepper>
      </Box>
  )
}

// {activeStep === steps.length && (
//               <Paper square elevation={0} sx={{ p: 3 }}>
//                   <Typography>All steps completed - you&apos;re finished</Typography>
//                   <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//                       Reset
//                   </Button>
//               </Paper>
//           )}

export default StepList