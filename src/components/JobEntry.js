import React from 'react';

// JobEntry component displays details for a single professional experience.
function JobEntry({ job }) {
    return (
      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">{job.title}</h3>
        <p className="text-gray-300 text-lg mb-1">{job.company} - {job.location}</p>
        <p className="text-gray-400 text-sm mb-4">{job.dates}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default JobEntry;