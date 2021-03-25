import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';

const LeaguesList = () => {
  
  let token = useSelector(state=> state.auth.token);
  const userID = useSelector(state => state.auth.userID);
  let leagueData = [];
  let leagues=[];
  
  const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="'+ userID+'"';
  
  axios.get('/leagues.json'+ queryParams).then(
    response => {
      for(let key in response.data){
        leagueData.push(response.data[key]);
      }
      
      for(let i=0; i<leagueData.length; i++){
        leagues.push( Object.entries(leagueData[i])[0] )
      } 
      //console.log(leagues); -> [ ['leagueName',{...}], [same]]
    }).catch(
      err => console.log(err))
 
  const extractLeagueNames=(array)=> {
    let names=[];
    for(let el of array){
      names.push(<li>{el[0]}</li>);
    }
    console.log(names);
    return names;
  }
  
  return(
    <ul>{extractLeagueNames(leagues)}</ul>
  );
}

export default LeaguesList;

  /* const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="'+ userID+'"';
//curl 'https://dinosaur-facts.firebaseio.com/dinosaurs.json?orderBy="$key"&startAt="a"&endAt="m"&print=pretty'

  axios.get('/leagues.json'+ queryParams).then(
    response => {console.log(response)} )
    .catch(err => console.log(err)) */