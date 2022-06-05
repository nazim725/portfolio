import React from 'react'
import './Services.css'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="services_top mb-5">
            <h6>Features</h6>
            <h2>What services I provide</h2>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="single_service">
              <span className="service_icon">
                <i class="ri-code-line"></i>
              </span>
              <h2>Web design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quisquam, illum ipsa ad consequatur neque quae quam
                laudantium voluptas, vero excepturi fugit omnis non repellendus
                velit placeat quidem! Iusto, rerum.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="single_service">
              <span className="service_icon">
                <i class="ri-code-s-slash-line"></i>
              </span>
              <h2>Frontend Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quisquam, illum ipsa ad consequatur neque quae quam
                laudantium voluptas, vero excepturi fugit omnis non repellendus
                velit placeat quidem! Iusto, rerum.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="single_service">
              <span className="service_icon">
                <i class="ri-code-s-slash-line"></i>
              </span>
              <h2>Backend Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quisquam, illum ipsa ad consequatur neque quae quam
                laudantium voluptas, vero excepturi fugit omnis non repellendus
                velit placeat quidem! Iusto, rerum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
