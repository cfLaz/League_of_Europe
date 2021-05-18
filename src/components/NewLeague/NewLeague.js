import React from 'react';
//import Aux from '../../Auxilary';
import classes from './NewLeague.module.css';
import Teams from '../../containers/Teams/Teams';
import {useDispatch, useSelector} from 'react-redux';
import {select} from '../../store/actions/indexA';

let NewLeague = () => {
  
  let loaded = useSelector(state => state.newLeague.loaded);
  let selectedClubs = useSelector(state=> state.newLeague.selectedClubs)
  let limit = useSelector(state=> state.newLeague.limit)

  let dispatch = useDispatch();

  let selectClub= club => dispatch(select(club))


  let clubList = Object.values(Teams)

  function getRandomNums(quantity, max){
    const arr = []
    while(arr.length < quantity){
      let candidateInt = Math.floor(Math.random() * max)
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return(arr)
  }
  const randomPick=(pickedSoFar)=>{ 
    console.log('random pick');
    let numbers=getRandomNums(20 - pickedSoFar, 50 - pickedSoFar)
    
    for(let i=0; i<(20- pickedSoFar); i++){

      setTimeout(()=>{
        selectClub(clubList[ numbers[i] ]);
      }, 100*i)
    }
  }

  return (
  <div className={loaded ? null : classes.MainDiv}>

    <span className={classes.Paragraphs}>
    <p>Pick the football clubs that you want in your league!</p>
    <p>...or choose them randomly: 
      <button 
        onClick={()=>randomPick(selectedClubs.length)}
        disabled={selectedClubs.length===20}>
        Surprise me!
      </button>
    </p>
    </span>

    <div className={classes.wrapper}>
    <div className={classes.Teams}>

      {clubList.map(club => {
        let team = selectedClubs.includes(club) ? null :(
          limit ?
            <img 
              alt={club.emblemInfo[1]} 
              src={club.emblemInfo[0]} 
              key={club.emblemInfo[2]}
              title={club.emblemInfo[2]}
              className={classes.Disable}             
            /> 
            : 
            <img 
              alt={club.emblemInfo[1]} 
              src={club.emblemInfo[0]} 
              key={club.emblemInfo[2]}
              title={club.emblemInfo[2]}
              onClick={()=>selectClub(club)}    
            /> 
          )
        return team;
      })}
    </div>
    </div>
   {/*  <div className={classes.Preview}>
      <p>smrk... 'sup bra'h</p>
    </div> */}

  </div>
  )
}

export default NewLeague;
