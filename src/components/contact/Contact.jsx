import React, { useRef, useState } from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";

import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: 'Email',
    info: 'ap56store@gmail.com',
  },
  {
    id: 2,
    icon: <FaGithub />,
    title: 'GitHub',
    info: 'mohamedelsaid-dev',
    link: 'https://github.com/mohamedelsaid-dev',
  },
  {
    id: 3,
    icon: <CiLinkedin />,
    title: 'LinkedIn',
    info: 'Mohamed Elsaid',
    link: 'https://www.linkedin.com/in/mohamed-elsaid-865aa638b',
  },
];

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus('Sending...');

    emailjs.sendForm(
      'default_service',
      'template_6oue5uy',
      form.current,
      {
        publicKey: 'ZIGjfP3K6W3kZ8XAc',
      }
    )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="contac" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}

              <h4>{title}</h4>
              <h5>{info}</h5>

              {title === 'Email' ? (
                <a href="#contact-form" className="contact_button">
                  Send Email
                </a>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Message
                </a>
              )}
            </article>
          ))}
        </div>

        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows={10}
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {status && (
            <p className="form_status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;