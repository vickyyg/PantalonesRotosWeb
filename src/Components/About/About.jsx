import React from 'react'
import './About.css'
import aboutimg from '../../assets/pantas3.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        
            <img src={aboutimg} alt='' className='about-img'/>
        </div>
        <div className="about-right">
            <h1>"Pantalones Rotos"</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis sequi sint doloribus doloremque expedita non repellendus. Dolorum obcaecati saepe voluptatem nihil labore cum ea excepturi! Tenetur molestiae placeat esse.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi reiciendis natus? Sit saepe optio omnis voluptatibus repudiandae voluptas a placeat eum ex ullam iure in doloremque atque, quod delectus!</p>

        </div>
    </div>
    
  )
}

export default About