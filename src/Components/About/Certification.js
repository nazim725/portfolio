import React from 'react'
import './Certification.css'
import Fade from 'react-reveal/Fade'

const Certification = () => {
  return (
    <Fade right>
      <div className="award_container d-flex align-items-center gap-5">
        <div className="single_award w-50">
          <h5 className="award_title">
            COMPLETE WEB DEVELOPMENT WITH JHANKAR MAHBUB FROM PROGRAMMING HERO
          </h5>
          <p className="mt-3 ">
            Location: <span className="text-info fw-bold">Online</span>
          </p>
          <p>
            Institute:{' '}
            <span className="text-info fw-bold"> Programming Hero</span>
          </p>
          <p>
            Duration:<span className="text-info fw-bold"> 6 Month</span>
          </p>
        </div>
        <div className="single_award w-50">
          <h5 className="award_title">
            COMPLETE WEB DEVELOPMENT BOOTCAMP (React JS & Node JS ) FROM UDEMY
          </h5>
          <p className="mt-3">
            Location: <span className="text-info fw-bold"> Online</span>
          </p>
          <p>
            Institute: <span className="text-info fw-bold">Udemy</span>
          </p>
          <p>
            Duration: <span className="text-info fw-bold"> 3 Month</span>
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default Certification
