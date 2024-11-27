import './style/Welcome.css'
import image from '../assets/welcome_image.jpg'

function Welcome(){
    return (
        <div>
            <img src={image} className='welcome_image'></img>
            <div id="message">
            <p className='chez'>BIENVENUE CHEZ</p>
            <p className='gille'>GILLES</p>
            <p className='golden'>GOLDEN PALACE</p>
            <p className='elegance'>Elegance, luxe et confort, pensé pour<br/> votre confort le plus total</p>
            </div>
            <p className='reserve'>RESERVEZ MAINTENANT</p>
        </div>
    )
}

export default Welcome;