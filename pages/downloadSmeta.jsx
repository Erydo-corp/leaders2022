import {useState} from "react";
import {Box, Button, Container, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";
import StepList from "../components/StepList";
import DownloadForm from "../components/DownloadForm";

const steps = [
    {key: 1, text: "Загрузка сметы"},
    {key: 2, text: "Определение СПГЗ"},
    {key: 3, text: "Стоимость работ"},
]

const DownloadSmeta = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container>
            <Grid xs={2.5}>
                <StepList activeStep={activeStep}
                          steps={steps}
                          handleBack={handleBack}
                          handleReset={handleReset}
                          handleNext={handleNext}/>
            </Grid>
            <Grid xs={4}>
                <DownloadForm/>
            </Grid>
        </Grid>
    );
}

export default DownloadSmeta