import React from 'react'
import './home.css'
import Me from '../../assets/me.png'
import CV from '../../assets/Mohamed_Elsaid_Frontend_Developer_CV.pdf'
import HomeSocials from './HomeSocials'


function Home() {
    return (
        <div className='home'>
            <div className="container home_container">
                <h4>Hello I'am</h4>
                <h1>Mohamed Elsaid</h1>
                <h4 className='text-light'>Frontend Developer</h4>

                <div className="btns">

                    <a
                        href={CV}
                        download="Mohamed_Elsaid_Frontend_Developer_CV.pdf"
                        className="btn"
                    >
                        Download CV
                    </a>

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >
                        Let's Talk
                    </a>

                </div>

                <div className="me">
                    <img src={Me} alt="" />
                </div>
                <a href="#about" className='scroll_down'>scroll Down</a>
                <HomeSocials />

            </div>
        </div>
    )
}
export default Home
