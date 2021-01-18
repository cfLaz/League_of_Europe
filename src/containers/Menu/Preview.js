import React from 'react';
import classes from './Preview.module.css';
//import NewLeague from '../../components/new league/new_league';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';


const Preview = () => {

  let clubs = useSelector(state => state.newLeague.selectedClubs)

  let dispatch = useDispatch();
  let removeClub= club => dispatch(actions.remove(club))
  let unload = ()=> dispatch(actions.unload())
  let clearClubs = ()=> dispatch(actions.clear())

  //let switchIt = () => dispatch(actions.loaded());

  let preview = clubs.map(club => {
    return <div>
            <img
            src={club.emblemInfo[0]} 
            alt={club.emblemInfo[1]} 
            title={club.emblemInfo[2]} 
            key={club.emblemInfo[1]}
            onClick={()=>removeClub(club)}
          /> <p>{club.emblemInfo[1]}</p> 
          </div>
  })


  return(
    <div className={classes.Preview}>
      <button className={classes.BackButtons}
        onClick={()=>unload()}>
        Go back
      </button>
      <button className={classes.BackButtons}
        onClick={()=> clearClubs()}>
        Clear
      </button>

      {preview}
      <button>Start the League of Europe!</button>
    </div>
  );
};

export default Preview;
