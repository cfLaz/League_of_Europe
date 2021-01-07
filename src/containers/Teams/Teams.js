import lfc from '../../images/lfc.png';
import wol from '../../images/wolves.png';
import sot from '../../images/soton.png';


let Teams = {
    Liverpool: {
      ATK: 91,
      MID: 88,
      DEF: 90,
      emblem:  <img src={lfc} alt='Liverpool Footbal Club' title="Liv'pool"/>,
      name: 'Liverpool FC',
      //playing: true,
    },
     Wolves: {
      ATK: 85,
      MID: 83,
      DEF: 82,
      emblem: <img src= {wol} alt='Wolverhampton Wanderers' title='Wolves'/>,
      name: "Wolverhampton Wanderers"
    },
    Soton: {
      ATK: 83,
      MID: 84,
      DEF: 81,
      emblem: <img src= {sot} alt='Southampton FC' title='Soton'/>,
      name: 'Southampton FC',
    },
   
}

export default Teams;