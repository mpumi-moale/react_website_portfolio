import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {VscGithubAlt} from 'react-icons/vsc';
import {FiGitlab} from 'react-icons/fi';

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a className ='linkedin' href="https://www.linkedin.com/in/mpumelelo-moale-30a879149/" target='_blank'><SlSocialLinkedin size='2rem'/></a>
        <a className='github' href="https://github.com/mpumi-moale/" target='_blank'><VscGithubAlt size='2rem'/></a>
        <a className='gitlab' href="https://gitlab.com/moale_mpumi" target='_blank'><FiGitlab size='2rem'/></a>
    </div>
  )
}

export default HeaderSocial