export const loaded =() =>{
  return{
      type: 'LOAD_NEW_LEAGUE',
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

export const load =() =>{
  return{
      
    }
}