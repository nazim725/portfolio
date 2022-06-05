import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import '../../../src/style.scss'
import '../../../src/media-query.css'
import Navigation from '../Navigation/Navigation'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'
import ProjectDetails from '../Portfolio/ProjectDetails/ProjectDetails'


const Layout = () => {
  const [active, setActive] = useState('home')
  return (
    <Fragment>
      <Header></Header>
      {/* <Navigation active={active} setActive={setActive} /> */}
      <HeroSection />
      <About></About>
      <Services />
      <Portfolio />
    </Fragment>
  )
}

export default Layout
