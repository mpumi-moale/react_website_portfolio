import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/rr.png';

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='main' className='logo'>
                <img src={logo} alt='logo' smooth={true} duration={2000} />
            </Link>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><><Link to='main' className='active' smooth={true} duration={1000} >Home</Link></></li>
                <li><><Link to='about-me' smooth={true} duration={1000} >about me</Link></></li>
                <li><><Link to='contact' smooth={true} duration={1000} >Contact</Link></></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;