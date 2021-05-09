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
export const start =(league)=> {

  axios.post('/leagues.json', league).then(
    response => console.log(response)).catch(
      error=> console.log(error))
      
  return{
    type: 'START_NEW_LEAGUE',
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