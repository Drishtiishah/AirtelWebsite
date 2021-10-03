import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BasicTabs from '../Components/Homepage/Tabmenu';
import SwipeableTextMobileStepper from '../Components/Homepage/Stepper';
import SimpleCard1 from '../Components/Homepage/Card1';
import SimpleCard2 from '../Components/Homepage/Card2';
import SimpleCard3 from '../Components/Homepage/Card3';
import SimpleCard4 from '../Components/Homepage/Card4';
import SimpleCard5 from '../Components/Homepage/Card5';
import ButtonLink from '../Components/Homepage/BacktoHome';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Airtel from '../Assets/Homepage/Airtel.png';
import SingleLineImageList from '../Components/Homepage/Imagelist';
import ContainedButtons from '../Components/Footer/Important';
import ContainedButtonsP from '../Components/Footer/Privacy';
import ContainedButtonsC from '../Components/Footer/Cookie';
import ContainedButtonsD from '../Components/Footer/DLT';
import ContainedButtonsCU from '../Components/Footer/Contact';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <br/><br/><br/><br/>
        <img src={Airtel} alt="airtel"/>
        <br/>
        <BasicTabs/>  
        <br/>
        <SwipeableTextMobileStepper/>
        <br/>
        <SimpleCard1/>
        <br/>
        <SimpleCard2/>
        <br/>
        <SimpleCard3/>
        <br/>
        <SimpleCard4/>
        <br/>
        <Typography variant="h5" component="h2">
          Entertainment
        </Typography>
        <br/>
        <SingleLineImageList/>
        <br/>
        <SimpleCard5/>
        <br/>
        <ButtonLink/>
        <br/>
        </Container>


        <footer className="App-footer">
        <br/>
        <FacebookIcon/>
        <LinkedInIcon/>
        <TwitterIcon />
        <YouTubeIcon />
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