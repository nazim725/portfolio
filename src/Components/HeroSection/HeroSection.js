import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HeroSection.css'
import Typewriter from 'typewriter-effect'
import Zoom from 'react-reveal/Zoom'

const HeroSection = () => {
  return (
    <Zoom>
      <section>
        <Container className="hero_section " id="home">
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="mb-3">Welcome to my world!!</p>
                <h5 className="mb-4">Hi</h5>
                <h2 className="her_title mb-4 d-flex">
                  <span className="text-white fw-bold"> I 'm</span>
                  <span className="ms-3">
                    <Typewriter
                      options={{
                        strings: [
                          'A MERN Stack Developer',
                          'A React Developer',
                          'A Junior Web Developer',
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h2>
                <Zoom right cascade>
                  <p>
                    A very passionate, hardworking, curious Junior Web
                    Developer. A Versatile And Responsible Person With Knowledge
                    And Background In Computer Science And Engineering.Intend to
                    work in a challenging and competitive web development
                    environment where a strong sense of responsibility and
                    commitment are required.To build a career out of my passion,
                    dedication, and hard work, and to explore new technological
                    features in the tech industries.
                  </p>
                </Zoom>

                <div className="more-button">
                  <button className="">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1-a5QH0lt7yTEY9S-7cjULgpOWwuwzKkL/view?usp=sharing"
                      className="fw-bold text-white text-decoration-none"
                    >
                      Download CV{' '}
                      <i class="ri-download-2-line fw-bold ms-2"></i>
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* <Col lg="6" md="6">
            <div className="hero_img">
              <img
                src="https://nazimuddinportfolio.netlify.app/static/media/Picture_of_Nazim_Uddin__1___1_-removebg-preview.7878be0c.png"
                alt=""
                className="w-100"
              />
            </div>
          </Col> */}
            <Col lg="6" md="6">
              <div className="hero_img">
                <div className="box">
                  <div className="content">
                    <img
                      src="https://nazimuddinportfolio.netlify.app/static/media/Picture_of_Nazim_Uddin__1___1_-removebg-preview.7878be0c.png"
                      alt=""
                      className="mt-2"
                    />
                    <h2>
                      Web Developer <br /> <span>Frontend Developer</span>
                    </h2>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1-a5QH0lt7yTEY9S-7cjULgpOWwuwzKkL/view?usp=sharing"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Zoom>
  )
}

export default HeroSection
