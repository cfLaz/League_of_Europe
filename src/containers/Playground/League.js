import React from 'react';
// import {useSelector} from 'react-redux';
import classes from './League.module.css';
import Table from '../../components/League/Table';
import Matchweek from '../../components/League/Matchweek';
import {useSelector} from 'react-redux';

const League = () => {
  let token = useSelector(state=> state.auth.token);
  /* let currentLeague = useSelector(state=> state.leagues.currentLeague); */

 /*  let fireworks=null;
  if(currentLeague[2].currentMatchweek ===39) {
    fireworks = 
    <div className={classes.pyro}>
        <div className={classes.before}></div>
        <div className={classes.after}></div>
    </div>
  }
 */
  if(token)
  return (
    <div className={classes.Div}>
      <Table/>
      {/* {fireworks} */}
      <Matchweek/>
    </div>
    )
  else return null;
}

export default League;