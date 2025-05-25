import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y8g6x9k',       // Replace with your EmailJS service ID
        'template_un0bjqy',      // Replace with your EmailJS template ID
        form.current,
        'keydzbAZdWv4LnC2e'        // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me 👋</h2>
      <div className="contact__container grid">
        <div className="contact__info"> 
          <h2 className="contact__title">Contact Information</h2>
          <p className="contact__details"><img src="/icons/gmail.gif" alt="gmail" className='contact__logo'/>: mehulkumar.mk02@gmail.com</p>
          <p className="contact__details"><img src="/icons/phone.gif" alt="phone no" className='contact__logo'/>: 7004719065</p>
          <div className='contact__socials'>
              <a href="https://www.instagram.com/_mehulmehta_" className='contact__socials-link' target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.gif" alt="instagram" />
              </a>
              <a href="https://github.com/mehulkumar22" className='contact__socials-link' target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.gif" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/mehulkumar22/" className='contact__socials-link' target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.gif" alt="linkedin" />
              </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Enter your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              rows="10"
              className="contact__form-input"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
