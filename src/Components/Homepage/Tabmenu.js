import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputAdornments from './Textfield';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <center>
    <Box sx={{ bgcolor: 'background.paper'}}>
      <AppBar position="relative">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary" 
          variant="fullWidth"
          aria-label="full width tabs example"
          textColor="Secondary"
        >
          <Tab label="Prepaid" style={{ color: '#720001' }} {...a11yProps(0)} />
          <Tab label="Postpaid" style={{ color: '#720001' }} {...a11yProps(1)} />
          <Tab label="DTH" style={{ color: '#720001' }} {...a11yProps(2)} />
          <Tab label="Broadband" style={{ color: '#720001' }} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <InputAdornments/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <InputAdornments/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <InputAdornments/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <InputAdornments/>
        </TabPanel>
        </Grid>
      </SwipeableViews>
    </Box>
    </center>
  );
}
