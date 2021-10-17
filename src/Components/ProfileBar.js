import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FormGroup from '@mui/material/FormGroup';
import image from './../Assets/Homepage/Logo.png';
import { pink } from '@mui/material/colors';
import SwipeableTemporaryDrawer from './Homepage/Drawer';


export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [setAnchorEl] = React.useState(null);

  // eslint-disable-next-line no-unused-vars

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        
         
      </FormGroup>
      <AppBar position="static" color="default">
        <Toolbar>
        <IconButton style={{color:'#CC011B'}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            fontSize="large"
            sx={{ color: pink[700] }}
            
          >
            <SwipeableTemporaryDrawer/>
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={image} alt={image} height="65px" width="150px"/>
          </Typography>
          {auth && (
            <div>
              <IconButton style={{color:'#CC011B'}}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                fontSize="large"
              >
                <PersonOutlineOutlinedIcon sx={{ color: pink[700] }} />
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}