import React from 'react'
import './about.css'
import IMageME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />

              <h5>Experience</h5>
              <small>Junior Frontend Developer</small>
            </div>
            <div className="about_card">
              <FiUsers className='about_icon' />

              <h5>Skills</h5>
              <small>React  & JavaScript </small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className='about_icon' />

              <h5>Projects</h5>
              <small>10+ Completed</small>
            </div>
          </div>

          <p>
            I am a Junior Frontend Developer specialized in building modern and
            responsive web applications using React.js, JavaScript, HTML5, and CSS3.

            I have hands-on experience developing real-world projects, including a
            complete React E-commerce application and a personal Portfolio website,
            along with CRUD applications using React and JavaScript.

            I focus on creating clean, reusable components, responsive user interfaces,
            and efficient solutions using React Hooks, Context API, REST APIs, and Axios.

            I also have a strong interest in web security and understand security
            concepts such as XSS, SQL Injection, and IDOR, helping me build more
            secure frontend applications.
          </p>

          <a href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About