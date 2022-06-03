import { React, useRef, useEffect, useState } from "react";
import gitHub from "../../assets/images/GitHub-Mark-120px-plus.png"
import linkedIn from "../../assets/images/icons8-linkedin-circled-100.png"
import resume from "../../assets/images/resume-icon.jpg";
import email from "../../assets/images/email.png"

function Footer() {

  const UseElementOnScreen = (options) => {
    const contactSection = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting)
      //console.log(entry);
    }
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if(contactSection.current){
        observer.observe(contactSection.current);
      } 

      return () => {
        if(contactSection.current) observer.unobserve(contactSection.current)
      }
    }, [contactSection, options])

    return [contactSection, isVisible]
  }

  const [ contactSection, isVisible ] = UseElementOnScreen ({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div id="contact" ref={contactSection} className={isVisible ? 'h-screen flex flex-wrap justify-around' : 'h-screen flex flex-wrap justify-around'}>
      <a href="https://github.com/loganparke" className="self-center">
        <img src={gitHub} alt="gitHub" className="object-scale-down h-24"></img>
        <p className="text-center">My GitHub</p>
      </a>
      <a href="https://www.linkedin.com/in/logan-parke-2b2915173/" className="self-center">
        <img src={linkedIn} alt="linkedIn" className="object-scale-down h-24"></img>
        <p className="text-center">My LinkedIn</p>
      </a>
      <a href="https://docs.google.com/document/d/1UoiLl08y2dkr05MTRV2YMt4Y0Hv_0B50Ikw8UXZeUww/edit?usp=sharing" className="self-center">
        <img src={resume} alt="resume" className="object-scale-down h-24"></img>
        <p className="text-center">My Resume</p>
      </a>
      <a href="mailto:logan.c.parke@gmail.com" className="self-center">
        <img src={email} alt="email" className="object-scale-down h-24"></img>
        <p className="text-center">Email Me</p>
      </a>
    </div>
  );
}

export default Footer;