import { React, useRef, useEffect, useState } from 'react';
import profile from '../../assets/images/me-pic.JPG'

function About() {

  const UseElementOnScreen = (options) => {
    const aboutSection = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting)
    }
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if(aboutSection.current){
        observer.observe(aboutSection.current);
      } 

      return () => {
        if(aboutSection.current) observer.unobserve(aboutSection.current)
        
      }
    }, [aboutSection, options])
    return [aboutSection, isVisible]
  }

  const [ aboutSection, isVisible ] = UseElementOnScreen ({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });



  return(
    <div id="about" ref={aboutSection} className={isVisible ? 'bg-gray-200 py-10 h-full w-full  text-center flex flex-wrap justify-around' : 'bg-gray-200 py-10 h-full w-full  text-center flex flex-wrap justify-around'}>
      <h1 className='font-semibold w-full mb-12' id='loganparke'>Logan Parke</h1>
      <div className='w-full'><h2 className='ml-12 text-4xl font-bold text-left mb-8'>About Me:</h2></div>
      
      <p className='mx-5 text-3xl w-1/2'>Hi, I'm Logan! Checkout my portfolio!  There are links and details of projects I have done, along with a list and description of my skills, and links to my GitHub, LinkedIn, Resume, and how to contact me.  I am a software developer looking for front-end and back-end developer positions.  I have a great passion for coding, I love solving problems and interacting with programs.  But I also love the outdoor, rock climbing, fishing, mountain biking, and skiing are some of my favorite things to do.
      </p>
      <img className='h-96 p-2 mb-3' src={profile}></img>
    </div>
  );
}

export default About;