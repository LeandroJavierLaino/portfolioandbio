import * as React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

export function SocialMedia () {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      {'SOCIAL MEDIA'}
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
