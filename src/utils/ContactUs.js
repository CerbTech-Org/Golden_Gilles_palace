import { useState } from 'react';
import './style/ContactUs.css'
import emailjs from 'emailjs-com'
export default function Us(){
    const [each, setEach] =  useState(0)
    function xender(){
        if (each === 0){
        emailjs.init('3yD_3mK4P-9lXu5mf');
        document.getElementById('send_button').addEventListener('click', function(event) {
            event.preventDefault();
            var t_name = document.getElementById('username')
            var t_email = document.getElementById('useremail')
            var t_message = document.getElementById('usermessage')
            if (t_name.value === ''){
                t_name.style.borderColor = 'red';
                t_name.ariaPlaceholder = 'Please write your name here'
            }
            else if (t_email.value === ''){
                t_email.style.borderColor = 'red';
                t_email.ariaPlaceholder = 'Please write your email here'
            }
            else if (t_message.value === ''){
                t_message.style.borderColor = 'red';
                t_message.ariaPlaceholder = 'Please write your message here'
            }
            else {
                var templateParams = {
                    name: t_name.value,
                    email: t_email.value,
                    message: t_message.value
                }
                alert('template name' + templateParams.name)
                emailjs.send('service_j4t067u', 'template_xenqup4', templateParams)
                .then(function(response) {
                    t_name.value = ""
                    t_email.value = ""
                    t_message.value = ""
                t_email.style.borderColor = 'black';
                t_message.style.borderColor = 'black';
                t_name.style.borderColor = 'black';
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    alert('Failed to send message. Please try again.');
                    console.error('FAILED...', error);
                });
            }
            });
            setEach(1);
        }
        }
    return(
        <div id='formulaire'>
            <form method='POST' id='my_form'>
                <h1 className='title_text'>Contactez-Nous</h1>
                <label className='text'>Nom Complet</label>
                <input type='text' className='simple' id='username'></input>
                <label className='text'>Email</label>
                <input type='text' id='useremail' className='simple'></input>
                <label className='text'>Message</label>
                <input type='text' className='message' id='usermessage'></input>
                <div id="send_button" onClick={() => xender()}>
                    <p className='yellow'>ENVOYER LE MAIL</p>
                </div>
            </form>
        </div>
    )
}