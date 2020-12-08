import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("lg")]: {
            maxWidth: '1200px !important'
        }
    },
    Navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: 68,
        },
        [theme.breakpoints.down('sm')]: {
            height: 86,
        }
    },
    mobilemenu: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    brand: {
        width: 112
    },
    mainMenu: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'space-between',

        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    manueCenter: {
        listStyleType: 'none',
        display: 'flex',
        padding:0,
        margin:0,
        '&>li,&>li>a': {
            fontSize: '15px',
            fontWeight: 'bold',
            color: "rgba(255,255,255,0.7)",
            textDecoration:'none',
            marginLeft:23,
            marginRight:23
        }
    },
    manueRight: {
        listStyleType: 'none',
        display: 'flex',
        padding:0,
        margin:0,
        '&>li,&>li>a': {
            fontSize: '15px',
            fontWeight: 'bold',
            color: "rgba(255,255,255,1)",
            textDecoration:'none',
            marginLeft:23,
            marginRight:23
        }
    },
    btn:{
        padding:'10px 13px',
        borderRadius:25,
        backgroundColor: "rgba(255,255,255,.4)",
'&:hover':{
    backgroundColor: "rgba(255,255,255,.6)",

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
        <div className={classes.root}>
            <Container fixed className={classes.Navbar}>
                <div className={classes.brand}>
                    <img src={logo} alt="brandLogo" />
                </div>
                <div className={classes.mainMenu}>
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
                    </ul>
                    <ul className={classes.manueRight}>
                        <li>
                            <a href="!#">
                                Sign in
    </a>
                        </li>
                        <li>
                            <a href="!#" className={classes.btn}>
                                Sign up for free
    </a>
                        </li>
                    </ul>
                </div>
                <div onClick={manueOpener} className={classes.mobilemenu}>
                    {menuOpt ? <DehazeIcon /> : <CloseIcon />}
                </div>
            </Container>
        </div>
    );
}

export default NavBar;