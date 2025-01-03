import './style/footer.css'
import logod from '../assets/golden_logo.png'
import instagram from '../assets/instagram-brands-solid.svg'
import facebook from '../assets/facebook-f-brands-solid.svg'
import youtube from '../assets/youtube-brands-solid.svg'
import linkedin from '../assets/linkedin-brands-solid.svg'
import x from '../assets/twitter-brands-solid.svg'
import Text from './Text'
import messa from '../assets/message.png'
import phone from '../assets/phone.png'
import local from '../assets/localisation.png'
import { Link } from 'react-router-dom'

function Description(){
    return (
        <footer id='Description'>
            <div id='Inter'>
            <img src={logod} className='golden_logo' alt="logo"></img>
            <p>Elegance, luxe et confort, pensé pour <br/> votre confort le plus total</p>
            <Link to='https://www.instagram.com/' target='_blank' rel="noreopener noreferrer">
                <img className='logo' src={instagram} alt="instagram logo"></img>
            </Link>
            <Link to="https://x.com/home" target='_blank' rel="noreopener noreferrer">
                <img className='logo' src={x} alt="twitter logo"></img>
            </Link>
            <Link to="https://www.facebook.com/" target='_blank' rel="noreopener noreferrer">
                <img src={facebook} alt="facebook logo" className='logo'></img>            
            </Link>
            <Link to="https://www.youtube.com/" target='_blank' rel="noreopener noreferrer">
                <img src={youtube} alt="youtube logo" className='logo'></img>
            </Link>
            <Link to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target='_blank' rel="noreopener noreferrer">
                <img src={linkedin} alt="linkedin logo" className='logo'></img>
            </Link>
            </div>
            <Text Title="Copyrights © tous droits réservés" el_one="Avec Gilles Golden Palace votre satisfaction est une priorité" el_two="" el_three="" el_four="" el_five=""></Text>
            <div id="contactnous">
                <h1 id="contactez">Contactez-nous</h1>
                <div style={{
                    display: 'flex',
                    marginTop: '2%  '

                }}>
                    <img style={{
                        width: '5%',
                        height: '5%',
                    }}  src={messa} alt='mail'></img>
                    <p className='porpi'>gillesdohou@gmail.com</p>
                </div>  
                <div style={{
                    display: 'flex',
                    marginTop: '2%'
                }}>
                    <img style={{
                        width: '5%',
                        height: '5%',
                        marginTop: "-1%"
                    }} src={phone} alt='phone'></img>
                    <p className='porpi'>+229 00196327060/ +229 0140464663</p>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '2%'
                }}>
                    <img style={{
                        width: '5%',
                        height: '5%',
                        marginBottom: '2%'
                    }} src={local} alt='localisation'></img>
                    <p className='porpi'>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                </div>
            </div>
        </footer>
    )
}

export default Description;