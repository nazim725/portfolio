import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Project from '../Project/Project'
import './MoreProject.css'

const MoreProject = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/nazim725/project/posts')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])
  return (
    <section id="">
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
              .slice(6, 15)}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default MoreProject
