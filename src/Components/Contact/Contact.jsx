import React from 'react'
import './Contact.css'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aspernatur itaque perspiciatis provident eaque, nostrum cupiditate laboriosam rerum nam adipisci doloribus quam odit assumenda harum expedita ad voluptatem tempora? Ipsa!</p> 
            <ul>
                <li><img src={mail} alt=''/>pantalonesrotos@gmail.com</li>
                <li><img src={location} alt=''/>Don Torcuato,Buenos Aires</li>
            </ul>     
        </div>
        <div className='contact-col'>
          <form>
            <label>Mandanos tu mensaje</label>
            <textarea name='menssage' id='' cols='30' rows='6' placeholder='Manda tu mensaje' required></textarea>
            <button type='submit' className='btn'>Enviar</button>
          </form>
          <span>Enviado</span>
        </div>
    </div>
  )
}

export default Contact