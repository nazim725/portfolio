import React from 'react'
import './Skills.css'
import Fade from 'react-reveal/Fade'

const frontendSkills = [
  {
    title: 'Javascript',
    width: '80%',
    percentage: '80%',
  },
  {
    title: 'React.js',
    width: '85%',
    percentage: '85%',
  },
  {
    title: 'Redux',
    width: '60%',
    percentage: '60%',
  },
  {
    title: 'Next.js',
    width: '50%',
    percentage: '50%',
  },
  {
    title: 'Material UI',
    width: '85%',
    percentage: '85%',
  },
  {
    title: 'Bootstrap',
    width: '90%',
    percentage: '90%',
  },
  {
    title: 'Tailwind CSS',
    width: '60%',
    percentage: '60%',
  },
]
const backendSkills = [
  {
    title: 'Node.js',
    width: '80%',
    percentage: '80%',
  },
  {
    title: 'Express Js',
    width: '80%',
    percentage: '80%',
  },
  {
    title: 'MongoDB',
    width: '85%',
    percentage: '85%',
  },
  {
    title: 'Socket.io',
    width: '40%',
    percentage: '40%',
  },
  {
    title: 'SQL',
    width: '70%',
    percentage: '70%',
  },
  {
    title: 'Firebase',
    width: '70%',
    percentage: '70%',
  },
]

const Skills = () => {
  return (
    <Fade right>
      <div className="skills_wrapper d-flex gap-5">
        <div className="frontend_skills w-50">
          <h4 className="fw-bold">Frontend Technology</h4>
          <hr className="text-info fw-bold " />
          {frontendSkills.map((item, index) => (
            <div className="skill_data mb-2">
              <div className="skill_title d-flex align-items-center justify-content-between">
                <h6>{item.title}</h6>
                <span>{item.percentage}</span>
              </div>
              <div className="skill_bar">
                <span
                  className="skill_bar-percentage"
                  style={{ width: `${item.percentage}` }}
                ></span>
              </div>
            </div>
          ))}
        </div>
        <div className="backend_skills w-50">
          <h4 className="fw-bold">Backend Technology</h4>
          <hr className="text-info fw-bold " />
          {backendSkills.map((item, index) => (
            <div className="skill_data mb-2">
              <div className="skill_title d-flex align-items-center justify-content-between">
                <h6>{item.title}</h6>
                <span>{item.percentage}</span>
              </div>
              <div className="skill_bar">
                <span
                  className="skill_bar-percentage"
                  style={{ width: `${item.percentage}` }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Skills
