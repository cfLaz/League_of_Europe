import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';

const match=(homeTeam, awayTeam)=>{
  let rand = () => Math.round(Math.random() * 20);

  let homeGoals=0; let awayGoals=0;
  let homeATK = homeTeam.ATK - awayTeam.DEF;
  let homeMID = homeTeam.MID - awayTeam.MID;
  let homeAttack = homeATK + homeMID +2; //added +2 for home advantage

  let awayATK = awayTeam.ATK - homeTeam.DEF;
  let awayMID = homeMID *(-1);
  let awayAttack = awayATK + awayMID -1;
  
  let luckFactor= rand();
  if(luckFactor===1) homeAttack+=4;
  else if (luckFactor===2) awayAttack+=4;

  const compare=(num,array)=>{
    for(let n of array){
      if (n===num) return true;
    }
    return false;
  }
  const calculate=(attack)=>{
    let goals=0;
    if(compare(attack,[-1,0,1]) ){
      if(rand()>10){
        goals++;
        if(rand()>13){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[2,3]) ){
      if(rand()>9){
        goals++;
        if(rand()>14){
          goals++;
          if(rand()>16){
            goals++;
            if(rand()>17){
              goals++
              if(rand()>18){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[4,5]) ){
      if(rand()>7){
        goals++;
        if(rand()>12){
          goals++;
          if(rand()>15){
            goals++;
            if(rand()>17){
              goals++
              if(rand()>18){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[6,7]) ){
      if(rand()>6){
        goals++;
        if(rand()>10){
          goals++;
          if(rand()>13){
            goals++;
            if(rand()>16){
              goals++
              if(rand()>17){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[8,9]) ){
      if(rand()>5){
        goals++;
        if(rand()>9){
          goals++;
          if(rand()>12){
            goals++;
            if(rand()>16){
              goals++
              if(rand()>17){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[10,11]) ){
      if(rand()>5){
        goals++;
        if(rand()>7){
          goals++;
          if(rand()>11){
            goals++;
            if(rand()>15){
              goals++
              if(rand()>17){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[12,13,14]) ){
      if(rand()>4){
        goals++;
        if(rand()>6){
          goals++;
          if(rand()>11){
            goals++;
            if(rand()>13){
              goals++
              if(rand()>16){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[15,16,17]) ){
      if(rand()>3){
        goals++;
        if(rand()>5){
          goals++;
          if(rand()>10){
            goals++;
            if(rand()>12){
              goals++
              if(rand()>15){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[18,19,20]) ){
      if(rand()>3){
        goals++;
        if(rand()>4){
          goals++;
          if(rand()>9){
            goals++;
            if(rand()>12){
              goals++
              if(rand()>15){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[21,22,23]) ){
      if(rand()>2){
        goals++;
        if(rand()>3){
          goals++;
          if(rand()>7){
            goals++;
            if(rand()>11){
              goals++
              if(rand()>14){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (attack>23){
      if(rand()>2){
        goals++;
        if(rand()>3){
          goals++;
          if(rand()>5){
            goals++;
            if(rand()>10){
              goals++
              if(rand()>13){
                goals++;
              }
            }
          }
        }
      }
    }
    else if(compare(attack,[-2,-3]) ){
      if(rand()>11){
        goals++;
        if(rand()>13){
          goals++;
          if(rand()>16){
            goals++;
            if(rand()>17){
              goals++
              if(rand()>18){
                goals++;
              }
            }
          }
        }
      }
    }
    else if(compare(attack,[-4,-5]) ){
      if(rand()>11){
        goals++;
        if(rand()>14){
          goals++;
          if(rand()>16){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if(compare(attack,[-6,-7]) ){
      if(rand()>12){
        goals++;
        if(rand()>14){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-8,-9]) ){
      if(rand()>13){
        goals++;
        if(rand()>15){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-10,-11]) ){
      if(rand()>15){
        goals++;
        if(rand()>16){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-12,-13,-14]) ){
      if(rand()>15){
        goals++;
        if(rand()>17){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-15,-16,-17]) ){
      if(rand()>16){
        goals++;
        if(rand()>17){
          goals++;
          if(rand()>17){
            goals++;
            if(rand()>18){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-18,-19,-20]) ){
      if(rand()>17){
        goals++;
        if(rand()>17){
          goals++;
          if(rand()>18){
            goals++;
            if(rand()>19){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (compare(attack,[-21,-22,-23]) ){
      if(rand()>17){
        goals++;
        if(rand()>18){
          goals++;
          if(rand()>18){
            goals++;
            if(rand()>19){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    else if (attack<-23){
      if(rand()>18){
        goals++;
        if(rand()>18){
          goals++;
          if(rand()>19){
            goals++;
            if(rand()>19){
              goals++
              if(rand()>19){
                goals++;
              }
            }
          }
        }
      }
    }
    return goals;
  }
  homeGoals = calculate(homeAttack);
  awayGoals = calculate(awayAttack);

  //console.log(homeGoals, awayGoals);

  return [homeTeam.emblemInfo[1], awayTeam.emblemInfo[1], homeGoals, awayGoals];
}  

/*create stats objects that will update in reducer :D 
  but from here,should update firebase...
*/
const updateStats =(clubs, matchweekResults)=>{
  console.log(matchweekResults);
  let clubsCopy = JSON.parse(JSON.stringify(clubs));

  for(let game of matchweekResults){
    let homeTeam = game[0]; let awayTeam = game[1];
    let homeGoals = game[2]; let awayGoals=game[3];
    let homeStats = {}; let awayStats = {};

    for(let club of Object.values(clubsCopy)){
      if(club.emblemInfo[1]===homeTeam) homeStats=club.stats;
      else if(club.emblemInfo[1]===awayTeam) awayStats=club.stats; 
    }

    homeStats.goalsScored+=homeGoals; awayStats.goalsScored+=awayGoals;
    homeStats.goalsConceded+=awayGoals; awayStats.goalsConceded+=homeGoals;
    homeStats.played++; awayStats.played++;

    if(homeGoals===awayGoals){
      homeStats.points++; awayStats.points++;
      homeStats.draws++; awayStats.draws++;  
    }
    else if(homeGoals>awayGoals){
      homeStats.points+=3;
      homeStats.wins++; 
      awayStats.losses++;  
    }
    else if(homeGoals<awayGoals){
      awayStats.points+=3;
      awayStats.wins++; 
      homeStats.losses++;  
    }
    // works, homeStats and awayStats are objects with updated stats
    // should send data from here, send stats object?  -NO STUPID, react hook can't be called in some loop
    
    for(let clubKey in clubsCopy){
      if(clubsCopy[clubKey].emblemInfo[1]===homeTeam){
        clubsCopy[clubKey].stats = homeStats;
      }
      else if(clubsCopy[clubKey].emblemInfo[1]===awayTeam){
        clubsCopy[clubKey].stats = awayStats;
      }
    }
  }
  
  return clubsCopy;
}
                //currentLeague
const Simulate = (League, currentMW) => {

  //let played= useSelector(state => state.leagues.played);
  //let dispatch = useDispatch();
  //let played =()=> dispatch(actions.MWplayed());
  /* let updateStats = (clubs, results)=> dispatch(
    actions.updateStats(clubs, results)); */

  let league = JSON.parse(JSON.stringify(League));
  
  let games = league[2]['matchweek'+currentMW]; //[ ["Sevilla", "Valencia CF"], ...]
  
  const combat=(homeSide, awaySide) => {
    let homeTeam;
    let awayTeam;

    for(let club of Object.values(league[1]) ){
      
      if(homeTeam && awayTeam) break;
      else if(club.emblemInfo[1] === homeSide){
        homeTeam = club;
      }
      else if (club.emblemInfo[1] === awaySide){
        awayTeam = club;
      }
    } //works 
    return match(homeTeam, awayTeam);
    //should return ['lfc','bvb',2,1]
  }

  let results =[];
  for(let game of games){
    results.push(combat(game[0], game[1]) )
  } //works -> [ ['lfc','bvb',2,1], ...[] ]
  
  //played();
  return [true, results, updateStats(league[1], results)]
}

export default Simulate;

//from this file, update schedule and club stats.

/* let resultField = document.getElementsByClassName("result");
  for(let i=0; i< results.length; i++){
    resultField[i].textContent = `${results[i][2]} : ${results[i][3]}`;
  } */