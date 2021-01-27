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
  return{
    type: 'START_NEW_LEAGUE',
    new_league: league
  }
}

export const load =() =>{
  return{
      
    }
}