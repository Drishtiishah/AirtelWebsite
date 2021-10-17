import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SwipeableTextMobileStepper from '../Components/Homepage/Stepper';
import SimpleCard1 from '../Components/Homepage/Card1';
import SimpleCard2 from '../Components/Homepage/Card2';
import SimpleCard3 from '../Components/Homepage/Card3';
import SimpleCard4 from '../Components/Homepage/Card4';
import SimpleCard5 from '../Components/Homepage/Card5';
import ButtonLink from '../Components/Homepage/BacktoHome';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Airtel from '../Assets/Homepage/Airtel.png';
import SingleLineImageList from '../Components/Homepage/Imagelist';
import ContainedButtons from '../Components/Footer/Important';
import ContainedButtonsP from '../Components/Footer/Privacy';
import ContainedButtonsC from '../Components/Footer/Cookie';
import ContainedButtonsD from '../Components/Footer/DLT';
import ContainedButtonsCU from '../Components/Footer/Contact';
import FullWidthTabs from '../Components/Homepage/Tabmenu';
import IconButtons from '../Components/Footer/Icons';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <center>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src={Airtel} alt="airtel" width="80%" height="80%"/>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FullWidthTabs/>  
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SwipeableTextMobileStepper/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SimpleCard1/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <SimpleCard2/>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SimpleCard3/>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SimpleCard4/>
        </Grid>
        
        <Typography variant="h5" component="h2">
          Entertainment
        </Typography>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SingleLineImageList/>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SimpleCard5/>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ButtonLink/>
        </Grid>
        
        </Grid>
        </center>
        </Container>


        <footer className="App-footer">
        <br/>
        <IconButtons/>
        <ContainedButtons/>
        <ContainedButtonsP/>
        <ContainedButtonsC/>
        <ContainedButtonsD/>
        <ContainedButtonsCU/>
        <p>
        <CopyrightIcon/> 2021 Airtel India. All Rights Reserved.
        </p> 
      </footer>
    </React.Fragment>
    
  );
}