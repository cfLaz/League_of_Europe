import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/indexA';
//import Teams from '../../containers/Teams/Teams';

let EditStrength = props =>{

  let dispatch = useDispatch();
  let editStrength = (club)=> dispatch(actions.editStrength(club))

  let teamsCopy = JSON.parse(JSON.stringify(props.originalTeams));
  console.log(props.originalTeams);
  let originalValues ={};

  /* function deepFreeze(o) { //didn't help
    Object.freeze(o);
  
    Object.getOwnPropertyNames(o).forEach(function(prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
          deepFreeze(o[prop]);
        }
    });
  
    return o;
  } */

  for(const team in teamsCopy) {
    if(teamsCopy[team].emblemInfo[1] === props.club.emblemInfo[1]){

      originalValues = {
         ATK: teamsCopy[team].ATK,
          MID: teamsCopy[team].MID,
          DEF: teamsCopy[team].DEF,
      }
      break;
    }
  }

  function edit(event, type){ //type is representing the string as it - should - changed this to number
    event.preventDefault();
    let copyOriginalValues = {...originalValues};
    //if something is not a number even after attempted conversion and not null (backspace)
    if( !Number.isInteger( parseInt(event.nativeEvent.data)) && event.nativeEvent.data != null){
      console.log(event.nativeEvent.data);
      event.target.value = copyOriginalValues.ATK;
      return;
    } 
    let value = parseInt(event.target.value);
    
    //console.log(isNaN(value));
    console.log(event.nativeEvent.data);
    console.log('parseint value ',value)
    console.log('original values: ', originalValues);
    //console.log('Teams: ', Teams);
    
    
    /* if(value ==='') {
      value= originalValues.ATK;
      event.target.value = originalValues.ATK
    } */
    if(value > 99 ) {
      value = 99;
      event.target.value = 99;
    }
    else if(value <1 ) {
      value = 1;
      event.target.value = 1;
    }
    else if(value >=1 || value <=99){
      //do nothing
    }
    else {
      value= props.club.ATK;
      event.target.value = props.club.ATK
    }

    for(let club in props.league){
      //console.log(props.league)
      if(props.league[club].emblemInfo[1] === props.club.emblemInfo[1]){
        //console.log(props.league)
         if(value ==='' || isNaN(value)) {
          value= copyOriginalValues.ATK;
          event.target.value = copyOriginalValues.ATK;
        } 

        switch(type){
          case 'attack': 
            //console.log('attack case', event.target);
            props.league[club].ATK = value;
            editStrength(props.league[club]);
            break;
          
          case 'midfield': 
            //console.log('attack case', event.target);
            props.league[club].MID = value;
            editStrength(props.league[club]);
            break;
          
          case 'defence': 
            //console.log('attack case', event.target);
            props.league[club].DEF = value;
            editStrength(props.league[club]);
            break;

          default: return console.log(type); //dis returning for now, WTF
        }
        break;
      }
    }
  }

  return(
    
    <div>
      <label>ATK: <input 
          placeholder={originalValues.ATK}
          //value={attack}
          type='text'
          max='99' min='1'
          onChange={(e)=> edit(e,'attack') }
        />
      </label>

      <label>MID:
      <input 
          placeholder={originalValues.MID}
          //value={attack}
          type='text'
          max='99' min='1'
          onChange={(e)=> edit(e,'midfield') }/>
      </label>

      
      <label>DEF: 
      <input
        placeholder={originalValues.DEF}
        //value={attack}
        type='text'
        max='99' min='1'
        onChange={(e)=> edit(e,'defence') }/>
      </label>
    </div>
  )
}

export default EditStrength;