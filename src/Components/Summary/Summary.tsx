import * as React from 'react';
import { Paper, Card, CardHeader, CardContent, Typography, Avatar, Box} from '@material-ui/core';
import leandro from '../../Assets/Images/9620660.jpg'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';

const Summary = () => {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Paper className={classes.container}>
        <Card>
            <CardHeader avatar={<Avatar className={classes.large} alt='Leandro Laiño' src={leandro}/>} title='' subheader={<Paper className={classes.cardData} elevation={3}><Box>{'Leandro Javier Laiño '}</Box>{  t('birthday')}</Paper>}/>
            <CardContent>
                <Typography>
                    {t('summary')}
                </Typography>
            </CardContent>
        </Card>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    container:{
        margin:5,
    },
    cardData:{
        padding:10,
    }
  }),
);

export default Summary;
