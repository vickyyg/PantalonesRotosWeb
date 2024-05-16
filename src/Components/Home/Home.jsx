import React from 'react'
import './Home.css'
import spotify from '../../assets/spotify-icon.png'

export const Home = () => {
  return (
    <div className='home container'>
        <div className='home-text'>
            <h1>Pantalones Rotos</h1>
            <button className='btn1'>Ir a Spotify <img src={spotify} alt=''/> </button>
        </div>

    </div>
  )
}
