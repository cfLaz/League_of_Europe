import lfc from '../../images/lfc.png';
import ars from '../../images/arsenal.png';
import mu from '../../images/mu.png';
import che from '../../images/chelsea.png';
import mc from '../../images/mc.png';
import barca from '../../images/barca.png';
import rm from '../../images/rm.png';
import am from '../../images/am.png';
import valencia from '../../images/valencia.png';
import ab from '../../images/ab.png';
import tot from "../../images/tot'nam.png";
import sevilla from '../../images/sevilla.png';
import bm from '../../images/bm.png';

/* 
import {useDispatch} from 'react-redux';
import {select} from '../../store/actions/indexA';
 */

let Teams ={
      Liverpool: {
        ATK: 91,
        MID: 88,
        DEF: 90,
        //name: 'Liverpool FC',
        emblemInfo: [lfc, 'Liverpool FC', "Liv'pool"],
        //playing: true,
      },
      Arsenal: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [ars, 'Arsenal', "Gunners"],
      },
      Chelsea: {
        ATK: 85,
        MID: 83,
        DEF: 82,
        emblemInfo: [che, 'Chelsea FC', "Chelsea"],
      },
      MC: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [mc, 'Manchester City', "Man City"],
      },
      MU: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [mu, 'Manchester United', "Man Utd"],
      },
      Tottenham: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [tot, 'Tottenham Hotspur', "Spurs"],
      },
      Barca: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [barca, 'Barcelona', "Barca"],
      },
      AM: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [am, 'Atletico de Madrid', "Atleti"],
      },
      RM: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [rm, 'Real Madrid', "Real"],
      },
      AB: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [ab, 'Athletic Club Bilbao', "Athletic Bilbao"],
      },
      Sevilla: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [sevilla, 'Sevilla', "Sevilla"],
      },
      Valencia: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [valencia, 'Valencia CF', "Valencia"],
      },
      BM: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bm, 'Bayern Munchen', "Bayern"],
      },
    
  }

export default Teams;