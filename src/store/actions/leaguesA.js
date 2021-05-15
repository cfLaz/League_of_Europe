export let getLeagues = (token, userID) => {
  //console.log('getLeagues');
  return {
    type: 'GET_LEAGUES',
    token: token,
    userID: userID,
  }
}

export const gotLeagues = (leagues)=> {
  console.log('got leagues action:', leagues);
  return{
    type: 'GOT_LEAGUES',
    leagues: leagues,
    //path: '/leagues',
  }
}

export const didNotGetLeagues = (error) => {
  return{
    type: 'COULD_NOT_GET_LEAGUES',
    error: error,
  }
}

export const loading=()=> {return {type: 'LOADING'}}

export const showLeaguesList=()=>{return {type: 'SHOW_LEAGUES_LIST'}};
export const hideLeaguesList=()=>{return {type: 'HIDE_LEAGUES_LIST'}};


export const selectLeague=(league) => {
  console.log('selected league that will update currentLeague', league)
  return{
    type: 'SELECTED_LEAGUE',
    league: league,
  }
}

export const UpdateStats=(stats, key, name, schedule,theToken, theUserID) =>{
  
  //console.log('token: ', theToken, '\n userID:', theUserID );
  return {
    type: 'UPDATE_STATS',
    stats: stats,
    key: key,
    name: name,
    schedule: schedule,
    token: theToken,
    userID: theUserID,

  } 
}
export const updateCurrentLeague=()=> {
  return {type: 'UPDATE_CURRENT_LEAGUE'}
}


export const MWplayed=()=> {return {type: 'MATCHWEEK_PLAYED'}}

export const deleteLeague=(leagueKey, token)=> {
  return{
    type: 'DELETE_LEAGUE',
    leagueKey: leagueKey,
    token: token,
  }
}