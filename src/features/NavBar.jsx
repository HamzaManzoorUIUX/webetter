import React from 'react';
import { Container, makeStyles } from "@material-ui/core";
const useStyles=makeStyles((theme)=>({
    root:{
        [theme.breakpoints.up("lg")]:{
            maxWidth:'1200px !important'
        }
    },
    Navbar:{
        backgroundColor:'#181818',
        [theme.breakpoints.up('sm')]:{
            height:68,
        },
        [theme.breakpoints.down('sm')]:{
            height:86,
        }
    }
}))
function NavBar(props) {
const classes=useStyles()
    return (
        <div className={classes.Navbar}>
            <Container fixed className={classes.root}>
                Hamza
            </Container>
        </div>
    );
}

export default NavBar;