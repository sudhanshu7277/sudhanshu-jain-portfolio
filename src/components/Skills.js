import React from 'react';

export const Skills = () => {
    const techSkills = [
      'HTML5', 'CSS3', 'JavaScript (Vanilla, ES6+)', 'jQuery', 'React.js', 'Redux', 'React Native',
      'AngularJS', 'Angular (2-17)', 'TypeScript', 'Node.js', 'Express.js', 'Python', 'Django',
      'Java Spring Boot', 'GraphQL', 'RESTful APIs', 'MongoDB', 'SQL',
      'Tailwind CSS', 'Bootstrap', 'NGRX', 'Context API', 'Jest', 'Jasmine', 'Karma',
      'React Testing Library', 'Webpack', 'Babel', 'Git', 'Github', 'Bitbucket',
      'Agile Methodologies', 'AWS', 'Azure CI/CD', 'Docker', 'WCAG Standards'
    ];
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {techSkills.map((skill, index) => (
          <span key={index} className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full font-normal text-lg shadow-md hover:bg-indigo-200 transition duration-300 transform hover:-translate-y-1"> {/* Changed font-semibold to font-normal */}
            {skill}
          </span>
        ))}
      </div>
    );
  };