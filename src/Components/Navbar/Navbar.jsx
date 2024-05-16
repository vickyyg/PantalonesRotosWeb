import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-pantalones.jpg'
import menu from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo'/>

        <ul className={mobileMenu?'':'mobile-menu'}>
            <li><ScrollLink to='home' smooth={true} offset={0} duration={500}>Inicio</ScrollLink> </li>
            <li><ScrollLink to='events' smooth={true} offset={-260} duration={500}>Eventos</ScrollLink></li>
            <li><ScrollLink to='about' smooth={true} offset={0} duration={500}>Sobre Nosotros</ScrollLink></li>
            <li><ScrollLink to='gallery' smooth={true} offset={-260} duration={500}>Fotos</ScrollLink></li>
            <li><ScrollLink to='music' smooth={true} offset={0} duration={500}>Musica</ScrollLink></li>
            <li><ScrollLink to='contact' smooth={true} offset={-230} duration={500} className='btn'>Contactanos</ScrollLink></li>
        </ul>
        <img src={menu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar