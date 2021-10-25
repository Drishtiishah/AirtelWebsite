import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SimpleAccordion from './SummaryAccordion';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ backgroundColor: '#8e0202' }}>
      <Grid container spacing={3}>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={3}>
        <Typography className={classes.title} style={{color:'white'}} gutterBottom>
          Postpaid Bill | 93211112989
        </Typography>
        </Grid>

      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Typography className={classes.title} style={{color:'white'}} gutterBottom>
         ₹399
        </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SimpleAccordion align={'right'}/>
        </Grid>
      </Grid>
      </CardContent>
    </Card>

  );
}