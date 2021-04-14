//results should get 
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

  console.log(homeGoals, awayGoals);

  return [homeTeam.emblemInfo[1], awayTeam.emblemInfo[1], homeGoals, awayGoals];
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
    return match(homeTeam, awayTeam);
    //should return ['lfc','bvb',2,1]
  }

  let results =[];
  for(let game of games){
    results.push(combat(game[0], game[1]) )
  } 


  
  console.log(results);
}

export default Simulate;