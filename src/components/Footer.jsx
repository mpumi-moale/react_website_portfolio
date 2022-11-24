import React from 'react'
import {Link} from 'react-scroll';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <ul className='permalinks'>
            <li><><Link to='main' smooth={true} duration={1000} >Home</Link></></li>
            <li><><Link to='about-me' smooth={true} duration={1000} >about me</Link></></li>
            <li><><Link to='contact' smooth={true} duration={1000} >Contact</Link></></li>
        </ul>

        <div className="footer_socials">
            <a href="https://www.facebook.com/mpumi.moale" target='_blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/mpumi_moale/" target='_blank'><FiInstagram/></a>
            <a href="https://twitter.com/moalempumi5" target='_blank'><AiOutlineTwitter/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; MOALE MPUMELELO</small>

        </div>
    </footer>
  )
}

export default Footer