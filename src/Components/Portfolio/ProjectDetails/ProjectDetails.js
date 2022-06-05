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
            <a target="_blank" href={project.liveLink}>
              <button className="btn btn-success mt-3 mb-3">
                Live Site Link
              </button>
            </a>
            <a target="_blank" href={project.clientLink}>
              <button className="btn btn-success ms-3 mt-3 mb-3">
                Client Site Link
              </button>
            </a>
            <a target="_blank" href={project.serverLink}>
              <button className="btn btn-success ms-3 mt-3 mb-3">
                Server Site Link
              </button>
            </a>
          </div>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <img src={project.img2} alt="" width="100%" height="100%" className='details-img'/>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <img src={project.img1} alt="" width="100%" height="100%"  className='details-img ms-4'/>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <img src={project.img3} alt="" width="100%" height="100%"  className='details-img ms-5'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectDetails
