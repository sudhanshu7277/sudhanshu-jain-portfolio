import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const ContactComponent = () => {
   return (
    <div className="flex flex-col items-center space-y-6">
    <p className="text-lg text-gray-700 text-center">
      I'm always open to new opportunities and collaborations. Feel free to reach out!
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      <a href="mailto:Sudhanshuj020@gmail.com" className="flex items-center space-x-3 text-indigo-700 hover:text-indigo-900 transition duration-300 font-normal text-lg">
        <Mail size={28} className="text-indigo-600" />
        <span>Sudhanshuj020@gmail.com</span>
      </a>
      <a href="tel:+14375663684" className="flex items-center space-x-3 text-indigo-700 hover:text-indigo-900 transition duration-300 font-normal text-lg"> 
        <Phone size={28} className="text-indigo-600" />
        <span>+1 (437) 566-3684</span>
      </a>
      <a href="https://www.linkedin.com/in/sudhanshu-jain-4b792b108/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-indigo-700 hover:text-indigo-900 transition duration-300 font-normal text-lg">
        <Linkedin size={28} className="text-indigo-600" />
        <span>LinkedIn/sudhanshu-jain</span>
      </a>
      {/* <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-indigo-700 hover:text-indigo-900 transition duration-300 font-normal text-lg">
        <Github size={28} className="text-indigo-600" />
        <span>GitHub/yourgithub</span>
      </a> */}
    </div>
  </div>
   );
};