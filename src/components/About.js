import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <section className='sec1' id='about'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <img className='image_class0' src={process.env.PUBLIC_URL + '../images/profile22.png'} alt='profile_image' />
      </motion.div>
      <motion.div
        className='container1'
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className='firstp4'>
          I am <span className='colorfont3'>Balu Arja</span>, and I am currently pursuing my 4th year of B.Tech at
          <span className='colorfont3'> Vishnu Institute of Technology</span>. I have a strong command of
          <span className='colorfont3'> front-end technologies</span>, including
          <span className='colorfont3'> HTML</span>, <span className='colorfont3'>CSS</span>,
          <span className='colorfont3'> JavaScript</span>, and <span className='colorfont3'>React</span>. Additionally,
          I possess basic knowledge in <span className='colorfont3'>back-end development</span>. I am actively working
          on expanding my skills in back-end development to integrate both front-end and back-end technologies in my
          future projects, creating <span className='colorfont3'>comprehensive</span> and
          <span className='colorfont3'> dynamic web applications</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
