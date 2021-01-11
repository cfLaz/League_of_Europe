import React from 'react';
//import Aux from '../../Auxilary';
import classes from './new_league.module.css';
import teams from '../../containers/Teams/Teams';
//import Emblem from '../Emblem/Emblem';

import {useDispatch, useSelector} from 'react-redux';
import {select} from '../../store/actions/indexA';

let NewLeague = (props) => {
  
  let loaded = useSelector(state => state.newLeague.loaded);
  
  let dispatch = useDispatch();

  let selectClub= club => dispatch(select(club))
  //let [Preview, setPreview] = useState([]);
/*
  let clubsSelected = (name) =>{
    let arr=[...Preview];
    arr.push(name)
    setPreview(arr)
  } */

 /*  let preview = (event) => {
    setPreview(...Preview, event)
  }   */


  let clubList = Object.values(teams)

  return (
  <div className={loaded ? null : classes.MainDiv}>

    <p>Pick the football clubs you want in your league!</p>

    <div className={classes.Teams}>

      {clubList.map(club => {
        return <img 
                src={club.emblemInfo[0]} 
                alt={club.emblemInfo[1]} 
                title={club.emblemInfo[2]} 
                key={club.emblemInfo[2]}
                onClick={()=>selectClub(club)}
                />
      })}
    </div>

   {/*  <div className={classes.Preview}>
      <p>smrk... 'sup bra'h</p>
    </div> */}

  </div>
  )
}


export default NewLeague;