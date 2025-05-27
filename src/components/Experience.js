import React from 'react';
import JobEntry from './JobEntry';

// Experience component displays a list of professional experiences.
// Experience component displays a list of professional experiences.
function Experience({ experienceData }) {
    return (
      <section className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <JobEntry key={index} job={job} />
          ))}
        </div>
      </section>
    );
  }
  

export default Experience;