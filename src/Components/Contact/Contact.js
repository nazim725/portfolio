import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from '../Form/Form'
import './Contact.css'

const Contact = () => {
 
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact-info-container d-flex align-items-center">
              <div className="single_info_box w-50">
                <h6>
                  {' '}
                  <i class="ri-map-pin-line me-1"></i> Address
                </h6>
                <p>Raozan,Chittagong</p>
              </div>
              <div className="single_info_box w-50">
                <h6>
                  <i class="ri-phone-fill me-1"></i>Phone
                </h6>
                <p>+880 1830082347</p>
              </div>
            </div>
            <div className="contact-info-container d-flex align-items-center">
              <div className="single_info_box w-50">
                <h6>
                  <i class="ri-mail-fill me-1"></i> Email
                </h6>
                <p>nazimhabib77@gmail.com</p>
              </div>
              <div className="single_info_box w-50">
                <h6>
                  {' '}
                  <i class="ri-map-pin-2-fill me-1"></i>Location
                </h6>
                <p>Raozan,Chittagong</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
