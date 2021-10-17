import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Link1 from './Link1';
import Link2 from './Link2';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(2)',
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
      <CardContent>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Typography variant="h5" component="h2">
          Thank You!
        </Typography>
        <br/>
        <br/>
        <CheckIcon fontSize="large" style={{ fontSize: 180 , color:'#CC011B' }} color="secondary"/>
        <br/>
        <br/>
        <Typography className={classes.pos} color="textSecondary">
          We received your payment Successfully
        </Typography>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link1/>
        <br/>
        <Link2/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </CardContent>
    </Card>
  );
}