import React from 'react';
import './pitch.module.css';
import classes from './pitch.module.css';


let Pitch =(props) => {
  return (
    <main className={classes.Pitch}>
      {props.children}
    </main>
  )
}

export default Pitch;