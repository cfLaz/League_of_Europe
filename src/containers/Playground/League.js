import React from 'react';
import {useSelector} from 'react-redux';

const League = () => {
  let leagueName = useSelector(state => state.leagues.currentLeague[0]);


  return (
    <div>
      <h2>{leagueName}</h2>


    </div>
    )
}

export default League;