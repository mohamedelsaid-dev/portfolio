import React from 'react';

import './skills.css';

import CSS from '../../assets/css3.svg';
import Javascript from '../../assets/javascript.svg';
import ReactJs from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';

import {
  SiAxios,
  SiGithub,
} from 'react-icons/si';

const skillsData = [
  {
    id: 1,
    image: ReactJs,
    title: 'React.js',
    disc: 'Frontend Development',
  },

  {
    id: 2,
    image: ReactJs,
    title: 'React Hooks',
    disc: 'State Management',
  },

  {
    id: 3,
    image: ReactJs,
    title: 'Context API',
    disc: 'State Management',
  },

  {
    id: 4,
    image: CSS,
    title: 'CSS3',
    disc: 'User Interface',
  },

  {
    id: 5,
    image: Javascript,
    title: 'JavaScript',
    disc: 'ES6+ Programming',
  },

  {
    id: 6,
    image: Tailwind,
    title: 'Tailwind CSS',
    disc: 'Responsive UI',
  },

  {
    id: 7,
    icon: <SiAxios size={50} />,
    title: 'REST APIs & Axios',
    disc: 'API Integration',
  },

  {
    id: 8,
    icon: <SiGithub size={50} />,
    title: 'Git & GitHub',
    disc: 'Version Control',
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">

        {skillsData.map(({ id, image, icon, title, disc }) => (
          <article key={id} className="card_skill">

            <div className="icon">
              {image ? (
                <img src={image} alt={title} />
              ) : (
                icon
              )}
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Skills;