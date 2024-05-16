import React from 'react'
import './Events.css'
import pantas4 from '../../assets/pantas4.jpg'
import pantas2 from '../../assets/pantas2.jpg'
import pantas5 from '../../assets/pantas5.jpg'

const Events = () => {
  return (
    <div className='events'>
        <div className='event'>
            <img src={pantas4} alt=''/>
            <div className="caption">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
               <button className='btn2'>Entradas</button>
            </div>
        </div>
        <div className='event'>
            <img src={pantas2} alt=''/>
            <div className="caption">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
               <button className='btn2'>Entradas</button>
            </div>
        </div>
        <div className='event'>
            <img src={pantas5} alt=''/>
            <div className="caption">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
               <button className='btn2'>Entradas</button>
            </div>
        </div>
    </div>
  )
}

export default Events