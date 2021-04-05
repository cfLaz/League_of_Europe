import axios from '../../axios';
//import {Redirect} from 'react-router-dom';

export const getLeagues = (token, userID) => {
  //might wwanna include something for "loading"
  let leagueData = []; //contains objects that have league and userID
  let leagues=[]; //each element is an array which has 2 elemeents, league name and league clubs.
  const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="'+ userID+'"';
  return dispatch => {
    
    return axios.get('/leagues.json'+ queryParams).then(
      response => {
        for(let key in response.data){
          leagueData.push(response.data[key]);
        }
        //console.log(leagueData); Array which holds objects
        for(let i=0; i<leagueData.length; i++){
          leagues.push( Object.entries(leagueData[i])[0] )
        }
       // leagues => ['leagueName', {Liverpool: {...} }]
        dispatch(gotLeagues(leagues));
        /* for(let el of leagues){
          setLeagueNames([...leagueNames, el[0] ] );
        }
        console.log(leagueNames); */
      }).catch(
          err => {
            console.log(err);
            dispatch(didNotGetLeagues(err));
          })
  }
}

const gotLeagues = (leagues)=> {
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
  return{
    type: 'SELECTED_LEAGUE',
    league: league,
  }
}