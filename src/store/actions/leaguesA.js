import axios from '../../axios';
//import {Redirect} from 'react-router-dom';

export let getLeagues = (token, userID) => {
  //might wwanna include something for "loading"
  let leagueData = []; //contains objects that have league and userID
  let leagues=[]; //each element is an array which has 2 elemeents, league name and league clubs.
  const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="'+ userID+'"';
  return dispatch => {
    
    return axios.get('/leagues.json'+ queryParams).then(
      response => {
        console.log(response);
        let keys=[];
        for(let key in response.data){
          leagueData.push(response.data[key]);
          keys.push(key);
        }
        console.log('getLeagues', leagueData); //Array which holds objects (league, schedule), userID nad winner(later)

        if(leagueData.length===0) {
          alert("You don't have any leagues yet")
          return;
        }
        else{
          for(let i=0; i<leagueData.length; i++){
            let structure = Object.entries(leagueData[i]);
            let league= structure[0]; // ['leagueName', {} ];
            league.push(structure[1][1]); //adding schedule
            league.push(keys[i]); //adding league key
            if(structure[3]){
              league.push(structure[3][1]) //adding winner
            }
  
            leagues.push(league);
          }
         // leagues => ['leagueName', {Liverpool: {...} }, {mw1:[]}]
          dispatch(gotLeagues(leagues));
        }
      }).catch(
          err => {
            console.log(err);
            dispatch(didNotGetLeagues(err));
          })
  }
}

const gotLeagues = (leagues)=> {
  console.log('got leagues action:', leagues);
  return{
    type: 'GOT_LEAGUES',
    leagues: leagues,
    //path: '/leagues',
  }
}

const didNotGetLeagues = (error) => {
  return{
    type: 'COULD_NOT_GET_LEAGUES',
    error: error,
  }
}

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


/* export const leagueFinished=()=>{

} */

/* export const declareWinner=(team)=>{
  return{
    type: 'WE_HAVE_A_WINNER',
    winner: team,
  }
} */

export const MWplayed=()=> {return {type: 'MATCHWEEK_PLAYED'}}
