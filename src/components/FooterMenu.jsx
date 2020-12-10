import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
      borderRadius:0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        display:'none'
    }
  },
  heading: {
    fontSize: 12,
    fontWeight: 500,
color:'white'
  },
  menu: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 500,
    '&>ul':{
        padding:0,
        margin:0,
        listStyleType:'none',
        '&>li':{
paddingTop:5,
paddingBottom:5,
        }
    },
},
menuItem:{
    backgroundColor:'transparent',
    boxShadow:'none',
    borderRadius:0,
    "&>.MuiButtonBase-root":{
        borderBottom:'1px solid white', 
        borderTop:'1px solid white', 
        minHeight:56,
        '& svg':{
            color:'white'
        }
    }

}
}));

export default function FooterMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.menuItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.menu}>
                            <ul>
                                <li>
                                    Lorem
                             </li>
                                <li>
                                    Lorem ipsum dolor
                               </li>
                                <li>
                                    Lorem
                              </li>
                                <li>
                                    Lorem ipsum
                              </li>
                                <li>
                                    API
                             </li>
                                <li>
                                    Lorem
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul>
                        </div>
                       
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.menuItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.menu}>
                            <ul>
                                <li>
                                    Lorem
                             </li>
                                <li>
                                    Lorem ipsum dolor
                               </li>
                                <li>
                                    Lorem
                              </li>
                                <li>
                                    Lorem ipsum
                              </li>
                                <li>
                                    API
                             </li>
                                <li>
                                    Lorem
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul>
                        </div>
                       
        </AccordionDetails>
      </Accordion>
  
      <Accordion  className={classes.menuItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pane13a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.menu}>
                            <ul>
                                <li>
                                    Lorem
                             </li>
                                <li>
                                    Lorem ipsum dolor
                               </li>
                                <li>
                                    Lorem
                              </li>
                                <li>
                                    Lorem ipsum
                              </li>
                                <li>
                                    API
                             </li>
                                <li>
                                    Lorem
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul>
                        </div>
                       
        </AccordionDetails>
      </Accordion>
  
   </div>
  );
}