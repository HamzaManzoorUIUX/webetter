import { Button, Grid, makeStyles, IconButton } from '@material-ui/core';
import React from 'react';
import imgOne from '../assets/images/one.png';
import imgTwo from '../assets/images/two.png';
import imgThree from '../assets/images/three.png';
import BoldImg from '../assets/images/Bold.svg';
import ItalicImg from '../assets/images/italic.svg';
import paperClip from '../assets/images/paper-clip.svg';
import ChatImg from '../assets/images/ChatImg.svg';

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
        marginBottom: 72,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
            marginTop: 10,
            marginBottom: 32,

        }
    },
    GridParagraphTwo: {
        fontSize: 18,
        marginTop: 11,
        marginBottom: 72,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
            marginTop: 10,
            marginBottom: 32,

        }
    },
    flex: {
        display: 'flex'
    },
    circleImg: {
        height: 48,
        width: 48,
        borderRadius: '50%',
        border: '1px solid #D9D9D9',
        opacity: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
        '&>img': {
            height: 34,
            width: 34,
            borderRadius: '50%'
        }
    },
    active: {
        opacity: 1,
        borderColor: '#B2962B'
    },
    FontBtn: {
        border: '1px solid white',
        color: 'white',
        fontSize: 16
    },
    paragraphTwo: {
        padding: 2,
        border: '1px solid #B2962B',
        borderRadius: '4px 0px 4px 4px',
        position: 'relative',
        marginTop: 0,
        marginBottom: 0,
    },
    badge: {
        backgroundColor: '#B2962B',
        height: 14,
        width: 42,
        textAlign: 'center',
        position: 'absolute',
        top: -14,
        right: 0,
        fontSize: 12,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    borderBox: {
        border: '1px solid white',
        borderRadius: 4,

        '&>div.border': {
            padding: 10
        }
    },
    hr: {
        margin: 0
    },
    margin: {
        marginLeft: 9,
        marginRight: 9
    },
    textcenter: {
        textAlign: 'center'
    },
    mt_10: {
        marginTop: '1rem'
    },
    Todo: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 24,
        marginBottom: '1rem'
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
                            <div className={classes.flex}>
                                <div className={`${classes.circleImg} ${classes.active}`}>
                                    <img src={imgOne} alt="imgOne" />
                                </div>
                                <div className={classes.circleImg}>
                                    <img src={imgTwo} alt="imgTwo" />
                                </div>
                                <div className={classes.circleImg}>
                                    <img src={imgThree} alt="imgthree" />
                                </div>
                            </div>
                            <div className={classes.borderBox}>
                                <div className="border">
                                    <Button varient='outlined' className={classes.FontBtn}>
                                        Narmal
                                </Button>
                                    <IconButton aria-label="delete" className={classes.margin} size="small">
                                        <img src={BoldImg} alt="BoldImg" />
                                    </IconButton>
                                    <IconButton aria-label="delete" className={classes.margin} size="small">
                                        <img src={ItalicImg} alt="ItalicImg" />
                                    </IconButton>
                                    <IconButton aria-label="delete" className={classes.margin} size="small">
                                        <img src={paperClip} alt="paperClip" />
                                    </IconButton>
                                </div>
                                <hr className={classes.hr} />
                                <div className="border">
                                    <p className={classes.paragraphTwo}>
                                        <span className={classes.badge}>
                                            Julie
                                </span>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.Grid} ${classes.mt_10}`}>
                        <div className={classes.GridBox}>
                            <h3 className={classes.GridHeading}>
                                Lorem ipsum dolor sit
    </h3>
                            <p className={classes.GridParagraphTwo}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
</p>
                            <div>
                                <div className={classes.Todo}>
                                    <div>
                                        TO DO
    </div>
                                    <div>
                                        IN PROGRESS
    </div>
                                </div>
                                <img src={ChatImg} width='100%' alt="ChatImg" />
                            </div>
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
                            <p className={classes.textcenter}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
</p>
                            <p className={classes.paragraphTwo}>
                                <span className={classes.badge}>
                                    Julie
                                </span>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
}

export default Section;