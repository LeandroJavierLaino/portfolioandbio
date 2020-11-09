import React from 'react';
import clsx from 'clsx';
import {
    Paper,
    Typography,
    makeStyles,
    Theme,
    createStyles,
    Stepper,
    Step,
    StepButton,
    Button,
    MobileStepper,
    StepLabel,
    StepIconProps,
    Card,
    CardContent,
    CardHeader,
    Avatar
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

function getSteps() {
    return [
        'Ecosistemas - Pernod Ricard Argentina',
        'Ecosistemas - Monsanto Argentina',
        'Ecosistemas - Monsanto Argentina',
        'UTN - FRBA',
        'Ecosistemas - Bayer Argentina',
        'Khem Labs'
    ];
}

const getStepContent = (step: number) => {
    switch (step) {
        case 0:
            return 'pernodSupportContent';
        case 1:
            return 'monsantoSupportContent';
        case 2:
            return 'monsantoSysadminContent';
        case 3:
            return 'utnHelperContent';
        case 4:
            return 'bayerSysadminContent';
        case 5:
            return 'khemLabsDeveloperContent';
        default:
            return 'unkownStep';
    }
};

const getStepDates = (step: number) => {
    switch (step) {
        case 0:
            return 'pernodSupportDate';
        case 1:
            return 'monsantoSupportDate';
        case 2:
            return 'monsantoSysadminDate';
        case 3:
            return 'utnHelperDate';
        case 4:
            return 'bayerSysadminDate';
        case 5:
            return 'khemLabsDeveloperDate';
        default:
            return 'unkownStep';
    }
};

const getStepPosition = (step: number) => {
    switch (step) {
        case 0:
            return 'pernodSupportPosition';
        case 1:
            return 'monsantoSupportPosition';
        case 2:
            return 'monsantoSysadminPosition';
        case 3:
            return 'utnHelperPosition';
        case 4:
            return 'bayerSysadminPosition';
        case 5:
            return 'khemLabsDeveloperPosition';
        default:
            return 'unkownStep';
    }
};

const QontoStepIcon = (props: StepIconProps) => {
    const classes = useStyles();
    const { active } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active
            })}
        >
            <div className={classes.circle} />
        </div>
    );
};

const Experience = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const newContentPosition = getStepContent(activeStep);
    const newDatePosition = getStepDates(activeStep);
    const newPosition = getStepPosition(activeStep);

    return (
        <Paper>
            <Typography className={classes.title} variant="h5">
                {t('Experience')}

                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepButton onClick={handleStep(index)}>
                                    <StepLabel
                                        StepIconComponent={QontoStepIcon}
                                    >
                                        {label}
                                    </StepLabel>
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
                <Card>
                    <CardHeader
                        avatar={<Avatar src=""></Avatar>}
                        title={steps[activeStep]}
                    />
                    <CardContent>
                        <Typography
                            variant="subtitle1"
                            className={classes.instructions}
                        >
                            {t(newPosition)}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.instructions}
                        >
                            {t(newDatePosition)}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.instructions}
                        >
                            {t(newContentPosition)}
                        </Typography>
                    </CardContent>
                </Card>
                <MobileStepper
                    steps={steps.length}
                    variant="dots"
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            disabled={activeStep === steps.length - 1}
                            size="small"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {t('next')}
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            size="small"
                            className={classes.button}
                        >
                            <KeyboardArrowLeft />
                            {t('back')}
                        </Button>
                    }
                />
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
        },
        button: {
            marginRight: theme.spacing(1)
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        circle: {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor'
        },
        root: {
            color: '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center'
        },
        active: {
            color: '#784af4'
        }
    })
);
