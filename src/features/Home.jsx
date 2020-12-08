import React from 'react';
import NavBar from './NavBar';
import { Container, makeStyles } from "@material-ui/core";
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
        <Container fixed className={classes.root} >
Hamza
        </Container>
        </>
    );
}

export default Home;