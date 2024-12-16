import map from '../assets/map.png'
import messa from '../assets/message.png'
import phone from '../assets/phone.png'
import local from '../assets/localisation.png'
import { Link } from 'react-router-dom'
import './style/local.css'
import MediaQuery from 'react-responsive';
function Localistn(){
    return(
        <div>
            <MediaQuery minWidth={1920}>
                <h1 style={{
                    marginRight: '60%',
                    padding: 24,
                    fontSize: 30
                }}>Contact et Localisation</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'rgba(199, 198, 198, 0.74)',
                    width: '60%',
                    marginLeft: '20%'
                }}>
                    <img src={map} alt="the map img"></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <div style={{
                            display: 'flex'
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={local} alt='localisation'></img>
                            <p>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={phone} alt='phone'></img>
                            <p>+229 0196327060 <br/> +229 0140464663</p>
                        </div>
                        <Link to='https://wa.me/+2290146466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer' style={{
                            textDecoration: 'none'
                        }}>
                            <div>
                            <p className='callme'>APPELER</p>
                            </div>
                        </Link>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={messa} alt='mail'></img>
                            <p>gillesdohou@gmail.com</p>
                        </div>
                        <Link to='/Contact' style={{
                            textDecoration: 'none'
                        }}>  
                            <div>
                                <p className='mailme'>ENVOYER UN MAIL</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={360} maxWidth={640}>
            <h1 style={{
                    marginRight: '60%',
                    padding: 24,
                    fontSize: 30
                }}>Contact et Localisation</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(199, 198, 198, 0.74)',
                    width: '80%',
                    marginLeft: '10%'
                }}>
                    <img src={map} alt="the map img" style={{
                        width: '100%'
                    }}></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <div style={{
                            display: 'flex'
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={local} alt='localisation'></img>
                            <p>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={phone} alt='phone'></img>
                            <p>+229 0196327060 <br/> +229 0140464663</p>
                        </div>
                        <Link to='https://wa.me/+2290146466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer' style={{
                            textDecoration: 'none'
                        }}>
                            <div>
                            <p className='callme'>APPELER</p>
                            </div>
                        </Link>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={messa} alt='mail'></img>
                            <p>gillesdohou@gmail.com</p>
                        </div>
                        <Link to='/Contact' style={{
                            textDecoration: 'none'
                        }}>
                            <div>
                                <p className='mailme'>ENVOYER UN MAIL</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Localistn;