//results should get 
const match=(homeTeam, awayTeam)=>{
  // Math.round(Math.random() * 20)
  let rand = () => Math.round(Math.random() * 20);
  //let num = rand();
  let homeGoal=0; let awayGoal=0;
  let ATKDEFdifference = homeTeam.ATK - awayTeam.DEF;
  let MIDdifference = homeTeam.MID - awayTeam.MID;
  let homeAttack = ATKDEFdifference + MIDdifference;

  const compare=(num,array)=>{
    for(let n of array){
      if (n===num) return true;
    }
    return false;
  }

  if(compare(homeAttack,[-1,0,1]) ){
    if(rand()>10){
      homeGoal++;
      if(rand()>14){
        homeGoal++;
        if(rand()>17){
          homeGoal++;
          if(rand()>18){
            homeGoal++
            if(rand()>19){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[2,3]) ){
    if(rand()>9){
      homeGoal++;
      if(rand()>14){
        homeGoal++;
        if(rand()>16){
          homeGoal++;
          if(rand()>17){
            homeGoal++
            if(rand()>18){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[4,5]) ){
    if(rand()>7){
      homeGoal++;
      if(rand()>12){
        homeGoal++;
        if(rand()>15){
          homeGoal++;
          if(rand()>17){
            homeGoal++
            if(rand()>18){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[6,7]) ){
    if(rand()>6){
      homeGoal++;
      if(rand()>10){
        homeGoal++;
        if(rand()>13){
          homeGoal++;
          if(rand()>16){
            homeGoal++
            if(rand()>17){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[8,9]) ){
    if(rand()>5){
      homeGoal++;
      if(rand()>9){
        homeGoal++;
        if(rand()>12){
          homeGoal++;
          if(rand()>16){
            homeGoal++
            if(rand()>17){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[10,11]) ){
    if(rand()>5){
      homeGoal++;
      if(rand()>7){
        homeGoal++;
        if(rand()>11){
          homeGoal++;
          if(rand()>15){
            homeGoal++
            if(rand()>17){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[12,13,14]) ){
    if(rand()>4){
      homeGoal++;
      if(rand()>6){
        homeGoal++;
        if(rand()>11){
          homeGoal++;
          if(rand()>13){
            homeGoal++
            if(rand()>16){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[15,16,17]) ){
    if(rand()>3){
      homeGoal++;
      if(rand()>5){
        homeGoal++;
        if(rand()>10){
          homeGoal++;
          if(rand()>12){
            homeGoal++
            if(rand()>15){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[18,19,20]) ){
    if(rand()>3){
      homeGoal++;
      if(rand()>4){
        homeGoal++;
        if(rand()>9){
          homeGoal++;
          if(rand()>12){
            homeGoal++
            if(rand()>15){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (compare(homeAttack,[21,22,23]) ){
    if(rand()>2){
      homeGoal++;
      if(rand()>3){
        homeGoal++;
        if(rand()>7){
          homeGoal++;
          if(rand()>11){
            homeGoal++
            if(rand()>14){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  else if (homeAttack>23){
    if(rand()>2){
      homeGoal++;
      if(rand()>3){
        homeGoal++;
        if(rand()>5){
          homeGoal++;
          if(rand()>10){
            homeGoal++
            if(rand()>13){
              homeGoal++;
            }
          }
        }
      }
    }
  }
  console.log(homeGoal);
}  
  
                //currentLeague
const Simulate = (League) => {

  let league = JSON.parse(JSON.stringify(League));
  let mw = "matchweek1" //needs to be dynamic

  let games = league[2][mw]; //[ ["Sevilla", "Valencia CF"], ...]
  
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
    match(homeTeam, awayTeam);
    //should return ['lfc','bvb',2,1]
  }

  let results =[];
  /* for(let game of games){
    results.push(combat(game[0], game[1]) )
  } */


  
  combat("Sevilla", "Valencia CF");
}

export default Simulate;