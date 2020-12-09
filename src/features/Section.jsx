import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: 'Roboto',
        fontSize: 55,
        lineHeight: '60px',
        color: 'white',
        marginTop: 122,
        marginBottom: 0,
        textAlign: 'center',
        fontWeight: "500",
        '&>div': {
            color: 'rgba(255,255,255,0.5)'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            fontSize: 34,
            fontWeight: "bold"
        }
    },
    paragraph: {
        fontFamily: 'Segoe UI',
        fontSize: 26,
        textAlign: 'center',
        maxWidth: 570,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        }
    },
    btn: {
        fontSize: 28,
        fontWeight: 500,
        display: 'block',
        margin: 'auto',
        color: 'white',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
            fontWeight: "normal"
        }
    },
    Grid: {
        backgroundColor: '#232323',
        borderRadius: 12,
        padding: '32px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    GridBox: {
        maxWidth: 442,
        width: '100%'
    },
    GridHeading: {
        fontSize: 40,
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        }
    },
    GridParagraph: {
        fontSize: 18,
        marginTop: 57,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
            marginTop: 10,

        }
    }
}))
function Section(props) {
    const classes = useStyles();
    return (
        <section>
            <div className={classes.heading}>
                Lorem ipsum dolor sit
            <div>
                    amet, consectetur
</div>
            </div>
            <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
        </p>
            <Button className={classes.btn}>
                Sign up for free
        </Button>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12} >
                    <div className={classes.Grid}>
                        <div className={classes.GridBox}>
                            <h3 className={classes.GridHeading}>
                                Lorem ipsum dolor sit
    </h3>
                            <p className={classes.GridParagraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} sm={12} xs={12} >
                    <div className={classes.Grid}>
                        <div className={classes.GridBox}>
                            <h3 className={classes.GridHeading}>
                                Lorem ipsum dolor sit
    </h3>
                            <p className={classes.GridParagraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
}

export default Section;