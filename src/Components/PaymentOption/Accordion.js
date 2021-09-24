import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormPropsTextFields from './Inputform';
import image from '../../Assets/Payment/Creditcard.png'
import image2 from '../../Assets/Payment/Net.png'
import image3 from '../../Assets/Payment/UPI.png'
import image4 from '../../Assets/Payment/Wallet.png'
import CustomizedAccordions from './NetbankingAccordion';
import CustomizedAccordions1 from './UPIAccordion';
import CustomizedAccordions2 from './Wallets';
import ContainedButton from './MakePayment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img src={image} alt={image} align="left"/>
          <Typography className={classes.heading}>Credit/Debit/ATM Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormPropsTextFields/>
          <div/>
          <ContainedButton/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <img src={image2} alt={image2} align="left"/>
          <Typography className={classes.heading}>Net Banking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomizedAccordions/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <img src={image3} alt={image3} align="left"/>
          <Typography className={classes.heading}>UPI</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CustomizedAccordions1/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <img src={image4} alt={image4} align="left"/>
          <Typography className={classes.heading}>Wallets</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CustomizedAccordions2/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}