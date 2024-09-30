import React from 'react';
import '../styles/Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


function Home() {
  const [text] = useTypewriter({
    words: ['Web Developer...', 'Front End Developer...'],  
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    transition={{ duration: 0.8 ,delay:0.2}}
  >
    <section className='sec0' id='home'>
      <div className='container'>
        
        <div className='for_left'>
          
          <p className='firstp'>I am <span className='colorfont'>Balu Arja...</span></p>
          <p className='firstp1'>
            I am a{' '}
            <span className='colorfont1'>
              {text}
              <Cursor />
            </span>
          </p>
          <div className='icons'>
            <ul className='icon0'>
              <li className='icon1'>
                <Link to='https://github.com/Arja-Balu/'>
                  <img className='icon' src={process.env.PUBLIC_URL + '../images/github.png'} alt='GitHub' />
                </Link>
              </li>
              <li className='icon1'>
                <Link to='https://www.linkedin.com/in/balu-arja-75a77b267/'>
                  <img className='icon' src={process.env.PUBLIC_URL + '../images/linkedin.png'} alt='LinkedIn' />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to='/RESUME@11.pdf' target='_blank' rel='noopener noreferrer'>
              <button className='button_class'>Resume</button>
            </Link>
          </div>
        </div>
        <div className='for_right'>
          <img className='image_class' src={process.env.PUBLIC_URL + '../images/profile00.png'} alt='profile_image' />
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default Home;
