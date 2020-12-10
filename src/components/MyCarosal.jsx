import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../assets/images/1.png'
import two from '../assets/images/2.png'
import three from '../assets/images/3.png'
import Slider from "react-slick";
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  shadow: {
    position: "absolute",
    bottom: '0px',
    top: '0px',
    left: '0px',
    right: '0px',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
    zIndex: 10,
    pointerEvents: 'none',
  },
  carosalDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    '&>img': {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 376,
      width: '100%'
    }
  }
}))
function MyCarosal(props) {
  const [mySetting, setmySetting] = useState({});
  const classes = useStyles();
  const theme = useTheme();
  const matchessm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesmd = useMediaQuery(theme.breakpoints.down('md'));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
const changeMySetting=()=>{
  if (matchessm === false && matchesmd === false&&settings.slidesToShow !== 4) {
    settings.slidesToShow = 4
    
  }
  else if (matchessm === false && matchesmd === true&&settings.slidesToShow !== 3) {
    settings.slidesToShow = 3
  }
  else if (matchessm === true && matchesmd === true&&settings.slidesToShow !== 2) {
    settings.slidesToShow = 2
  }
  setmySetting(settings)

}
  useEffect(changeMySetting, [matchessm, matchesmd])
  return (
    <div className={classes.root}>
      <div className={classes.shadow}>
      </div>
      <Slider {...mySetting}>
        <div className={classes.carosalDiv}>
          <img src={one} alt="one" />
        </div>
        <div className={classes.carosalDiv}>
          <img src={two} alt="two" />
        </div>
        <div className={classes.carosalDiv}>
          <img src={three} alt="three" />
        </div>
        <div className={classes.carosalDiv}>
          <img src={one} alt="one" />
        </div>
        <div className={classes.carosalDiv}>
          <img src={two} alt="two" />
        </div>
        <div className={classes.carosalDiv}>
          <img src={one} alt="one" />
        </div>
      </Slider>
    </div>
  );
}

export default MyCarosal;