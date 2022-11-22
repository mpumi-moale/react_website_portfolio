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
            <a href="https://facebook.com"><FaFacebookF/></a>
            <a href="https://Instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com"><AiOutlineTwitter/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; MOALE MPUMELELO</small>

        </div>
    </footer>
  )
}

export default Footer