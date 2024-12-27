import './style/Header.css';
import logo from '../assets/golden_logo.png';
import MediaQuery from 'react-responsive';
import ham from '../assets/burger-bar.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header(){
    const [clicked, setClick] = useState(false)
    function clickedTh(){
        if (clicked === true){
            setClick(false)
        }
        else 
            setClick(true)
    }
    function passflase(){
        setClick(false)
    }
    return(    
    <div id='up_navbar'>
        <MediaQuery minWidth={1024} maxWidth={2560}>
            <div id='up_logo'>
                <img src={logo} className='header' alt='header'></img>
            </div>
            <div id='up_profil'>
                <img src={logo} className='profil' alt='header'></img>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1023}>
            <div id='up_logo'>
                <img src={logo} className='header' alt='header'></img>
            </div>
            <div id="up_reserve">
                <Link>
                    <p className='my_s'>RESERVEZ MAINTENANT</p>
                </Link>
            </div>
            <div id='up_profil'>
                {clicked && 
                <div style={{
                    position: 'absolute',
                    marginLeft: '-25%',
                    marginTop: '55px',
                    backgroundColor: 'white',
                    width: '40%',
                    zIndex: 1
                }}>
                    <Link to="/" className='hamtext'>
                       <p className='menoption' onClick={passflase}>Accueil</p>
                    </Link>

                    <Link to="/Hebergement" className='hamtext'>
                    <p className='menoption' onClick={passflase}>Hebergement</p>
                    </Link>
                    <Link to="/Restauration" className='hamtext'>
                        <p className='menoption' onClick={passflase}>Restauration</p>
                    </Link>
                    <Link to="/Tourisme" className='hamtext'>
                        <p className='menoption' onClick={passflase}>Tourisme</p>
                    </Link>
                    <Link to="/Contact" className='hamtext'>
                        <p className='menoption' onClick={passflase}>Contact</p>
                    </Link>
                </div>
                }
                
                <img  src={ham} className='profil' alt='header' onClick={() => clickedTh()}></img>
            </div>
        </MediaQuery>
    </div>
    )

}

export default Header;