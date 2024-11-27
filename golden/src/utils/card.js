import './style/card.css'

function Card({title, description, image_src, margin_left, margin_top}){
    return(
        <div id="card" style={{
            marginLeft: margin_left,
            marginTop: margin_top
        }}>
            <img src={image_src} className='logo'></img>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <p className='detail'>PLUS DE DETAILS</p>
        </div>
    )
}

export default Card