import React from 'react'
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub'
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'

function Footer() {
  return (
    <div className = 'footer'>
      <div className='footer-link-list-div'>
        <ul className='footer-link-list'>
          <li className='footer-link'>
            <a href="https://github.com/Aloysius172"><AiOutlineGithub className='github-icon'/></a>
          </li>
          <li className='footer-link'>
            <a href=""><AiFillLinkedin className='linkedin-icon'/></a>
          </li>
          <li className='footer-link'>
            <a href="mailto:aloysius.ekezie1@gmail.com"><AiOutlineMail className='email-icon'/></a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}
export default Footer