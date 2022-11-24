import React from 'react'
import CV from '../../assets/CV.pdf'
import {Link} from 'react-scroll';

function CTA() {
  return (
    <div className='header-btns'>
       <Link to='contact' className='cv-btn' smooth={true} duration={1000} >Hire Me</Link>
        {/* <a href="#contact" className='cv-btn' smooth={true} duration={2000} >Hire me</a>  */}
        <a href={CV} className='cv-btn1' target='_blank'>Download CV</a>

    </div>
  )
}

export default CTA