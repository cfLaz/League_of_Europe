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
        emblemInfo: [bm, 'Bayern München', "Bayern"],
      },
      BVB: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bvb, 'Borussia Dortmund', "BVB"],
      },
      BL: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bl, 'Bayer 04 Leverkusen', "Bayer Leverkusen"],
      },
      Stuttgart: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [stut, 'VfB Stuttgart', "Stuttgart"],
      },
      BorM: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [borm, 'Borussia Mönchengladbach', "Borussia M"],
      },
      Frankfurt: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [fra, 'Eintracht Frankfurt', "Eintracht Frankfurt"],
      },
      Juventus: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [juve, 'Juventus', "Juve"],
      },
      Milan: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [mil, 'AC Milan', "Milan"],
      },
      Inter: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [int, 'Inter Milano', "Inter"],
      },
      Roma: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [roma, 'AS Roma', "Roma"],
      },
      Napoli: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [nap, 'SSC Napoli', "Napoli"],
      },
      Lazio: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [laz, 'SS Lazio', "Lazio"],
      },
      Lyon: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [lyon, 'Olimpique Lyonnais', "Lyon"],
      },
      PSG: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [psg, 'Paris Saint Germain', "PSG"],
      },
      Marseille: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [mar, 'Olimpique de MArseille', "Marseille"],
      },
      Bordeaux: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bor, 'Girondins de Bordeaux', "Bordeaux"],
      },
      SE: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [se, 'AS Saint-Étienne', "Saint Étienne"],
      },
      Monaco: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [mon, 'AS Monaco', "Monaco"],
      },
      Porto: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [por, 'FC Porto', "Porto"],
      },
      Benfica: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [ben, 'SL Benfica', "Benfica"],
      },
      Sporting: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [spo, 'Sporting CP', "Sporting"],
      },
      Ajax: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [ajx, 'AFC Ajax', "Ajax"],
      },
      PSV: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [psv, 'PSV Eindhoven', "PSV"],
      },
      Feyenoord: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [fey, 'Feyenoord Rotterdam', "Feyenoord"],
      },
      Shakhtar: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [sha, 'ФК Шахтар Донецьк', "Шахтар"],
      },
      Zenit: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [zen, 'ФК Зенит', "Зенит"],
      },
      CSKA: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [cska, 'ПБК ЦСКА Москва', "ЦСКА"],
      },
      Fenerbahce: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [fen, 'Fenerbahçe SK', "Fenerbahce"],
      },
      Besiktas: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bes, 'Beşiktaş JK', "Besiktas"],
      },
      Celtic: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [cel, 'Celtic FC', "Celtic"],
      },
      Rangers: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [ran, 'Rangers FC', "Rangers"],
      },
      Zvezda: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [czv, 'ФК Црвена Звезда', "Црвена Звезда"],
      },
      Olympiakos: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [oly, 'Olympiakos FC', "Olympiakos"],
      },
      Copenhagen: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [cop, 'FC København', "Copengahen"],
      },
      Dinamo: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [gnk, 'GNK Dinamo', "Dinamo"],
      },
      Anderlecht: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [and, 'RSC Anderlecht', "Anderlecht"],
      },
      Basel: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [bas, 'FC Basel', "Basel"],
      },
      Borac: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [fcb, 'ФК Борац Бања Лука', "Борац"],
      },
      

    
  }

export default Teams;