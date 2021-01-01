import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const regex = /[^a-zA-Z0-9 @,?&£$%#"*+'=.\-_!]/g;

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_en011jp', 'template_9jgjaxb', e.target, 'secret')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id='contact'>
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
