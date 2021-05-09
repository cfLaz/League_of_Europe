import React from 'react';
// import {useSelector} from 'react-redux';
import classes from './League.module.css';
import Table from '../../components/League/Table';
import Matchweek from '../../components/League/Matchweek';

import {useSelector} from 'react-redux';

const League = () => {
  let token = useSelector(state=> state.auth.token);
  
  if(token)
  return (
    <div className={classes.Div}>
      <Table/>

      <Matchweek/>
    </div>
    )
  else return null;
}

export default League;