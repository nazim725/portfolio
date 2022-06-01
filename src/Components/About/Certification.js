import React from 'react'
import './Certification.css'

const Certification = () => {
  return (
    <div className="award_container d-flex align-items-center gap-5">
      <div className="single_award w-50">
        <div className="award_year">2021</div>
        <h5 className="award_title">
          COMPLETE WEB DEVELOPMENT WITH JHANKAR MAHBUB FROM PROGRAMMING HERO
        </h5>
        <p className="mt-2">
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
        <div className="award_year">2021</div>
        <h5 className="award_title">
          COMPLETE WEB DEVELOPMENT BOOTCAMP (React JS & Node JS ) FROM UDEMY
        </h5>
        <p className="mt-2">
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
  )
}

export default Certification
