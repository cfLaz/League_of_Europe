import lfc from '../../images/lfc.png';
import wol from '../../images/wolves.png';
import sot from '../../images/soton.png';
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
      Wolves: {
        ATK: 85,
        MID: 83,
        DEF: 82,
        emblemInfo: [wol, 'Wolverhampton Wanderers', "Wolves"],
      },
      Soton: {
        ATK: 83,
        MID: 84,
        DEF: 81,
        emblemInfo: [sot, 'Southampton FC', "Soton"],
      },
    
  }

export default Teams;