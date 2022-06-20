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
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { ContactModal } from '../ContactModal/ContactModal'

const Layout = () => {
  const [active, setActive] = useState('ABOUT')
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Fragment>
      <Header
        active={active}
        setActive={setActive}
        modalShow={modalShow}
        setModalShow={setModalShow}
      ></Header>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />

      {/* <Navigation active={active} setActive={setActive} /> */}
      <HeroSection />
      <About></About>
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Layout
