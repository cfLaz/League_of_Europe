import React from 'react';
import { useSelector } from 'react-redux';
import './pitch.module.css';
import classes from './pitch.module.css';


let Pitch =(props) => {

  let showSidebar= useSelector(state=> state.newLeague.showMenu);
  let loadedNewLeagueScreen = useSelector(state=> state.newLeague.loaded)

  let pitchClass = classes.SidebarPitch;
  if(loadedNewLeagueScreen){
    pitchClass = classes.Pitch;
  }


  return (
    <main className={showSidebar ? pitchClass : classes.LargerPitch}>
      {props.children}
    </main>
  )
}

export default Pitch;