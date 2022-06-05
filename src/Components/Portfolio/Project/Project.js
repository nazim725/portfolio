import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
  const { name, liveLink, id, img } = project
  console.log(project)
  return (
    // <div>
    //   {' '}
    //   <div className="portfolio_card">
    //     <div className="portfolio_img">
    //       <img
    //         src="https://i.ibb.co/YpZzXB0/mahima-motors.jpg"
    //         alt=""
    //         className="w-100"
    //       />
    //     </div>
    //     <div className="portfolio_content">
    //       <div className="content_top">
    //         <h6>Frontend Development</h6>
    //         <a href="">View Link</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // ------------------------------------
    <div>
      <div className="project_container">
        <img src={img} alt="" />
        <div className="info">
          <div className="project_content">
            <h3>{name}</h3>
            <button className="btn">
              <a target="_blank" href={liveLink}>
                {' '}
                Live Link
              </a>
            </button>
            <button className="ms-2 btn">
              <Link to={`/projectDetails/${id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
