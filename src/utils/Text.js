import './style/Text.css'

function Text({Title, el_one, el_two, el_three, el_four, el_five}){
    return(
        <div id="text">
            <h1 className='tit'>{Title}</h1>
            <p className='line'>{el_one}</p>
            <p className='line'>{el_two}</p>
            <p className='line'>{el_three}</p>
            <p className='line'>{el_four}</p>
            <p className='line'>{el_five}</p>
        </div>
    )
}

export default Text