import { useState } from 'react';
import './style/Navbar.css'
import {
    Link
  } from 'react-router-dom';
function Navbar()
{
    const changeFunc = []
    const colList = []
    var name = 1
    return(
        <div id="Nav">
            <Link to={"/"}>
                <p className='firstButton'>Acceuil</p>
            </Link>
            <Link to={"/Hebergement"}>
                <p className='Button'>Hébergement</p>
            </Link>
            <Link to={"/Restauration"}>
                <p className='Button'>Restauration</p>
            </Link>
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