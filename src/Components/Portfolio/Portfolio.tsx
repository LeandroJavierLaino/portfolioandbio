import * as React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

export function Portfolio () {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      {'PORTFOLIO'}
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        margin:5,
    }
  }),
);
