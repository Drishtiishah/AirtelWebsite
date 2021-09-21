import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image from '../../Assets/Homepage/AppStore.png'
import image1 from '../../Assets/Homepage/GooglePlay.png'
import image3 from '../../Assets/Homepage/Phone.png'

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

export default function SimpleCard5() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
          <br/>
          <br/>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
         Experience the all new Airtel Thank App
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
         # Airtel Thanks
        </Typography>
        <br/>
        <img src={image3} alt={image3} align="left"/>
        <Typography className={classes.title} color="textSecondary" gutterBottom align="right">
        Get exclusive offers and <br/> account information <br/> at one place
        </Typography>
        <br/>
        <Typography className={classes.title} color="textSecondary" gutterBottom align="right">
        Download Airtel Thanks App on
        </Typography>
        <br/>
        <img src={image} alt={image} />
        <img src={image1} alt={image1} />
        <br/>
        <br/>
        <br/>
      </CardContent>
    </Card>
  );
}