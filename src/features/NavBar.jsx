import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'
import NavDrewer from '../components/NavDrewer'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: 68,
        },
        [theme.breakpoints.down('sm')]: {
            height: 86,
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: '1200px !important'
        }
    },
    mobilemenu: {
        backgroundColor:'#8C8C8C',
        width:34,
        height:34,
        borderRadius:'50%',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    },
    brand: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: 112,
        [theme.breakpoints.down('sm')]:{
            width:66
        }
    },
    manueCenter: {
        listStyleType: 'none',
        display: 'flex',
        padding: 0,
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        '&>li>a': {
            fontSize: '15px',
            fontWeight: 'bold',
            color: "rgba(255,255,255,0.7)",
            textDecoration: 'none',
            [theme.breakpoints.up('sm')]:{
                marginLeft: 23,
            marginRight: 23
            },
            [theme.breakpoints.down('sm')]:{
                marginLeft: 0,
            marginRight: 0
            }
            
        }
    },
    manueRight: {
        listStyleType: 'none',
        display: 'flex',
        padding: 0,
        margin: 0,
        '&>li>a': {
            fontSize: '15px',
            fontWeight: 'bold',
            color: "rgba(255,255,255,1)",
            textDecoration: 'none',
            [theme.breakpoints.up('sm')]:{
                marginLeft: 23,
            marginRight: 23
            },
            [theme.breakpoints.down('sm')]:{
                marginLeft: 0,
            marginRight: 0
            }
        }
    },
    btn: {
        padding: '10px 13px',
        borderRadius: 25,
        backgroundColor: "rgba(255,255,255,.4)",
        '&:hover': {
            backgroundColor: "rgba(255,255,255,.6)",

        }
    },
    displayMobile:{
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    HideMobile:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))
function NavBar(props) {
    const classes = useStyles();
    const [menuOpt, setmenuOpt] = useState(false);
    const manueOpener = () => {
        setmenuOpt(menuOpt === true ? false : true)
    }
    return (
        <Container fixed className={classes.root}>
             <div onClick={manueOpener} className={classes.mobilemenu}>
                {menuOpt ?<CloseIcon />:<DehazeIcon />}
                {menuOpt?<NavDrewer/>:<></>}
            </div>
            <div className={classes.brand}>
                <img src={logo} width='100%' alt="brandLogo" />
            </div>
                <ul className={classes.manueCenter}>
                    <li>
                        <a href="!#">
                            Enterprise
    </a>
                    </li>
                    <li>
                        <a href="!#">
                            Pricing
    </a>
                    </li>
                    <li>
                        <a href="!#">
                            Blog
    </a>
                    </li>
                    <li className={classes.displayMobile}>
                        <a href="!#">
                            Sign in
    </a>
                    </li>
                </ul>
                <ul className={classes.manueRight}>
                    <li className={classes.HideMobile}>
                        <a href="!#">
                            Sign in
    </a>
                    </li>
                    <li>
                        <a href="!#" className={classes.btn}>
                            Sign up<span className={classes.HideMobile}> for free</span>
    </a>
                    </li>
                </ul>
           
        </Container>
    );
}

export default NavBar;