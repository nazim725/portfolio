import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from '../Form/Form'

import './ContactModal.css'

export function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          
        >
          Contact with Nazim Uddin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
