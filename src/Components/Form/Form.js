import React, { useRef, useState } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

const Form = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('jjjj')
  }
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7a9d0qc',
        'template_lr8va0b',
        e.target,
        'user_pZ0pRQFTOS1y1g7yZaHsf',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <form className="form" onSubmit={sendEmail}>
      <div className="form_input">
        <input
          type="text"
          name="name"
          id="Name"
          placeholder="Your Name"
          // value={enteredName}
          // onChange={(e) => setEnteredName(e.target.value)}
        />
      </div>
      <div className="form_input">
        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Your Email"
          // value={enteredEmail}
          // onChange={(e) => setEnteredEmail(e.target.value)}
        />
      </div>
      <div className="form_input">
        <textarea
          name="message"
          id="Message"
          placeholder="Write Message"
          // value={enteredMessage}
          // onChange={(e) => setEnteredMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="submit_button" type="submit">
        <i class="ri-send-plane-fill me-1"></i> SEND
      </button>
    </form>
  )
}

export default Form
