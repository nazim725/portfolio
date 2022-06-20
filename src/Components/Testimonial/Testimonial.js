import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick/lib/slider'
import './Testimonial.css'

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  }
  return (
    <section className='testimonial' id="testimonial">
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>Works Review</h2>
          </Col>
          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className="single_testimonial">
                  <div className="review_img">
                    <img
                      src="https://pps.whatsapp.net/v/t61.24694-24/285457043_185652757131915_8555038436131594879_n.jpg?ccb=11-4&oh=01_AVzTWCeRdLBB6bwTzRNe1kPftmsZEiXJf0yKuHmzsu0wAA&oe=62AAD3EC"
                      alt=""
                    />
                  </div>
                  <p className="mt-4">
                    Very good experience. Project was delivered to the
                    specification and on time. Communication was handled well
                    and updates regularly delivered.
                  </p>

                  <h6>Irfan Habib</h6>
                  <p>Node JS Developer</p>
                  <p>Aventra consultant,Dhaka</p>
                </div>
              </div>

              <div>
                <div className="single_testimonial">
                  <div className="review_img">
                    <img
                      src="https://scontent.fcgp13-1.fna.fbcdn.net/v/t31.18172-8/26678561_1932101727007565_7767238781626279289_o.jpg?stp=c0.34.206.206a_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeGZOLOOlGF6cb3tXgInNZ2Ok910WQXVi_ST3XRZBdWL9C9fkW9vQWStx4CtGZFd8rdJD44DtT8nVevU9xQ0wAQs&_nc_ohc=QnSM0ejOTzgAX9V10J6&_nc_ht=scontent.fcgp13-1.fna&oh=00_AT8u2_NA8qiGqCw3PaGcb0zmR3tqsCpSVdRmWAS-PDi1Ag&oe=62C21F8D"
                      alt=""
                    />
                  </div>
                  <p className="mt-4">
                    Very good experience. Project was delivered to the
                    specification and on time. Communication was handled well
                    and updates regularly delivered.
                  </p>

                  <h6>Shahed Chy Sujan</h6>
                  <p>Junior Software Engineer</p>
                  <p>Bug Finder,Dhaka</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
