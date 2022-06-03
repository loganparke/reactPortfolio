import { React, useRef, useEffect, useState } from 'react';
import locally from '../../assets/images/locally.png'
import wineDine from '../../assets/images/wineDine.png'

function Projects() {

  const UseElementOnScreen = (options) => {

    const projectSection = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting)
      console.log(entry);
    }

  
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if(projectSection.current) {
        observer.observe(projectSection.current);
      } 

      return () => {
        if(projectSection.current) observer.unobserve(projectSection.current);
      }
    }, [projectSection, options])

    return [projectSection, isVisible]
  }

  const [ projectSection, isVisible ] = UseElementOnScreen ({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });


  return (
  <div id="projects" className={isVisible ? 'h-full pt-10' : 'h-full pt-10'} ref={projectSection}>
    <h2  className='text-center Projects'>Featured Projects: {isVisible ? "IN VIEW" : "NOT IN VIEW"}</h2>
    <p className='text-center'></p>
      <div className='flex flex-wrap justify-around'>
        <div className='w-5/12 text-center'>
          <h2>Locally</h2>
          <a href='https://safe-anchorage-05872.herokuapp.com/' target='_blank' rel="noreferrer" className='hover:opacity-60 '><img src={locally} className='boxShadow rounded-lg' alt='locally'></img></a>
          <p className='text-left p-3 text-lg mt-2'>Locally is an application designed to help users see what local businesses have good reviews in their area.  Users can make an account for the page and sign in to add businesses to the application or add reviews to businesses. Try it for yourself!  Locally is a full stack application that uses the Model-View-Controller architecture.  It uses mySql and Sequelize for the database, handlebars.js for the HTML templating, Node.js and express.js for the backend setup, and Tailwind css and some custom css for the styling.  </p>
        </div>
        <div className='w-5/12 text-center'>
        <h2>Wine N' Dine</h2>
        <a href='https://jwviking.github.io/project1/' target='_blank' rel="noreferrer" className='hover:opacity-60'><img src={wineDine} className='boxShadow rounded-lg' alt='wineDine'></img></a>
        <p className='text-left p-3 text-lg mt-2'>Locally is an application designed to help users see what local businesses have good reviews in their area.  Users can make an account for the page and sign in to add businesses to the application or add reviews to businesses. Try it for yourself!  Locally is a full stack application that uses the Model-View-Controller architecture.  It uses mySql and Sequelize for the database, handlebars.js for the HTML templating, Node.js and express.js for the backend setup, and Tailwind css and some custom css for the styling.  </p>
        </div>
      </div>
      <div className='m-10 pl-10'>
        <h3 className='text-2xl'>More Projects:</h3>
        <div className='flex justify-around text-lg text-cyan-600 underline'>
          <a href='https://loganparke.github.io/loganWeatherApp/'>Logan's Weather App</a>
          <a href='https://gentle-thicket-31814.herokuapp.com/'>Note Taker</a>
          <a href='https://infinite-waters-00606.herokuapp.com/'>Pizza Hunt</a>
          <a href='https://loganparke.github.io/workday-scheduler/'>Workday Scheduler</a>
        </div>
      </div>
      <div className='text-center p-10'>
        See some of my other projects at: <a href='https://github.com/loganparke' target='_blank' rel="noreferrer" className='text-cyan-500'>github.com/loganparke</a>
      </div>
  </div>
  );
};

export default Projects;