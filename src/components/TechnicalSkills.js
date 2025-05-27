import React from 'react';

// TechnicalSkills component displays the user's technical proficiencies.
function TechnicalSkills({ skills }) {
    return (
      <section className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">
          Technical Skills
        </h2>
        <div className="space-y-4 text-gray-300 text-lg">
          <p>
            <strong className="text-blue-300">Programming Tools:</strong> {skills.programmingTools}
          </p>
          <p>
            <strong className="text-blue-300">Web IDE Tools:</strong> {skills.webIDETools}
          </p>
          <p>
            <strong className="text-blue-300">Version Control (VCS):</strong> {skills.versionControl}
          </p>
          <p>
            <strong className="text-blue-300">Operating Systems:</strong> {skills.operatingSystems}
          </p>
        </div>
      </section>
    );
  }
  

export default TechnicalSkills;