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
import bvb from '../../images/bvb.png';
import bl from '../../images/bl.png';
import borm from '../../images/bor m.png';
import stut from '../../images/stuttgart.ico';
import juve from '../../images/juve.png';
import mil from '../../images/milan.png';
import int from '../../images/inter.png';
import nap from '../../images/napoli.png';
import laz from '../../images/lazio.png';
import roma from '../../images/roma.png';
import lyon from '../../images/lyon.png';
import psg from '../../images/psg.png';
import mar from '../../images/marseille.png';
import bor from '../../images/bordo.png';
import se from '../../images/saint etienne.png';
import mon from '../../images/monaco.png';
import por from '../../images/porto.png';
import ben from '../../images/benfica.png';
import spo from '../../images/sporting.png';
import ajx from '../../images/ajax.png';
import psv from '../../images/psv.png';
import fey from '../../images/feyenoord.png';
import sha from '../../images/shakhtar.png';
import zen from '../../images/zenit.jpg';
import fen from '../../images/fener.png';
import bes from '../../images/besiktas.png';
import cel from '../../images/celtic.png';
import ran from '../../images/rangers.png';
import oly from '../../images/olympiacos.png';
import cop from '../../images/copenhagen.png';
import czv from '../../images/zvezda.png';
import gnk from '../../images/dinamo.png';
import and from '../../images/anderlecht.png';
import bas from '../../images/basel.png';
import fra from '../../images/frankfurt.png';
import cska from '../../images/cska.png';
import fcb from '../../images/borac.png';
/* 
import {useDispatch} from 'react-redux';
import {select} from '../../store/actions/indexA';
 */

let Teams ={
      Liverpool: {
        ATK: 89,
        MID: 88,
        DEF: 90,
        //name: 'Liverpool FC',
        emblemInfo: [lfc, 'Liverpool FC', "Liv'pool"],
        //playing: true,
      },
      Arsenal: {
        ATK: 85,
        MID: 82,
        DEF: 82,
        emblemInfo: [ars, 'Arsenal', "Gunners"],
      },
      Chelsea: {
        ATK: 88,
        MID: 83,
        DEF: 83,
        emblemInfo: [che, 'Chelsea FC', "Chelsea"],
      },
      MC: {
        ATK: 91,
        MID: 88,
        DEF: 86,
        emblemInfo: [mc, 'Manchester City', "Man City"],
      },
      MU: {
        ATK: 84,
        MID: 85,
        DEF: 83,
        emblemInfo: [mu, 'Manchester United', "Man Utd"],
      },
      Tottenham: {
        ATK: 88,
        MID: 84,
        DEF: 83,
        emblemInfo: [tot, 'Tottenham Hotspur', "Spurs"],
      },
      Barca: {
        ATK: 89,
        MID: 86,
        DEF: 87,
        emblemInfo: [barca, 'Barcelona', "Barca"],
      },
      AM: {
        ATK: 88,
        MID: 82,
        DEF: 86,
        emblemInfo: [am, 'Atletico de Madrid', "Atleti"],
      },
      RM: {
        ATK: 87,
        MID: 89,
        DEF: 89,
        emblemInfo: [rm, 'Real Madrid', "Real"],
      },
      AB: {
        ATK: 79,
        MID: 76,
        DEF: 75,
        emblemInfo: [ab, 'Athletic Club Bilbao', "Athletic Bilbao"],
      },
      Sevilla: {
        ATK: 82,
        MID: 80,
        DEF: 79,
        emblemInfo: [sevilla, 'Sevilla', "Sevilla"],
      },
      Valencia: {
        ATK: 80,
        MID: 79,
        DEF: 77,
        emblemInfo: [valencia, 'Valencia CF', "Valencia"],
      },
      BM: {
        ATK: 89,
        MID: 86,
        DEF: 86,
        emblemInfo: [bm, 'Bayern München', "Bayern"],
      },
      BVB: {
        ATK: 86,
        MID: 84,
        DEF: 84,
        emblemInfo: [bvb, 'Borussia Dortmund', "BVB"],
      },
      BL: {
        ATK: 82,
        MID: 77,
        DEF: 76,
        emblemInfo: [bl, 'Bayer 04 Leverkusen', "Bayer Leverkusen"],
      },
      Stuttgart: {
        ATK: 76,
        MID: 74,
        DEF: 73,
        emblemInfo: [stut, 'VfB Stuttgart', "Stuttgart"],
      },
      BorM: {
        ATK: 81,
        MID: 80,
        DEF: 79,
        emblemInfo: [borm, 'Borussia Mönchengladbach', "Borussia M"],
      },
      Frankfurt: {
        ATK: 83,
        MID: 80,
        DEF: 78,
        emblemInfo: [fra, 'Eintracht Frankfurt', "Eintracht Frankfurt"],
      },
      Juventus: {
        ATK: 90,
        MID: 84,
        DEF: 86,
        emblemInfo: [juve, 'Juventus', "Juve"],
      },
      Milan: {
        ATK: 83,
        MID: 81,
        DEF: 83,
        emblemInfo: [mil, 'AC Milan', "Milan"],
      },
      Inter: {
        ATK: 87,
        MID: 83,
        DEF: 84,
        emblemInfo: [int, 'Inter Milano', "Inter"],
      },
      Roma: {
        ATK: 83,
        MID: 79,
        DEF: 79,
        emblemInfo: [roma, 'AS Roma', "Roma"],
      },
      Napoli: {
        ATK: 84,
        MID: 79,
        DEF: 82,
        emblemInfo: [nap, 'SSC Napoli', "Napoli"],
      },
      Lazio: {
        ATK: 82,
        MID: 82,
        DEF: 78,
        emblemInfo: [laz, 'SS Lazio', "Lazio"],
      },
      Lyon: {
        ATK: 82,
        MID: 79,
        DEF: 78,
        emblemInfo: [lyon, 'Olimpique Lyonnais', "Lyon"],
      },
      PSG: {
        ATK: 93,
        MID: 85,
        DEF: 84,
        emblemInfo: [psg, 'Paris Saint Germain', "PSG"],
      },
      Marseille: {
        ATK: 79,
        MID: 83,
        DEF: 80,
        emblemInfo: [mar, 'Olimpique de Marseille', "Marseille"],
      },
      Bordeaux: {
        ATK: 75,
        MID: 71,
        DEF: 75,
        emblemInfo: [bor, 'Girondins de Bordeaux', "Bordeaux"],
      },
      SE: {
        ATK: 73,
        MID: 78,
        DEF: 78,
        emblemInfo: [se, 'AS Saint-Étienne', "Saint Étienne"],
      },
      Monaco: {
        ATK: 80,
        MID: 80,
        DEF: 78,
        emblemInfo: [mon, 'AS Monaco', "Monaco"],
      },
      Porto: {
        ATK: 81,
        MID: 79,
        DEF: 80,
        emblemInfo: [por, 'FC Porto', "Porto"],
      },
      Benfica: {
        ATK: 80,
        MID: 78,
        DEF: 77,
        emblemInfo: [ben, 'SL Benfica', "Benfica"],
      },
      Sporting: {
        ATK: 76,
        MID: 80,
        DEF: 74,
        emblemInfo: [spo, 'Sporting CP', "Sporting"],
      },
      Ajax: {
        ATK: 82,
        MID: 83,
        DEF: 80,
        emblemInfo: [ajx, 'AFC Ajax', "Ajax"],
      },
      PSV: {
        ATK: 82,
        MID: 76,
        DEF: 77,
        emblemInfo: [psv, 'PSV Eindhoven', "PSV"],
      },
      Feyenoord: {
        ATK: 79,
        MID: 73,
        DEF: 73,
        emblemInfo: [fey, 'Feyenoord Rotterdam', "Feyenoord"],
      },
      Shakhtar: {
        ATK: 80,
        MID: 76,
        DEF: 76,
        emblemInfo: [sha, 'ФК Шахтар Донецьк', "Шахтар"],
      },
      Zenit: {
        ATK: 79,
        MID: 79,
        DEF: 77,
        emblemInfo: [zen, 'ФК Зенит', "Зенит"],
      },
      CSKA: {
        ATK: 76,
        MID: 74,
        DEF: 76,
        emblemInfo: [cska, 'ПБК ЦСКА Москва', "ЦСКА"],
      },
      Fenerbahce: {
        ATK: 75,
        MID: 76,
        DEF: 74,
        emblemInfo: [fen, 'Fenerbahçe SK', "Fenerbahce"],
      },
      Besiktas: {
        ATK: 78,
        MID: 76,
        DEF: 75,
        emblemInfo: [bes, 'Beşiktaş JK', "Besiktas"],
      },
      Celtic: {
        ATK: 72,
        MID: 75,
        DEF: 71,
        emblemInfo: [cel, 'Celtic FC', "Celtic"],
      },
      Rangers: {
        ATK: 73,
        MID: 72,
        DEF: 70,
        emblemInfo: [ran, 'Rangers FC', "Rangers"],
      },
      Zvezda: {
        ATK: 72,
        MID: 73,
        DEF: 70,
        emblemInfo: [czv, 'ФК Црвена Звезда', "Црвена Звезда"],
      },
      Olympiakos: {
        ATK: 73,
        MID: 74,
        DEF: 72,
        emblemInfo: [oly, 'Olympiakos FC', "Olympiakos"],
      },
      Copenhagen: {
        ATK: 75,
        MID: 67,
        DEF: 68,
        emblemInfo: [cop, 'FC København', "Copengahen"],
      },
      Dinamo: {
        ATK: 73,
        MID: 74,
        DEF: 71,
        emblemInfo: [gnk, 'GNK Dinamo', "Dinamo"],
      },
      Anderlecht: {
        ATK: 72,
        MID: 73,
        DEF: 72,
        emblemInfo: [and, 'RSC Anderlecht', "Anderlecht"],
      },
      Basel: {
        ATK: 73,
        MID: 73,
        DEF: 72,
        emblemInfo: [bas, 'FC Basel', "Basel"],
      },
      Borac: {
        ATK: 63,
        MID: 62,
        DEF: 60,
        emblemInfo: [fcb, 'ФК Борац Бања Лука', "Борац"],
      },
      

    
  }

export default Teams;