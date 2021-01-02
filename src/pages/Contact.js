import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../components/Modal';

const Contact = () => {
  const [submitMsg, setSubmitMsg] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const regex = /[^a-zA-Z0-9 @,?&£$%#"*+'=.\-_!]/g;

  const toggle = () => {
    setSubmitMsg(!submitMsg);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_en011jp',
        'template_9jgjaxb',
        e.target,
        'user_WqQbYVbwS3kEpfyyJ2eHJ'
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setModalMsg('Sent successfully!');
          toggle();
        },
        (error) => {
          setModalMsg('Oops! Please try again.');
          toggle();
        }
      );
  };

  return (
    <section id='contact'>
      {submitMsg && <Modal toggle={toggle} text={modalMsg} />}
      <div className='container'>
        <h2 className='page-title'>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam at
          quis repellendus nobis, ut explicabo laborum nesciunt earum vel
          suscipit quidem eos, saepe necessitatibus facere assumenda dolores a
          dolorum!
        </p>
        <form onSubmit={sendMail}>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              required
              onChange={(e) => setName(e.target.value.replace(regex, ''))}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='name'>Email</label>
            <input
              type='email'
              value={email}
              name='email'
              required
              onChange={(e) =>
                setEmail(e.target.value.replace(regex, '').toLowerCase())
              }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              name='subject'
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value.replace(regex, ''))}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              value={message}
              required
              onChange={(e) => setMessage(e.target.value.replace(regex, ''))}
            ></textarea>
          </div>
          <button className='btn-primary'>
            <span>Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
