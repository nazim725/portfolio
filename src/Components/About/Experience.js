import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience_wrapper">
      <h5 className="fs-2 fw-bold text-info mb-3">Experience</h5>

      <Row>
        <Col className="col-4 ">
          <h6>
            <span className="title_name">Company name : </span>
          </h6>
          <h6 className="mt-3">
            <span className="title_name ">Company Address:</span>
          </h6>
          <h6 className="mt-3">
            <span className="title_name">Job Title:</span>
          </h6>
          <h6 className="mt-3">
            <span className="title_name">Work Type:</span>
          </h6>
          <h6 className="mt-3">
            <span className="title_name">Duration:</span>
          </h6>
          <h6 className="mt-3">
            <span className="title_name">Job Responsibilities:</span>
          </h6>
        </Col>
        <Col className="col-8">
          <h6 className="title_value">
            <span> Red Positive OPC Ltd.</span>
          </h6>
          <h6 className="title_value mt-4">
            <span>Rajsthan, India</span>
          </h6>
          <h6 className="title_value mt-4">
            <span>Full Stack Web Developer (MERN)</span>
          </h6>
          <h6 className="title_value mt-3">
            <span>Remote</span>
          </h6>
          <h6 className="title_value mt-4">
            <span>1st January 2022 - 1st May 202</span>
          </h6>
          <h6 className="title_value mt-4">
            <span className='lh-base'>
              There I learned to apply my knowledge of JavaScript, React, HTML,
              CSS, Bootstrap, Nodejs, Redux, and more. Here I also created a
              brand new front-end system and Improved the back-end by giving it
              a new look and feel.
            </span>
          </h6>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <button className="btn btn-warning text-dark fw-bold mt-4 ml-auto">
          <a
            href="https://drive.google.com/file/d/19bPCFbASaRkhPE9AGpfJ_Edg98Cb7Fwf/view?usp=sharing"
            className="text-decoration-none"
            target="_blank"
          >
            Download Certificate
          </a>
        </button>
      </div>
    </div>
  )
}

export default Experience
