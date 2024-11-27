import './style/footer.css'
import logod from '../assets/golden_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagram from '../assets/instagram-brands-solid.svg'
import facebook from '../assets/facebook-f-brands-solid.svg'
import youtube from '../assets/youtube-brands-solid.svg'
import linkedin from '../assets/linkedin-brands-solid.svg'
import x from '../assets/twitter-brands-solid.svg'
import Text from './Text'
import messa from '../assets/message.png'
import phone from '../assets/phone.png'
import local from '../assets/localisation.png'
function Description(){
    return (
        <footer id='Description'>
            <div id='Inter'>
            <img src={logod} className='golden_logo' alt="logo"></img>
            <p>Elegance, luxe et confort, pensé pour <br/> votre confort le plus total</p>
                <img className='logo' src={instagram} alt="instagram logo"></img>
                <img className='logo' src={x} alt="twitter logo"></img>
                <img src={facebook} alt="facebook logo" className='logo'></img>
                <img src={youtube} alt="youtube logo" className='logo'></img>
                <img src={linkedin} alt="linkedin logo" className='logo'></img>
            </div>
            <Text Title="Hébergements" el_one="Caractéristique" el_two="Pricing" el_three="Études de cas" el_four="Revoir" el_five="Mise à jour"></Text>
            <Text Title="Restauration" el_one="Infos" el_two="Contact" el_three="Carrières" el_four="Culture" el_five="Blog"></Text>
            <Text Title="Tourisme" el_one="Commencer" el_two="Aides" el_three="Etat du serveur" el_four="Report a bug" el_five="Assitance"></Text>
            <div style={{
                marginLeft: 150
            }}>
                <h1>Contactez-nous</h1>
                <div style={{
                    display: 'flex'
                }}>
                    <img style={{
                        width: 25,
                        height: 25
                    }} src={messa}></img>
                    <p>gillesdohou@gmail.com</p>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <img style={{
                        width: 25,
                        height: 25
                    }} src={phone}></img>
                    <p>+229 96327060/ +229 40464663</p>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <img style={{
                        width: 25,
                        height: 25
                    }} src={local}></img>
                    <p>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                </div>
            </div>
        </footer>
    )
}

export default Description;