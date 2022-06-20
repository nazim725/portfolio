import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Header from '../../Header/Header'
import Navigation from '../../Navigation/Navigation'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const [project, setProject] = useState({})
  console.log(projectId)
  const url = `https://my-json-server.typicode.com/nazim725/project/posts/${projectId}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProject(data)
        console.log(data)
      })
  }, [projectId])

  console.log('tech', project.technology)
  return (
    <div className="pb-5">
      <Navigation />
      <Container>
        <Row>
          <h3 className="text-warning mb-3" style={{ letterSpacing: '2px' }}>
            {' '}
            {project.name}
          </h3>

          <p className="text-info description" style={{ letterSpacing: '2px' }}>
            {project.description}
          </p>
          <div>
            <h2 className="my-3 fw-bold text-warning">Technologies</h2>
            {project.technology?.map((tech) => (
              <div className="technology">
                {' '}
                <button className="tec-button">{tech.name}</button>
              </div>
            ))}
          </div>

          <div className="link-div">
            <a target="_blank" href={project.liveLink}>
              <button className="tec-button">Live Site Link</button>
            </a>
            <a target="_blank" href={project.clientLink}>
              <button className="tec-button">Client Site Link</button>
            </a>
            <a target="_blank" href={project.serverLink}>
              <button className="tec-button">Server Site Link</button>
            </a>
          </div>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <div className='d-img'>
              <img
                src={project.img2}
                alt=""
                width="100%"
                height="100%"
                className="details-img"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <div className='d-img'>
              <img
                src={project.img1}
                alt=""
                width="100%"
                height="100%"
                className="details-img"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <div className="d-img">
              <img
                src={project.img3}
                alt=""
                width="100%"
                height="100%"
                className="details-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectDetails
