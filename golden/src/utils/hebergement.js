import './style/hebergement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img_o from '../assets/chamber_one.jpg'
import img_t from '../assets/IMG-20241019-WA0092.jpg'
import img_th from '../assets/IMG-20241019-WA0091.jpg'
import img_tc from '../assets/IMG-20241019-WA0090.jpg'
import img_tf from '../assets/IMG-20241019-WA0083.jpg'
import img_ts from '../assets/IMG-20241019-WA0082.jpg'
import img_tse from '../assets/IMG-20241019-WA0086.jpg'
import img_thei from '../assets/IMG-20241019-WA0085.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Hebergement(){
    var diapo = [img_o, img_t, img_tc, img_th, img_tf, img_ts, img_tse, img_thei]
    function moins(){
        if (num > 0)
            setNum(num - 1)
        else
            setNum(diapo.length - 1)
    }
    function plus(){
        if (num < diapo.length - 1)
            setNum(num + 1)
        else
            setNum(0)
    }
    const [num, setNum] = useState(0)
    return(
        <div>
        <div id='heberg'>
            <p className='heberg_text'>Nos hébergements</p>
            <div id='arrow'>
                <FontAwesomeIcon onClick={moins} color='white' icon={faArrowLeft} id='left'/>
                <FontAwesomeIcon onClick={plus} color='white' icon={faArrowRight} id='right'/>
            </div>
        </div>
            <figure>
                <img alt='img_diapo' className='img_diapo' src={diapo[num]}></img>
                <figcaption className='border'></figcaption>
            </figure>
            <div id='foot'>
                <p className='chambredouble'>CHAMBRE DOUBLE</p>
                <Link to="/Hebergement">
                    <p className='reserv'>VOIR LES DETAILS</p>
                </Link>
            </div>
        </div>
    )
}
export default Hebergement;