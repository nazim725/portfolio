import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import Project from './Project/Project'

const Portfolio = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/nazim725/project/posts')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          <div className="portfolio-container">
            
            {projects
              .map((project) => (
                <Project key={project.id} project={project}></Project>
              ))
              .slice(0, 6)}
          </div>
        </Row>
      </Container>
      <div className='text-center mt-5 more-button'>
        <Link to="/moreProject">
          <button>See More Projects <i class="ri-edit-box-line ms-2 pt-2"></i></button>
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
