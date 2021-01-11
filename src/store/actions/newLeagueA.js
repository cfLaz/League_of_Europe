export const loaded =() =>{
  return{
      type: 'LOAD_NEW_LEAGUE', // used for unloading too
    }
  
};

export const clear =() =>{
  return {type: 'CLEAR'}
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
    removeClub: club
  }
}

export const load =() =>{
  return{
      
    }
}