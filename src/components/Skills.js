import '../styles/Skills.css';
import React from 'react';
import { SiMongodb, SiNodedotjs, SiReact, SiJavascript, SiCss3, SiHtml5, SiPython, SiExpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Java', icon: <FaJava /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });
  return (
      <section id='skills' className='skill0'>
        <motion.div
        ref={ref}
        initial={{ opacity: 0, z: -100 }}
        animate={isInView ? { opacity: 1, z: 0 } : { opacity: 0, z: -100 }}
        transition={{ duration: 0.8 ,delay:0.3}}
      >
        <div className='skills-wrapper'>
          <div className='skills-container'>
            {skills.concat(skills).map((skill, index) => (
              <div className='skill-item' key={`${skill.name}-${index}`}>
                <div className='skill-box'>
                  <div className='skill-icon'>{skill.icon}</div>
                  {/* <span className='text'>{skill.name}</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </section>
  );
};

export default Skills;
