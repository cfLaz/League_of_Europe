import React from 'react';
// import {useSelector} from 'react-redux';
import classes from './League.module.css';
import Table from '../../components/League/Table';
import Matchweek from '../../components/League/Matchweek';


const League = () => {

  return (
    <div className={classes.Div}>
      <Table/>

      <Matchweek/>
    </div>
    )
}

export default League;