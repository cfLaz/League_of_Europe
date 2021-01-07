import React from 'react';
import classes from './Menu.module.css';
//import NewLeague from '../../components/new league/new_league';
import { useDispatch } from 'react-redux';
import {loaded} from '../../store/actions/indexA';

const Menu = () => {

  let dispatch = useDispatch();

  let loadClubs = () => dispatch(loaded());

  return(
    <aside className={classes.Menu}>
      <ul>
        <li>Your leagues</li>
        <li onClick={loadClubs}>Make a new league</li>
      </ul>
    </aside>
  );
};

export default Menu;


