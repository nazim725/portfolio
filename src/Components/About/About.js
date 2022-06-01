import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import Certification from './Certification'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const About = () => {
  const [aboutFilter, setAboutFilter] = useState('ABOUT')
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className="about_btn about_btn-active"
                onClick={() => setAboutFilter('ABOUT')}
              >
                About Me
              </button>
              <button
                className="about_btn"
                onClick={() => setAboutFilter('EXPERIENCE')}
              >
                Experience
              </button>
              <button
                className="about_btn"
                onClick={() => setAboutFilter('EDUCATION')}
              >
                Education
              </button>

              <button
                className="about_btn"
                onClick={() => setAboutFilter('SKILLS')}
              >
                Skills
              </button>
              <button
                className="about_btn"
                onClick={() => setAboutFilter('CERTIFICATION')}
              >
                Certification
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === 'ABOUT' && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img
                    src="https://nazimuddinportfolio.netlify.app/static/media/Picture_of_Nazim_Uddin__1___1_-removebg-preview.7878be0c.png"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="about_content w-75">
                  <h2>I'm Muhammad Nazim Uddin</h2>
                  <p>
                    I Have completed BSc In Computer Science And Engineering
                    from International Islamic University Chittagong.I am also
                    Hafez Of holy Quran. A versatile And responsible person With
                    knowledge and background in Computer Science and
                    Engineering.I am A hard working,honest and individual.I am a
                    good timekeeper and always willing to learn new things and
                    skills.I have a creative mind and always up for new
                    challanges.
                  </p>
                  <div className="social_links">
                    <h6 className="mb-4">Contact With Me:</h6>
                    <span>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/kajol.kalo.923/"
                      >
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/nazimuddin77/"
                      >
                        <i class="ri-linkedin-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a target="_blank" href="https://github.com/nazim725">
                        <i class="ri-github-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a target="_blank" href="01830082347">
                        <i class="ri-whatsapp-line"></i>
                      </a>
                    </span>
                    <span>
                      <a target="_blank" href="https://twitter.com/NazimHabib6">
                        <i class="ri-twitter-fill"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === 'EDUCATION' && <Education />}
            {aboutFilter === 'SKILLS' && <Skills />}
            {aboutFilter === 'CERTIFICATION' && <Certification />}
            {aboutFilter === 'EXPERIENCE' && <Experience />}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
