import { makeStyles } from '@material-ui/core';
import React from 'react';
import Home from './features/Home';

const useStyles=makeStyles(()=>({
  root:{
    backgroundColor:'#181818',
    color:'white',
    fontFamily:'Roboto',
  }
}))
function App(props) {
  const classes=useStyles()
  return (
    <div className={classes.root}>
      <Home/>
    </div>
  );
}

export default App;