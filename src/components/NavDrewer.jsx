import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    roor: {
        position: 'relative',

    },
    mobileMenu: {
        position: 'absolute',
        top: 86,
        left: 0,
        right: 0,
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        backgroundColor: '#181818',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 34,
        fontWeight: 'bold',
        '&>li':{
            margin:'21.5px 24px'
        }
    }
}))
function NavDrewer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ul className={classes.mobileMenu}>
                <li>
                    Enterprise
    </li>
                <li>
                    Pricing
    </li>
                <li>
                    Blog
    </li>
                <li>
                    Sign In
    </li>
            </ul>
        </div>
    );
}

export default NavDrewer;