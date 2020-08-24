import * as React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';


export function Skills () {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
        {'SKILLS / TECHNOLOGIES'}      
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
    }
  }),
);
