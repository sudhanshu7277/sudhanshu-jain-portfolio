import React from 'react';

// Education component displays the user's educational background.
function Education({ educationData }) {
    return (
      <section className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
          {educationData.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </section>
    );
  }
  

export default Education;