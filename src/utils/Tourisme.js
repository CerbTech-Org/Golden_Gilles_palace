import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import './style/Tourisme.css'
import map from '../assets/map.png'
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
function Tourisme() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>Explorer nos merveilles locales</h1>
      <p>Nous mettons à votre disposition des guides touristiques pour vous permettre <br/> d'explorer sereinement les différents sites disponibles  et que vous souhaiterez visiter </p>
        <MediaQuery minWidth={1920} maxWidth={2560}>
          <div>
              <img src={map} alt='imag'></img>
          </div>
          <Link to='https://wa.me/+2299632706'>
            <div id="my_guide">
                <p className='guide_contactor'>CONTACTER UN GUIDE</p>
            </div>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={1366} maxWidth={1919}>
          <div>
              <img src={map} alt='imag'></img>
          </div>
          <Link to='https://wa.me/+2299632706'>
            <div id="my_guide">
                <p className='guide_contactor'>CONTACTER UN GUIDE</p>
            </div>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={360} maxWidth={640}>
          <div>
              <img style={{
                width: 300,
                height: 300
              }} src={map} alt="guide"></img>
          </div>
          <Link>
          <Link to='https://wa.me/+2299632706'>
              <div id="my_guide">
                <p className='guide_contactor' 
                style=
                {
                  {
                    width: 150,
                    height: 30,
                    fontSize: 10,
                    color: 'white',
                    borderRadius: 30,
                    opacity: 0.8,
                    textAlign: 'center',
                    paddingTop: 11,
                    position: 'absolute',
                    marginLeft: '20%'
                  }
                }>CONTACTER UN GUIDE</p>
            </div>
          </Link>
          </Link>
        </MediaQuery>
      <Description/>
    </div>
  );
}

export default Tourisme;
