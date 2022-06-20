import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'
import Zoom from 'react-reveal/Zoom'

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
    <Zoom>
      <div className="project">
        <div className="project_container">
          <img src={img} alt="" />
          <div className="info">
            <div className="project_content">
              <h3>{name}</h3>
              <div className="d-flex ">
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
      </div>
    </Zoom>
  )
}

export default Project
