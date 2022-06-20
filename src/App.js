import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Layout from './Components/Layout/Layout'

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectDetails from './Components/Portfolio/ProjectDetails/ProjectDetails'
import MoreProject from './Components/Portfolio/MoreProject/MoreProject'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/projectDetails/:projectId" element={<ProjectDetails />} />
        <Route path="/moreProject" element={<MoreProject />} />
      </Routes>
    </div>
  )
}

export default App
