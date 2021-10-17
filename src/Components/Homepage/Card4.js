import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image from '../../Assets/Homepage/logoo.png';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
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

export default function SimpleCard4() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent style={{ backgroundColor: '#8e0202' }}>
        <br/>
        <img src={image} alt={image} width= '10%' height='10%' align='left' />
        <Typography variant="h5" component="h2" style={{color:'white'}}>
         Open an Airtel Money Wallet
        </Typography>
        <Typography className={classes.title}  style={{color:'white'}} gutterBottom>
         And get upto 40% cashback
        </Typography>
      </CardContent>
    </Card>
  );
}