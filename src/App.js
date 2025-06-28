// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useRef} from 'react';
import {Header} from './components/Header';
import {Skills} from './components/Skills';
import {SectionComponent} from './components/SectionComponent';
import {ContactComponent} from './components/ContactComponent';
import {Experience} from './components/Experience';
import {About} from './components/About';
import {ThreeDBackground} from './components/ThreeDBackground';

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (id) => {
    let ref;
    switch (id) {
      case 'about':
        ref = aboutRef;
        break;
      case 'skills':
        ref = skillsRef;
        break;
      case 'experience':
        ref = experienceRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        return;
    }
    // Corrected the scroll function to scrollIntoView
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-inter text-gray-900 overflow-hidden">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet"></link>

      {/* Three.js background */}
      <ThreeDBackground />

      <Header scrollToRef={scrollToRef} />

      <main className="relative z-10 p-4">
        <SectionComponent id="about" title="About Me" refProp={aboutRef}>
          <About />
        </SectionComponent>

        <SectionComponent id="skills" title="Skills & Expertise" refProp={skillsRef}>
          <Skills />
        </SectionComponent>

        <SectionComponent id="experience" title="Professional Experience" refProp={experienceRef}>
          <Experience />
        </SectionComponent>

        <SectionComponent id="contact" title="Get In Touch" refProp={contactRef}>
          <ContactComponent/>
        </SectionComponent>
      </main>

      <footer className="relative z-10 p-6 text-center text-gray-600 text-sm mt-12 bg-white bg-opacity-80 rounded-t-2xl shadow-lg">
        <p>&copy; {new Date().getFullYear()} Sudhanshu Jain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;