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
            <MediaQuery minWidth={1920} maxWidth={2560}>
                <h1 style={{
                    marginRight: '60%',
                    padding: 24,
                    fontSize: 30,
                    fontWeight: 900
                }}>Contact et Localisation</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'rgba(199, 198, 198, 0.74)',
                    width: '60%',
                    marginLeft: '20%'
                }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
                        width="80%" 
                        height="550"
                        style={{border:0,}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"> 
                    </iframe>
                    <div style={{
                        display: 'flex' ,
                        flexDirection: 'column'
                    }}>
                    <div style={{
                            display: 'flex'
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={local} alt='localisation'></img>
                            <p className='porpi'>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={phone} alt='phone'></img>
                            <p className='porpi'>+229 0196327060 <br/> +229 0140464663</p>
                        </div>
                        <Link to='https://wa.me/+22946466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer' style={{
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
                            <p className='porpi'>gillesdohou@gmail.com</p>
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
            <MediaQuery minWidth={1366} maxWidth={1919}>
                <h1 style={{
                    marginRight: '60%',
                    fontSize: 30,
                    paddingBottom: 30
                }}>Contact et Localisation</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'rgba(199, 198, 198, 0.74)',
                    width: '60%',
                    marginLeft: '20%'
                }}>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
                        width="80%" 
                        height="550"
                        style={{border:0,}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"> 
                    </iframe>
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
                            <p className='porpi'>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={phone} alt='phone'></img>
                            <p className='porpi'>+229 0196327060 <br/> +229 0140464663</p>
                        </div>
                        <Link to='https://wa.me/+22946466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer' style={{
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
                            <p className='porpi'>gillesdohou@gmail.com</p>
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
                    marginLeft: '10%',
                    zIndex: 1
                }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
                        width="100%" 
                        height="350"
                        style={{border:0,}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"> 
                    </iframe>
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
                            <p className='porpi'>Calavi, Rue en face de<br/>PADME ADJAKE à côté de Terre </p>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}>
                            <img style={{
                                width: 25,
                                height: 25
                            }} src={phone} alt='phone'></img>
                            <p className='porpi'>+229 0196327060 <br/> +229 0140464663</p>
                        </div>
                        <Link to='https://wa.me/+22946466126?text=Bonjour%20Gilles%20Golden%20Palace%20Je%20vous%20contacte%20depuis%20votre%20site%20officiel' target='_blank' rel='noopener noreferrer' style={{
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
                            <p className='porpi'>gillesdohou@gmail.com</p>
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