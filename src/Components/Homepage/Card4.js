import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import image from '../../Assets/Homepage/logoo.png';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
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
    marginBottom: 0,
  },
});

export default function SimpleCard4() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent style={{ backgroundColor: '#fff' }}>
        <img src={image} alt={image} width= '100%' height='100%'/>
      </CardContent>
    </Card>
  );
}