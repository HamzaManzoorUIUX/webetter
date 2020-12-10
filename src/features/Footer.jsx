import React from 'react';
import { Container, makeStyles, Button } from "@material-ui/core";
import person from '../assets/images/Group 4277.svg'
import dribbble from '../assets/images/dribbble.svg'
import twitter from '../assets/images/twitter.svg'
import discord from '../assets/images/discord.svg'
import Ellipse from '../assets/images/Ellipse 7.svg'
import FooterMenu from 'src/components/FooterMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 138,
        backgroundColor: '#232323',
        [theme.breakpoints.down('sm')]: {
            marginTop: 16,
        }
    },
    container: {

        [theme.breakpoints.up("lg")]: {
            maxWidth: '1200px !important'
        }
    },
    Top: {
        display: 'flex',
        minHeight: 293,
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '42px 24px'
        }
    },
    Bottom: {
        display: 'flex',
        minHeight: 410,
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '42px 24px',
            minHeight: 210,
        }
    },
    name: {
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: 14
        }
    },
    description: {
        fontSize: 16,
        fontWeight: 500,
        color: 'white',
        opacity: 0.5,
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: 14
        }
    },
    personDetail: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 288,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    text: {
        fontSize: 24,
        maxWidth: 694,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: 16
        }
    },
    sectionOne: {
        maxWidth: '50%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
        '&>h1': {
            fontSize: 40,
            marginTop: 0,
            marginBottom: 50,
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 24,
                fontSize: 30
            }
        }

    },
    sectionTwo: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '50%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        }
    },
    Button: {
        fontSize: 28,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        }
    },
    menu: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 500,
        opacity: 0.5,
        '&>div': {
            marginBottom: 12,
        },
        '&>ul': {
            padding: 0,
            margin: 0,
            listStyleType: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    copyRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: 24,
        }
    },
    Icons: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 76,
        width: '100%',
        marginRight: 32,
        '&>img': {
            width: 16
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginBottom: 16,
        },

    },
    copyRightText: {
        fontSize: 12,
        fontWeight: 500,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            opacity: 0.5
        },
    },
    Privacy:{
        display:'flex',
        fontSize:12,
        opacity:0.5,
        maxWidth:135,
        width:'100%',
        justifyContent:'space-between'
    }
}))
function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fixed className={classes.container} >
                <div className={classes.Top}>
                    <div className={classes.personDetail}>
                        <img src={person} width='57px' alt="person" />
                        <div>
                            <h3 className={classes.name}>
                                Maria K.
                    </h3>
                            <h6 className={classes.description}>
                                Lorem ipsum dolor sit amet
                    </h6>
                        </div>
                    </div>
                    <div className={classes.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </div>
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.sectionOne}>
                        <h1>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                </h1>
                        <Button className={classes.Button}>
                            Sign up for free
                </Button>
                    </div>
                    <div className={classes.sectionTwo}>
                        <div className={classes.menu}>
                            <div>
                                Resources
                        </div>
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
                        <div className={classes.menu}>
                            <div>
                                About
                        </div>
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
                                    Lorem
                                </li>
                            </ul>
                        </div>
                        <div className={classes.menu}>
                            <div>
                                Support
                        </div>
                            <ul>
                                <li>
                                    Lorem ipsum
                             </li>
                                <li>
                                    Lorem
                              </li>
                                <li>
                                    Lorem
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <FooterMenu />
            <Container fixed className={classes.container} >
                <div className={classes.copyRight}>
                    <div className={classes.Icons}>
                        <img src={twitter} alt="twitter" />
                        <img src={discord} alt="discord" />
                        <img src={dribbble} alt="dribbble" />
                    </div>
                    <div className={classes.copyRightText}>
                        © 2020-2021 Templateondemand.co. All rights reserved.
                </div>
                    <div className={classes.Privacy}>
                        <div>
                            Cookies
                    </div>
                        <img src={Ellipse} alt="Ellipse" />
                        <div>
                            Privacy Policy
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;