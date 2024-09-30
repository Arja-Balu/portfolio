import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { motion, useInView } from 'framer-motion';


const Contact = () => {
  const form = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ofylexq', 'template_42cw6tp', form.current, 'u-mUxfOM--BTe7XbN')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mail sent");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact' className='contact1'>
      <div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 ,delay:0.2}}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '10px' }}>Name</label>
            <input type="text" name="user_name" />
            <label style={{ color: 'white' }}>Email</label>
            <input type="email" name="user_email" />
            <label style={{ color: 'white' }}>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </motion.div>
      </div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.8 ,delay:0.2}}
        >
      <img className='mailtome' src='../images/mailme.png' alt='loading'></img>
      </motion.div>
    </section>
  );
};

export default Contact;
