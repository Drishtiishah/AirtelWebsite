import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      [theme.breakpoints.up('md')]: {

      margin: theme.spacing(11),
      },
    },
  },
}));


export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="Facebook" style={{color:'white'}} href="https://www.facebook.com/pg/AirtelIndia/community/">
      <FacebookIcon/>
      </IconButton>
      <IconButton aria-label="Linkedin" style={{color:'white'}} href="https://www.linkedin.com/company/airtel/?originalSubdomain=in">
      <LinkedInIcon/>
      </IconButton>
      <IconButton aria-label="Twitter" style={{color:'white'}} href="https://twitter.com/airtelindia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
      <TwitterIcon />
      </IconButton>
      <IconButton aria-label="Youtube" style={{color:'white'}} href="https://youtube.com/c/airtel">
      <YouTubeIcon />
      </IconButton>
    </div>
  );
}
