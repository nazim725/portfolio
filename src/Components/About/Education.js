import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BSc</td>
          <td>Computer Science and engineering</td>
          <td>International Islamic University Chittagong</td>
          <td>2016-2021</td>
          <td>3.909 out of 4.00</td>
        </tr>
        <tr>
          <td>HSc</td>
          <td>Science</td>
          <td>CUET School & College</td>
          <td>2013-2015</td>
          <td>4.50 out of 5.00</td>
        </tr>
        <tr>
          <td>SSc</td>
          <td>Science</td>
          <td>Unsattarpara High School</td>
          <td>2013</td>
          <td>5.00 out of 5.00</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Education
