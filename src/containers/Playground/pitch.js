import React from 'react';
import { useSelector } from 'react-redux';
import './pitch.module.css';
import classes from './pitch.module.css';


let Pitch =(props) => {

  let menu= useSelector(state=> state.newLeague.showMenu);

  return (
    <main className={menu ? classes.Pitch : classes.LargerPitch}>
      {props.children}
    </main>
  )
}

export default Pitch;