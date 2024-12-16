import './style/card.css'
import { Link, } from 'react-router-dom';
function Card({title, description, image_src, margin_left, margin_top}){
    var whe = '';
            if (title === "Hébergement")
                whe = "/Hebergement"
            if (title === "Tourisme")
                whe = '/tourisme'
            if (title === "Restauration")
                whe = 'Restauration'
    return(
        <div id="card">
            <img src={image_src} className='logoImg' alt='logoImg'></img>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <Link to={whe}>
                <p id="det" className='detail'>PLUS DE DETAILS</p>
            </Link>
        </div>
    )
}

export default Card