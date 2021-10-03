import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AirtelBlackButton from './Airtelbutton';
import image from '../../Assets/Homepage/image.png'

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
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard3() {
  const classes = useStyles()
  return (
    <Card className={classes.root} style={{flex:1, backgroundColor:'black'}}>
      <CardContent>
        <br/>
        <br/>
        <Typography variant="h2" color="white">
          Black
        </Typography>
        <br/>
        <Typography className={classes.title} color="white" gutterBottom>
          Enjoy first 30 days free of a new service with Airtel Black
        </Typography>
        <br/>
        <AirtelBlackButton/>
        <br/>
        <img src={image} alt={image} width="70%" height="70%"/>
      </CardContent>
      </Card>
  );
}