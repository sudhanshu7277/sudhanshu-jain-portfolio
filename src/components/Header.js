import React from 'react';

export const Header = ({ scrollToRef }) => {
  return (
    <header className="relative z-10 w-full p-6 bg-white bg-opacity-80 shadow-lg rounded-b-2xl mb-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-4xl text-indigo-700 mb-4 md:mb-0"> {/* Removed font-extrabold and tracking-tight */}
        Sudhanshu Jain
      </h1>
      <nav>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li><button onClick={() => scrollToRef('about')} className="text-gray-700 hover:text-indigo-600 font-normal transition duration-300">About</button></li> {/* Changed font-semibold to font-normal */}
          <li><button onClick={() => scrollToRef('skills')} className="text-gray-700 hover:text-indigo-600 font-normal transition duration-300">Skills</button></li> {/* Changed font-semibold to font-normal */}
          <li><button onClick={() => scrollToRef('experience')} className="text-gray-700 hover:text-indigo-600 font-normal transition duration-300">Experience</button></li> {/* Changed font-semibold to font-normal */}
          <li><button onClick={() => scrollToRef('contact')} className="text-gray-700 hover:text-indigo-600 font-normal transition duration-300">Contact</button></li> {/* Changed font-semibold to font-normal */}
        </ul>
      </nav>
    </div>
  </header>
  );
};