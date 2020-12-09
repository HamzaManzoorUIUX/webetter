import React from 'react';
import NavBar from './NavBar';
import { Container, makeStyles } from "@material-ui/core";
import Header from './Header';
import Section from './Section';
const useStyles=makeStyles((theme)=>({
    root:{
        [theme.breakpoints.up("lg")]:{
            maxWidth:'1200px !important'
        }
    }
}))

function Home(props) {
    const classes=useStyles();
    return (
        <>
        <NavBar/>
        <Header/>
        <Container fixed className={classes.root} >
<Section/>
        </Container>
        </>
    );
}

export default Home;