import './style/ContactUs.css'

export default function Us(){
    return(
        <div id='formulaire'>
            <form method='POST' id='my_form'>
                <h1 className='title_text'>Contactez-Nous</h1>
                <label className='text'>Nom Complet</label>
                <input type='text' className='simple'></input>
                <label className='text'>Email</label>
                <input type='text' className='simple'></input>
                <label className='text'>Message</label>
                <input type='text' className='message'></input>
                <div id="send_button">
                    <p className='yellow'>ENVOYER LE MAIL</p>
                </div>
            </form>
        </div>
    )
}