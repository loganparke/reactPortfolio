import { React, useRef, useEffect, useState } from 'react';

import html from '../../assets/images/html-icon.png';
import css from '../../assets/images/css-icon.webp';
import js from '../../assets/images/js.jpg';
import node from '../../assets/images/node-icon.jpg';
import express from '../../assets/images/express-icon.png';
import rIcon from '../../assets/images/react-icon.jpg';
import mongo from '../../assets/images/mongodb-icon.svg';
import mongoose from '../../assets/images/mongoose-icon.png';
import mysql from '../../assets/images/mysql-icon.png';
import sequelize from '../../assets/images/sequelize-icon.png';
import restAPI from '../../assets/images/rest-api-icon.png';
import git from '../../assets/images/git-icon.png';

function Skills() {

  const UseElementOnScreen = (options) => {
    const skillsSection = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting)
      //console.log(entry);
    }
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if(skillsSection.current) observer.observe(skillsSection.current);

      return () => {
        if(skillsSection.current) observer.unobserve(skillsSection.current)
      }
    }, [skillsSection, options])

    return [skillsSection, isVisible]
  }

  const [ skillsSection, isVisible ] = UseElementOnScreen ({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return(
    <div id='skills' ref={skillsSection} className={isVisible ? 'bg-gray-200 h-auto text-center mt-10 py-20' : 'bg-gray-200 h-auto text-center mt-10 py-20'}>
      <p className='mySkills pb-10'>My Skills</p>
      <div className='flex justify-center'>
        <div className='flex flex-wrap h-4/5 w-4/5 justify-center'>
          <div className='m-5'>
            <p>HTML</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={html}></img>
          </div>
          <div className='m-5'>
            <p>CSS</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={css}></img>
          </div>
          <div className='m-5'>
            <p>Javascript</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={js}></img>
          </div>  
          <div className='m-5'>  
            <p>Node.JS</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={node}></img>
          </div>
          <div className='m-5'>
            <p>Express.JS</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={express}></img>
          </div>
          <div className='m-5'>
            <p>React</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={rIcon}></img>
          </div>
          <div className='m-5'>
            <p>MongoDB</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={mongo}></img>
          </div>
          <div className='m-5'>
            <p>Mongoose</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={mongoose}></img>
          </div>
          <div className='m-5'>
            <p>MySql</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={mysql}></img>
          </div>
          <div className='m-5'>
            <p>Sequelize</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={sequelize}></img>
          </div>
          <div className='m-5'>
            <p>Rest APIs</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={restAPI}></img>
          </div>
          <div className='m-5'>
            <p>Git</p>
            <img className='object-scale-down h-52 p-2 mb-3' src={git}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;