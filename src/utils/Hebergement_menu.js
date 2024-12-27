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
      <MediaQuery minWidth={1024} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
      <h1>CHAMBRE DOUBLE</h1>
      {/* <MediaQuery minWidth={1920} maxWidth={2560}>
        </MediaQuery> */}

        
      <MediaQuery minWidth={1024} maxWidth={2560}>
        <div id="groupedImage" >  
            <div id='inter' style={{
              width: '80vw',
            }}>
              <img    alt='room' src={img_o} style={{
                height: '40vh',
                width: '25vw'
              }}></img>
              <img alt='room' src={img_tse} style={{
                height: '30vh',
                width: '25vw',
                marginTop: 10
              }}></img>
            </div>
            <div  id="inter2">
              <img style={{

                width: '45vw',
                height: '40vh',
            }} src={img_ts} alt='room'></img>
              <img style={{
                marginTop: 10,
                width: '45vw',
                height: '30vh'
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


      <MediaQuery minWidth={0} maxWidth={1023}>
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
                height: '12vh',
                width: '28vw'
              }}></img>
              <img alt='room' src={img_tse} style={{
                height: '11vh',
                width: '28vw',
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
                width: '30vw',
                height: '13vh',
            }} src={img_ts} alt='room'></img>
              <img style={{
                marginTop: 10,
                width: '30vw',
                height: '10vh'
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
