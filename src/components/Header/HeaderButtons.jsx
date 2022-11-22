import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className='header-btns'>
        <a href="#contact" className='cv-btn'>Hire me</a>
        <a href={CV} className='cv-btn1' target='_blank'>Download CV</a>

    </div>
  )
}

export default CTA