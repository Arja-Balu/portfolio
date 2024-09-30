import React from 'react';
import '../styles/Projects.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });
  return (
    <section className='sec4' id='projects'>
      <div className='container' style={{ alignContent: 'center' }}>
      <motion.div
    ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    transition={{ duration: 0.8 ,delay:0.2}}
  >
        <div className='temp1'>
          <input type="checkbox" id="card1" />
          <div className="card">
            <div className='front'>
              <img className='project1' src='../images/project1.png' alt='project1' />
              <div className='innerdiv'>
                <p style={{ color: 'black', paddingLeft: '5px' }}><b style={{ fontSize: '16px' }}>Project Name :-</b><span style={{ fontSize: '14px' }}>Find My Book</span></p>
                <p style={{ color: 'black', paddingLeft: '5px' }}><b style={{ fontSize: '16px' }}>Technologies Used :-</b><span style={{ fontSize: '14px' }}>Html, Css, JavaScript.</span></p>
                <label className='button1' htmlFor="card1">more..</label>
              </div>
            </div>
            <div className='back'>
              <div className='innerdiv1'>
                <p style={{ color: 'black', paddingLeft: '5px' }}>Created a book request platform with HTML, CSS, JavaScript, and Firebase for real-time database operations.Enabled seamless PDF book sharing via Gmail and enables user to use the in-app messaging.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button className='button1'><a href='https://full-stack-project-ebon.vercel.app/'>view website</a></button>
                <label className='button1' htmlFor="card1">back</label>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.8 ,delay:0.2}}
        >
        <div className='temp2'>
          <input type="checkbox" id="card2" />
          <div className="card">
            <div className='front'>
              <img className='project1' src='../images/project2.jpg' alt='project2' />
              <div className='innerdiv'>
                <p style={{ color: 'black', paddingLeft: '5px' }}><b style={{ fontSize: '16px' }}>Project Name :-</b><span style={{ fontSize: '14px' }}>Sports Scheduler</span></p>
                <p style={{ color: 'black', paddingLeft: '5px' }}><b style={{ fontSize: '16px' }}>Technologies Used :-</b><span style={{ fontSize: '14px' }}>HTML, CSS, JavaScript, ExpressJS, NodeJS, EJS, and PostgreSQL.</span></p>
                <label className='button2' htmlFor="card2">more..</label>
              </div>
            </div>
            <div className='back'>
              <div className='innerdiv1'>
                <p style={{ color: 'black', paddingLeft: '5px' }}> Built a sports scheduling application using HTML, CSS, JavaScript, ExpressJS, NodeJS, EJS, and PostgreSQL for database management.Implemented features allowing both administrators and players to interact with the system..Utilized ExpressJS and NodeJS for server-side logic and PostgreSQL for efficient database management.</p>
                <br></br>
                <button className='button1'><a href='https://full-stack-project-ebon.vercel.app/'>view website</a></button>
                <label className='button1' htmlFor="card2">back</label>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
