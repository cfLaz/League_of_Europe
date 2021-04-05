


const MWgenerator = (teams) => {
  
  let clubInformation=Object.values(teams);
  let clubNames=[];
  for(const club of clubInformation){
    clubNames.push(club.emblemInfo[0]); 
  }

  let combinations= [];
  for(let name1 of clubNames){
    for(let name2 of clubNames){
      if(name1===name2) continue;
      
      let hasComb = false;
      for(let comb of combinations){
        if(combinations.length === 0) combinations.push( [name1, name2] );
        
        else if( comb[0]===name1 && comb[1]===name2 ) hasComb=true;
      }
      if(!hasComb) combinations.push( [name1, name2] ) 
    }
  }
  //console.log(combinations);
  let schedule ={};
  /* let i=1
  while(i<39){ 
    schedule['matchweek'+i]=[];
    let mw= schedule['matchweek'+i];
    
    for(let c=0; c<combinations.length; c++){
        
      if (mw.length===10) break;

      else if(!mw.length) {
        mw.push(combinations[c]);
        combinations.splice(c,1);  
      } 
      else if (combinations.length===9){
        mw.push([...combinations]);
        combinations.splice(0,9);
        //break;
      }
      else{
        let contains = false;
        for(let mwComb of mw){
          if( combinations[c][0]===mwComb[0] || combinations[c][1]===mwComb[0] || 
              combinations[c][0]===mwComb[1] || combinations[c][1]===mwComb[1]){
                contains = true;
                break;
              } 
        }

        if(!contains) {
          mw.push(combinations[c]);
          combinations.splice(c,1);
        } 
      }
    }

    i++;
  }
  console.log(combinations);
  console.log(schedule);  *///should be return, cl for testing
  let i =1;
  while(i<39){ 
    schedule['matchweek'+i]=[];
    i++;
  }

  //saved for later, don't have the solution for now, will have to use improper schedule
/*   for(let comb of combinations){
    let j=1;
    while(j<39){
      
      let mw = schedule['matchweek'+j];
      if(mw.length===10) {
        j++;
        continue;
      }

      else if(mw.length===0) {
        mw.push(comb);
        break;
      }

      let contains=false;   
      for(let game of mw){
        if(comb[0]===game[0] || comb[1]===game[0] || 
          comb[0]===game[1] || comb[1]===game[1]){
            contains=true;
            break;
          }  
      }
      if(!contains){
        mw.push(comb);
        break;
      }
      j++;
    }
    console.log(schedule);
  } */

  //console.log(schedule);
  //console.log(combinations);
  let j = 1;
  for(let comb of combinations){
    schedule['matchweek'+j].push(comb);
    if(schedule['matchweek'+j].length===10) j++;
  }
  return schedule;
}



export default MWgenerator;