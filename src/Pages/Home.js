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
import ButtonLink1 from '../Components/Footer/Important';
import ButtonLink2 from '../Components/Footer/Privacy';
import ButtonLink3 from '../Components/Footer/Cookie';
import ButtonLink4 from '../Components/Footer/DLT';
import ButtonLink5 from '../Components/Footer/Contact';
import Airtel from '../Assets/Homepage/Airtel.png';
import SingleLineImageList from '../Components/Homepage/Imagelist';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
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
        <br/>
        <ButtonLink1/>
        <br/>
        <ButtonLink2/>
        <br/>
        <ButtonLink3/>
        <br/>
        <ButtonLink4/>
        <br/>
        <ButtonLink5/>
        <br/>
        <p>
        <CopyrightIcon/> 2021 Airtel India. All Rights Reserved.
        </p> 
      </footer>
    </React.Fragment>
    
  );
}