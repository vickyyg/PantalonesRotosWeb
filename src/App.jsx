import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import Events from './Components/Events/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Music from './Components/Music/Music'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer.jsx/Footer'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <div className="container">
        <Title title='Proximas Fechas' subTitle='Saca tu entrada' />
        <Events/>
        {/* <Title title='Sobre nosotros'/> */}
        <About/>
        <Title title='Galeria' subTitle='Fotos de eventos' />
        <Gallery/>
        <Title title='Musica & Videos' subTitle='Ultimos lanzamientos' />
        <Music/>
        <Title title='Contactanos'/>
        <Contact/> 
        <Footer/>
      </div>
      
    </div>
  )
}


export default App