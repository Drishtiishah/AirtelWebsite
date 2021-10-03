import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './Components/Homepage/Stepper';
import SimpleCard1 from './Components/Homepage/Card1';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12} xs={12}><SwipeableTextMobileStepper>Full Size</SwipeableTextMobileStepper></Grid>
        <Grid item lg={12} xs={12}><SimpleCard1>Full Size</SimpleCard1></Grid>
        </Grid>
    </div>
  );
}
