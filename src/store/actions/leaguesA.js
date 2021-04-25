import axios from '../../axios';
//import {Redirect} from 'react-router-dom';
//import { useSelector } from 'react-redux';

export const getLeagues = (token, userID) => {
  //might wwanna include something for "loading"
  let leagueData = []; //contains objects that have league and userID
  let leagues=[]; //each element is an array which has 2 elemeents, league name and league clubs.
  const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="'+ userID+'"';
  return dispatch => {
    
    return axios.get('/leagues.json'+ queryParams).then(
      response => {
        //console.log(response);
        let keys=[];
        for(let key in response.data){
          leagueData.push(response.data[key]);
          keys.push(key);
        }
        //console.log(leagueData); //Array which holds objects (league, schedule) and userID
        for(let i=0; i<leagueData.length; i++){
          let sctructure = Object.entries(leagueData[i]);
          let league= sctructure[0]; // ['leagueName', {} ];
          league.push(sctructure[1][1]); //adding schedule
          league.push(keys[i]);

          leagues.push(league);
        }
       // leagues => ['leagueName', {Liverpool: {...} }, {mw1:[]}]
        dispatch(gotLeagues(leagues));
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

export const UpdateStats=(stats, key, name, schedule/* token, userID */) =>{

  //let token = useSelector(state=> state.auth.token)
  //const userID = useSelector(state => state.auth.userID);
  
    axios.put(`/leagues/${key}/${name}.json`, stats)
    .then(response => {
      console.log(response);
      //dispatch(getLeagues(token,userID));
    }).then(
      ()=>{
        console.log(schedule);
        axios.put(`/leagues/${key}/schedule.json`,schedule);
      }
    ).catch(
        error=> console.log(error)
      );
  
  
   return {
    type: 'UPDATE_STATS',
  } 
}
//export const updateSchedule=()



export const MWplayed=()=> {return {type: 'MATCHWEEK_PLAYED'}}
