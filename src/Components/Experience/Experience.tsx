import React from 'react';
import {
    Paper,
    Typography,
    makeStyles,
    Theme,
    createStyles,
    Stepper,
    Step,
    StepButton
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

const Experience = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = React.useState<number>(0);
    const [completed, setCompleted] = React.useState(new Set<number>());

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const isStepComplete = (step: number) => {
        return completed.has(step);
    };

    return (
        <Paper>
            <Typography className={classes.title} variant="h5">
                {t('Experience') + 'aaaa'}
                <Stepper alternativeLabel nonLinear activeStep={0}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const buttonProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepButton
                                    onClick={handleStep(index)}
                                    completed={isStepComplete(index)}
                                    {...buttonProps}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
            </Typography>
        </Paper>
    );
};

export default Experience;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: 5,
            padding: 5
        },
        title: {
            marginLeft: theme.spacing(2)
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    })
);
