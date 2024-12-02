import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import './style/Tourisme.css'
import map from '../assets/map.png'
function Tourisme() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>Explorer nos merveilles locales</h1>
      <p>Nous mettons à votre disposition des guides touristiques pour vous permettre <br/> d'explorer sereinement les différents sites disponibles  et que vous souhaiterez visiter </p>
        <div>
            <img src={map}></img>
        </div>
        <div id="my_guide">
            <p className='guide_contactor'>CONTACTER UN GUIDE</p>
        </div>
      <Description/>
    </div>
  );
}

export default Tourisme;
