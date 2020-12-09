import { makeStyles, Button, Container, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import textImg from '../assets/images/Text.svg'
import textImgRight from '../assets/images/textRight.svg'
import MyCarosal from '../components/MyCarosal'
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        [theme.breakpoints.up("lg")]: {
            maxWidth: '1200px !important'
        }
    },
    heading: {
        fontFamily: 'Roboto',
        fontSize: 55,
        lineHeight: '60px',
        color: 'white',
        marginTop: 122,
        marginBottom: 0,
        textAlign: 'center',
        fontWeight: "normal",
        '&>span': {
            color: 'rgba(255,255,255,0.5)'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            fontSize: 34,
            fontWeight: "bold"
        }
    },
    heading2: {
        marginTop: 20,
        marginBottom: 0,
        fontSize: 28,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 34,
            fontSize: 20,

        }
    },
    btn: {
        backgroundColor: '#8C8C8C',
        color: 'black',
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 1,
        padding: '12px 32px',
        borderRadius: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 48,
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            marginTop: 36,
            fontSize: 16,
            fontWeight: 'regular',

        }
    },
    img: {
        textAlign: "left",
        paddingTop: 38,
        paddingBottom: 30,
        '&>img': {
            maxWidth: 320,
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: "Right",
            paddingTop: 14,
            paddingBottom: 20,
            '&>img': {
                maxWidth: 170,
                width: '100%'
            }

        }
    }
}))

function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <header>
            <Container fixed className={classes.root}>
                <h1 className={classes.heading}>
                    Lorem ipsum dolor sit <span> amet consectetur.</span>
                </h1>
                <h3 className={classes.heading2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
                <Button variant="contained" className={classes.btn}>
                    Sign up for free
        </Button>
                <div className={classes.img}>
                    {matches === false ? <img src={textImg} alt="textImg" width='100%' /> : <img src={textImgRight} alt="textImg" width='100%' />}
                </div>
            </Container>
<MyCarosal/>
        </header>
    );
}

export default Header;