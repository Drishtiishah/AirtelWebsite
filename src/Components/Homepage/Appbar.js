import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeskTabs from './Tabs';
import { Grid } from '@material-ui/core';
import Airtel from '../../Assets/Homepage/Airtell.png'
import { Container } from '@material-ui/core';
import DeskCenteredTabs from './Tabs';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import {Link, Router} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundcolor: '#ffffff',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
   
  },
  Phone: {
    padding: 11,
   
  },
}));

export default function DeskMenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   
    <div className={classes.root}>
      <AppBar position="static" color = '#ffffff'>
        <Toolbar>
        <Link to={process.env.PUBLIC_URL + '/home'}>
        <img src={Airtel} height="65px" width="150px" />
        </Link>
          <Grid container spacing={-8}>
          <Grid item md={12} lg={12} xl={12}>
          </Grid>
          </Grid>
          {auth && (
            <div>
                <Grid container spacing={5}>
                <Grid item md={2} lg={2} xl={2}>
                 <PhoneAndroidIcon className={classes.Phone}
                 style={{color:'#CC011B'}}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </PhoneAndroidIcon >
              </Grid>
              <Grid item md={2} lg={2} xl={2}>
              <IconButton style={{color:'#CC011B'}}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Grid>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              </Grid>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
    
  );
}