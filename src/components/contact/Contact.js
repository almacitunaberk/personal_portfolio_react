import React, { useRef } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_um85a1a', 'template_0str37e', form.current, '6bpHIw67HqJjL1C6-')
      .then((result) => {
        console.log(result);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__icon" />

            <h4>Email</h4>
            <h5 className="text-light">almacitunaberk@gmail.com</h5>
            <a href="mailto:almacitunaberk@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <h5 className="text-light">Contact me on LinkedIn</h5>
            <a href="https://linkedin.com/in/tunaberk-almaci/" target="_blank">
              Contact
            </a>
          </article>
          <article className="contact__option">
            <FiPhoneCall className="contact__icon" />
            <h4>Call</h4>
            <h5 className="text-light">Charges may apply</h5>
            <a href="tel:+16475093257" target="_blank">
              Call
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" />
          <textarea id="message" placeholder="Your Message" required rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
