import './App.css';
import Projects from './components/Projects';
import SideNav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/footer';
import { useRef, useState, useEffect } from 'react';

function App() {

  let [selectedSection, setSelectedSection] = useState('');


  return (
    <div className="App">
      <main>
        <SideNav selectedSection={selectedSection}></SideNav>
        <div className='main'>
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export default App;
