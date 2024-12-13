import './style/Navbar.css'
import {
    Link, useLocation
  } from 'react-router-dom';
import { useEffect } from 'react';
function Navbar()
{
    const pos = useLocation()
    
    function Loading(){
        if (pos.pathname === "/"){
            const ele = document.getElementById("acc")
            ele.style.color = "yellow"
        }
        if (pos.pathname === "/Hebergement"){
            const ele = document.getElementById("Heber")
            ele.style.color = "yellow"
        } 
        if (pos.pathname === "/Hebergement/Reserver"){
            const ele = document.getElementById("Heber")
            ele.style.color = "yellow"
        }
        if (pos.pathname === "/Restauration"){
            const ele = document.getElementById("Restr")
            ele.style.color = "yellow"
        }

        if (pos.pathname === "/tourisme"){
            const ele = document.getElementById("Trisme")
            ele.style.color = "yellow"
        }
        if (pos.pathname === "/contact"){
            const ele = document.getElementById("Contct")
            ele.style.color = "yellow"
        }
    }
    useEffect(() => {
        setTimeout(() => {
            Loading()
        }, 1000);
      });
    return(
        <div id="Nav" onLoad={() => Loading()}>
            <Link to={"/"}>
                <p id="acc" className='firstButton'>Accueil</p>
            </Link>
            <Link to={"/Hebergement"}>
                <p id="Heber" className='Button'>Hébergement</p>
            </Link>
            <Link to={"/Restauration"}> 
                <p className='Button' id="Restr">Restauration</p>
            </Link>
            <Link to={"/tourisme"}>
            <p className='Button' id="Trisme">Tourisme</p>
            </Link>
            <Link to={"/contact"}>
                <p className='Button' id="Contct">Contact</p>
            </Link>
        </div>
    )
}

export default Navbar