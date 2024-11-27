import './style/Navbar.css'
import {
    BrowserRouter as Router,
    Routes, Route,
    Link
  } from 'react-router-dom';
import Contact from './Contact';
function Navbar()
{
    return(
        <div id="Nav">
            <Link to={"/"}>
                <p className='firstButton'>Acceuil</p>
            </Link>
            <p className='Button'>Hébergement</p>
            <p className='Button'>Restauration</p>
            <Link to={"/tourisme"}>
            <p className='Button'>Tourisme</p>
            </Link>
                <Link to={"/contact"}>
                    <p className='Button'>Contact</p>
                </Link>
        </div>
    )
}

export default Navbar