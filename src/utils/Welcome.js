import './style/Welcome.css'
import image from '../assets/welcome_image.jpg'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
function Welcome(){
    return (
        <div className='welthing' >
            <img src={image} alt="welcome" className='welcome_image'></img>
            <div id="message">
            <p className='chez'>BIENVENUE CHEZ</p>
            <p className='gille'>GILLES</p>
            <p className='golden_palace'>GOLDEN PALACE</p>
            <p className='elegance'>Elegance, luxe et confort, pensé pour<br/> votre confort le plus total</p>
            </div>
        <MediaQuery minWidth={1024} maxWidth={2560}>
          <Link to='https://wa.me/+22946466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer'>
            <p className='reserve'>RESERVEZ MAINTENANT</p>
          </Link>
        </MediaQuery>
        </div>
    )
}

export default Welcome;