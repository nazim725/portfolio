import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import '../../../src/style.scss'
import '../../../src/media-query.css'
import Navigation from '../Navigation/Navigation'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'

const Layout = () => {
  const [active, setActive] = useState('home')
  return (
    <Fragment>
      <Header></Header>
      {/* <Navigation active={active} setActive={setActive} /> */}
      <HeroSection />
      <About></About>
    </Fragment>
  )
}

export default Layout
