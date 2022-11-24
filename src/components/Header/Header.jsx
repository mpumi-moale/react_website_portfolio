import React from 'react';
import Navbar from '../Navbar';
import HeaderSocial from './HeaderSocial';
import HeaderButtons from './HeaderButtons';


function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>MOALE MPUMELELO <span>Fullstack Developer</span></h1>
            <p className='details'>
            I am an enthusiastic,talented and very hard working individual at WeThinkCode_, where I am completing my final year.
            I have learned the importance of perseverance and hard work, as well as applying classical strategies to modern-day projects. I am passionate about software,  eager to learn and I'm very interested in fullstack and feel like I would thrive at SovTech. I also love multiple  fields Sovtech has which will give me more opportunities to grow and learn.
            I thrive in teams and interact well with other people and I also work well alone. I adapt well to new environments and I pick up new concepts easily. Concentrations in Software engineering provide a broad knowledge of software concepts, and my Experience at WeThinkCode_ taught me how to apply Software engineering concepts to automated systems in both Python and Java. I value innovation and high-quality code
            </p>
                <HeaderSocial/>
                <HeaderButtons/>
        </div>
    </div>
  )
}

export default Header;