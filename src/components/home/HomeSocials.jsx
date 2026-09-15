import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


function HomeSocials() {
  return (
    <div className='home_socials'>
      <a href="https://www.linkedin.com/in/mohamed-elsaid-865aa638b" target='_blank'><FaLinkedin /> </a>
      <a href="https://github.com/mohamedelsaid-dev" target='_blank'> <FaGithub /> </a>
      <a href="#" target='_blank'> <FaDribbble /> </a>
      <a href="#" target='_blank'></a>



    </div>
  )
}

export default HomeSocials