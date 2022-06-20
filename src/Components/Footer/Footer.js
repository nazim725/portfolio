import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className="text-center  footer">
        <p>
          Copyright <i class="ri-copyright-fill"></i> 2020, Delivered by
          Muhammad Nazim Uddin, All Rights Reserved
        </p>
      </Container>
    </footer>
  )
}

export default Footer
