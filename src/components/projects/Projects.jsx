import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'React E-commerce Application',
    github: 'https://github.com/mohamedelsaid-dev/react-ecommerce',
    demo: 'https://react-ecommerce-mohamed.vercel.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/mohamedelsaid-dev/portfolio',
    demo: 'portfolio-mohamedelsaid.vercel.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Item 3',
    github: 'https://github.com/mohamedelsaid-dev/javascript-crud-app',
    demo: 'https://javascript-crud-app-six.vercel.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Item 4',
    github: 'https://github.com/project4',
    demo: 'https://demo4.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Item 5',
    github: 'https://github.com/project5',
    demo: 'https://demo5.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Item 6',
    github: 'https://github.com/project6',
    demo: 'https://demo6.com'
  }
];

function Projects() {
  return (
    <section className='projects' id='projects'>

      <div className="top_section">
        <h5>My Recent work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="container projects_container">

        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className='portfolio_item'>
            <div className="portfolio_item_img">
              <img src={image} alt="" />
            </div>

            <h3>{title}</h3>

            <div className="portfolio_item_btns">
              <a href={github} target="_blank" className="btn">Github</a>
              <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>

            </div>

          </article>
        ))}


      </div>

    </section>
  )
}

export default Projects