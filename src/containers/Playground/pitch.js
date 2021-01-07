import React from 'react';
import './pitch.module.css';
import classes from './pitch.module.css';
import NewLeague from '../../components/new league/new_league';

let Pitch =() => {
  return (
    <main className={classes.Pitch}>
      <NewLeague/>
      
    </main>
  )
}

export default Pitch;