import * as React from 'react';
import {
    Paper,
    makeStyles,
    Theme,
    createStyles,
    Typography,
    TextField,
    Box,
    IconButton
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export function Contact() {
    const classes = useStyles();
    const { t } = useTranslation();

    const ContactSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        subject: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        message: Yup.string()
            .min(2, 'Too Short!')
            .max(500, 'Too Long!')
            .required('Required')
    });

    return (
        <Paper className={classes.container}>
            <Typography className={classes.title} variant="h5">
                {t('Contact')}
            </Typography>
            <Box className={classes.form}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        subject: '',
                        message: ''
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={(values) => {
                        window.open(
                            `mailto:leanlaino@gmail.com?subject=${values.subject}&body=${values.firstName} ${values.lastName} ${values.message}`
                        );
                    }}
                    validateOnChange={true}
                >
                    {({ handleChange, values }) => (
                        <Form className={classes.form}>
                            <TextField
                                name="firstName"
                                className={classes.input}
                                label={t('firstName')}
                                onChange={handleChange}
                                value={values.firstName}
                            />
                            <ErrorMessage name="firstName" component="div" />

                            <TextField
                                name="lastName"
                                className={classes.input}
                                label={t('lastName')}
                                onChange={handleChange}
                                value={values.lastName}
                            />
                            <ErrorMessage name="lastName" component="div" />

                            <TextField
                                name="email"
                                type="email"
                                className={classes.input}
                                label={t('email')}
                                onChange={handleChange}
                                value={values.email}
                            />
                            <ErrorMessage name="email" component="div" />

                            <TextField
                                name="subject"
                                className={classes.input}
                                label={t('subject')}
                                onChange={handleChange}
                                value={values.subject}
                            />
                            <ErrorMessage name="subject" component="div" />

                            <TextField
                                name="message"
                                className={classes.message}
                                label={t('message')}
                                onChange={handleChange}
                                value={values.message}
                            />
                            <ErrorMessage name="message" component="div" />

                            <IconButton color="primary" type="submit">
                                <SendIcon fontSize="large" />
                            </IconButton>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Paper>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: 5
        },
        title: {
            marginLeft: theme.spacing(2)
        },
        input: {
            margin: 5
        },
        form: {
            margin: 5,
            padding: 5
        },
        message: {
            width: '90%',
            margin: 5
        }
    })
);
