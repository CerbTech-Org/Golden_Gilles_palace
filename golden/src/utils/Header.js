import './style/Header.css'
import logo from '../assets/golden_logo.png'
function Header(){
    return(    
    <div id='up_navbar'>
        <div id='up_logo'>
            <img src={logo} className='header' alt='header'></img>
        </div>
        <div id='up_profil'>
            <img src={logo} className='profil' alt='header'></img>
        </div>
    </div>
    )

}

export default Header;