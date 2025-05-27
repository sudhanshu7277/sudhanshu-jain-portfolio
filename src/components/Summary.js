import React from 'react';

// Summary component displays a concise overview of the user's experience.
function Summary({ summaryPoints }) {
    return (
      <section className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">
          Summary
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>
    );
  }

// function Summary() {
//   return (
//     <section className="summary">
//       <div className="container">
//         <h2>Summary</h2>
//         <p>About 10 years of industry experience in User Interface/User Experience Development as a contractor with various clients across North America. [cite: 1]</p>
//         <p>About 10 years of developing product and information architecture using SDLC i.e. Requirement Analysis, Design and Implementation. [cite: 2]</p>
//         <p>3+ years experience with Core JAVA. [cite: 3]</p>
//         <p>Extensive experience in developing professional UI web applications and front-end technologies like HTML/HTML5, CSS/CSS3, Reactjs, Angular 2/4/5/6/7/8/9/10/11/12/13/14/15,17, NGRX, MEAN Stack & MERN Stack, React Native, Angularjs, JavaScript, jQuery, Highchartsjs, JSON and Chrome developer tools. [cite: 3]</p>
//         <p>Sound Understanding and good Experience with Object Oriented Concepts, Object Oriented JavaScript, Core Java, Java Spring Boot, Object Oriented Design and Implementation. [cite: 4]</p>
//         <p>Solid understanding and experience with Agile Methodologies: Sprint planning, Scrums and Task Board. [cite: 5]</p>
//         {/* ... continue adding other summary points ... */}
//       </div>
//     </section>
//   );
// }

export default Summary;