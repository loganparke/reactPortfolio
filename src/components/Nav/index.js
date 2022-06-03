import { React, useRef, useEffect  } from 'react';

function SideNav({selectedSection}) {
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  console.log('selectedSection ' + selectedSection);
  function removeBorder() {
    aboutRef.current.classList.remove('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    projectRef.current.classList.remove('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    skillsRef.current.classList.remove('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    contactRef.current.classList.remove('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');

    aboutRef.current.classList.add('text-gray-300');
    projectRef.current.classList.add('text-gray-300');
    skillsRef.current.classList.add('text-gray-300');
    contactRef.current.classList.add('text-gray-300');
  }

  function handleClick(e) {
    if(e.target === aboutRef.current) {
      removeBorder();
      aboutRef.current.classList.remove('text-gray-300');
      aboutRef.current.classList.add('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    } else if (e.target === projectRef.current) {
      removeBorder();
      e.target.classList.remove('text-gray-300');
      e.target.classList.add('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    } else if (e.target === skillsRef.current) {
      removeBorder();
      e.target.classList.remove('text-gray-300');
      e.target.classList.add('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    } else if (e.target === contactRef.current) {
      removeBorder();
      e.target.classList.remove('text-gray-300');
      e.target.classList.add('border-r-4', 'border-teal-400', 'bg-stone-300', 'text-black');
    }
  }

    return (
      <nav className='sideNav bg-cover fixed h-full top-0 left-0 overflow-hidden pt-44 transition'>
        <a className='my-8 py-2 pr-2 pl-8 block text-gray-300 font-semibold transition w-full text-right' href="#about" id="aboutNav" ref={aboutRef} onClick={handleClick}>About Me</a>
        <a className='my-8 py-2 pr-2 pl-8 block text-gray-300 font-semibold transition text-right' id="projectNav" ref={projectRef} href="#projects" onClick={handleClick}>Projects</a>
        <a className='my-8 py-2 pr-2 pl-8 block text-gray-300 font-semibold transition text-right' id="skillNav" ref={skillsRef} href="#skills" onClick={handleClick}>My Skills</a>
        <a className='my-8 py-2 pr-2 pl-8 block text-gray-300 font-semibold transition text-right' id="contactNav" ref={contactRef} href="#contact" onClick={handleClick}>Contact</a>
      </nav>
    );
}
export default SideNav;