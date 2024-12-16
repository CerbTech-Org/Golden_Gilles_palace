import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import img_o from '../assets/chamber_one.jpg'
import img_tf from '../assets/IMG-20241019-WA0083.jpg'
import img_ts from '../assets/IMG-20241019-WA0082.jpg'
import img_tse from '../assets/IMG-20241019-WA0086.jpg'
import './style/hebergement_menu.css'
import MediaQuery from 'react-responsive';
function Hmenu() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>CHAMBRE DOUBLE</h1>
      <MediaQuery deviceWidth={1920} minWidth={1920}>
        <div id="groupedImage" >
            <div id='inter' style={{
              width: 285
            }}>
              <img alt='room' src={img_o} style={{
                height: 310,
                width: 260
              }}></img>
              <img alt='room' src={img_tse} style={{
                height: 280,
                width: 260,
                marginTop: 10
              }}></img>
            </div>
            <div  id="inter2">
              <img style={{
                width: 500,
                height: 330,
            }} src={img_ts} alt='room'></img>
              <img style={{
                marginTop: 10,
                width: 500,
                height: 260
            }}
            src={img_tf} alt='room'></img>
            </div>
            <div id="detAdes">
              <h1>Détails et description</h1>
              <p>Nous disposons d'une grande variété chambre, <br/> votre bonheur notre priorité</p>
            </div>
        </div>
        <div>
        <h1>PAS SATISFAIT ?</h1>
        <div id="my_guide">
            <p className='guide_contactor'>CONTACTER UN GUIDE</p>
        </div>
        </div>
        </MediaQuery>

      <MediaQuery deviceWidth={360} minWidth={360}>
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            }} >
            <div id='inter' style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '20%'
            }}>
              <img alt='room' src={img_o} style={{
                height: 90,
                width: 100
              }}></img>
              <img alt='room' src={img_tse} style={{
                height: 90,
                width: 100,
                marginTop: 10
              }}></img>
            </div>
            <div  style={{
              display: 'flex',
              flexDirection: 'column',
              width: 0,
              marginLeft: '-20%'
            }}>
              <img style={{
                width: 100,
                height: 100,
            }} src={img_ts} alt='room'></img>
              <img style={{
                marginTop: 10,
                width: 100,
                height: 80
            }}
            src={img_tf} alt='room'></img>
            </div>
            </div>
            <div style={{
              width: '80%',
              height: 'auto',
              backgroundColor: '#c1c3c7',
              marginLeft: '10%',
            }}>
              <h1>Détails et description</h1>
              <p>Nous disposons d'une grande variété chambre, <br/> votre bonheur notre priorité</p>
            </div>
        <div>
        <h1>PAS SATISFAIT ?</h1>
        <div id="my_guide">
            <p className='guide_contactor'>CONTACTER UN GUIDE</p>
        </div>
        </div>
        </MediaQuery>
      <Description/>
    </div>
  );
}

export default Hmenu;
