import React from 'react'
import './services.css'


import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";



function Services() {
  return (
    <section id='services'>
      <div className="top_section">
        <h5>what I Offer</h5>
        <h2>Services</h2>
      </div>


      <div className="container container_services">
        <article className='card'>
          < FaCode className='icon' />
          <h3>Frontend Development</h3>
          <p className='text-light'>
            Building modern responsive web applications using React.js,
            JavaScript, HTML5, and CSS3 with reusable components.
          </p>

        </article>


        <article className='card'>
          <FaReact className='icon' />
          <h3>React Development</h3>
          <p className='text-light'>
            Developing React applications using Hooks, Context API,
            React Router, REST APIs, and Axios integration.</p>
        </article>

        <article className='card'>
          <GrSecure className='icon' />
          <h3>Secure Frontend </h3>
          <p className='text-light'>
            Building responsive interfaces with clean code practices and security awareness, including common web vulnerabilities.</p>
        </article>




      </div>

    </section>

  )
}

export default Services