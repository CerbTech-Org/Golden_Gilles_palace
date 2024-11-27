import './style/Header.css'
import profil from '../assets/profil.png'
import logo from '../assets/golden_logo.png'
function Header(){
    return(    
    <div id='up_navbar'>
        <div id='up_logo'>
            <img src={logo} className='header'></img>
        </div>
        <div id='up_profil'>
            <img src={profil} className='profil'></img>
        </div>
    </div>
    )

}

export default Header;