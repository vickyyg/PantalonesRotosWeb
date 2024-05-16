import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/pantas6.jpg'
import gallery2 from '../../assets/pantas7.jpg'
import gallery3 from '../../assets/pantas8.jpg'
import gallery4 from '../../assets/pantas9.jpg'



const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="photos">
            <img src={gallery1} alt=''/>
            <img src={gallery2} alt=''/>
            <img src={gallery3} alt=''/>
            <img src={gallery4} alt=''/>
        </div>
        <button className='btn'>Ver mas fotos aqui</button>
    </div>
  )
}

export default Gallery 