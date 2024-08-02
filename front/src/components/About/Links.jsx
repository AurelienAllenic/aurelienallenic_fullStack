/* eslint-disable */
import React from 'react'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-scroll'
const Links = () => {
  return (
    <>
      <article className='container_links'>
        <ul className='list_links'>
            <li className='link_home'><a href="https://github.com/AurelienAllenic?tab=repositories" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
            <li className='link_home'><Link to="contact" target="_blank" rel="noreferrer"><AiOutlineMail/></Link></li>
            <li className='link_home'><a href="https://www.linkedin.com/in/aur%C3%A9lien-allenic2000" target="_blank" rel="noreferrer"><AiFillLinkedin/></a></li>
        </ul>
      </article>
    </>
  )
}

export default Links
