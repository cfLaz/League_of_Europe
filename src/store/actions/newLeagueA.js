import axios from '../../axios';


export const Loading =() =>{
  return{type: 'LOAD_NEW_LEAGUE'} 
};

export const unload =() =>{
  return {type: 'UNLOAD_NEW_LEAGUE'}
};

export const clear =() =>{
  return {type: 'CLEAR_SELECTED_CLUBS'}
};

export const select =(club) =>{
  return {
    type: 'SELECT',
    selectedClub: club
  }
};

export const remove=(club)=> {
  return{
    type: 'REMOVE_CLUB',
    removedClub: club
  }
}
export const start =(league,token,userID)=> {

  return{
    type: 'START_NEW_LEAGUE',
    league: league,
    token: token,
    userID: userID,
  }
}

export const submitted=(token, userID)=>{
  return{
    type: 'NEW_LEAGUE_SUBMITTED',
    token: token,
    userID: userID,
  }
}

export const limit =() =>{
  return{
      type: 'LIMIT_REACHED'
    }
}

export const showMenu=()=>{
  return{
    type: 'SHOW/HIDE_MENU',
  }
}

export const gotError=(error)=>{
  return {
    type: 'GOT_ERROR',
    error: error,
  }
}