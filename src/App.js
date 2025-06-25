// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

// Main App component for the portfolio
function App() {
  // Define resume data directly within the component for simplicity
  // In a larger application, this would likely come from an API or a separate data file
  const resumeData = {
    name: "Sudhanshu Jain",
    phone: "+14375663684",
    email: "Sudhanshuj020@gmail.com",
    linkedin: "https://www.linkedin.com/in/sudhanshu-jain-4b792b108/",
    summary: [
      "About 11.5 years of industry experience in User Interface/User Experience Development as a contractor with various clients across North America.",
      "About 11.5 years of developing product and information architecture using SDLC i.e. Requirement Analysis, Design and Implementation.",
      "3+ years experience with Core JAVA.",
      "Extensive experience in developing professional UI web applications and front-end technologies like HTML/HTML5, CSS/CSS3, Reactjs, Angular 2/4/5/6/7/8/9/10/11/12/13/14/15,17, NGRX, MEAN Stack & MERN Stack, React Native, Angularjs, JavaScript, jQuery, Highchartsjs, JSON and Chrome developer tools.",
      "Sound Understanding and good Experience with Object Oriented Concepts, Object Oriented JavaScript, Core Java, Java Spring Boot, Object Oriented Design and Implementation.",
      "Solid understanding and experience with Agile Methodologies: Sprint planning, Scrums and Task Board.",
      "Self-motivated, able to work independently and in teams, can handle multiple projects while paying attention to details.",
      "Excellent interpersonal abilities, communication skills, time management and Team skills with an intention to work hard to attain project deadlines under stressful environments.",
      "Worked closely with the project management and marketing team to completely define specifications to help ensure project acceptance."
    ],
    technicalSkills: {
      programmingTools: "HTML5, CSS3, JavaScript, AJAX, jQuery, Reactjs, AngularJS, Angular 2/4/5/6/7/8/9/10/11/12/13/14/15,17, Redux, AWS, Azure, NGRX, ES6, JSON, Core Java, Java Spring Boot, Twitter Bootstrap, Python, Django, Git.",
      webIDETools: "Notepad++, Sublime Text editor, Spring tool suite, Visual Studio Code, textEdit.",
      versionControl: "Git Bash (Github), bitbucket.",
      operatingSystems: "Windows 9x/XP/7/10, Macintosh OSx, Unix OS."
    },
    education: [
      "Bachelor of Business Administration from International Institute of Special Education, UP - India - 2008",
      "Post Graduate diploma in Management from Jaipuria institute of Management, UP - India - 2010",
      "Master of Science in Computer science from Silicon Valley University, San Jose- California, USA - 2014"
    ],
    experience: [
      {
        title: "UI/ Front end lead",
        company: "TD Bank",
        location: "Toronto, Ontario, Canada",
        dates: "May 2024 to Current",
        responsibilities: [
          "Using Angular 17, Reactjs and Vanilla Javascript building the Frontend and Express, Nodejs Backend.",
          "Collecting business requirements for the Admin capability based and customer focused application with Angular 17, Reactjs, and css with Bootstrap.",
          "Leading a team of 3 UI Developers, responsible for connecting regularly, solve code related issues, decide and divide and assign tasks. Also, code reviews and approvals.",
          "Testing the application both manually and writing unit test cases using Jasmine, Karma, Jest, react-testing library.",
          "Interacting with MongoDB and SQL databases alternatively for fetching data through Java APIs secured using Nodejs wrapper.",
          "Working in Wealth management division dealing with Financial data accessed through complex data structures.",
          "Client and server approach with Express application, Nodejs proxy wrapper.",
          "Mask and protect APIs with Nodejs Proxy middleware and implementing CRUD operations.",
          "Data used by senior management for critical business decisions.",
          "Using JEST for unit testing components and APIs.",
          "State management using NGRX Store and Context API on the User interface side.",
          "Using AZURE CI/CD pipelines for application deployments.",
          "Building Single page application using Angular 17 with features like Admin access only like (listing users, employees & their information private to the organization).",
          "Having regular meetings In-person and virtual to discuss the progress and any new requirements if and when needed."
        ]
      },
      {
        title: "Software Engineer, UI",
        company: "GlobalLogic",
        location: "Remote in Ontario, Canada",
        dates: "July 2022 to May 2024",
        responsibilities: [
          "Developing UI components using HTML/HTML5, CSS/CSS3/SCSS, React (JSX), Redux.",
          "Building APIs Using Nodejs, Express.",
          "Manage data using MongoDB, Java SpringBoot, creating models and using different querying methods.",
          "User interface development for FINTECH project in finance management.",
          "Building Single page application, Pages using React, Java SpringBoot dealing with huge amounts of data, manipulating data and then displaying it on the UI.",
          "CRUD operations using Java Spring boot.",
          "Attend regular standups and work under pressure.",
          "Managing Application State using NGRX, Front end Data Store.",
          "Follow WCAG standards for the colour blind and specially abled.",
          "Build Re-usable components using React and made use of features like state management, context APIs, UseEffect, useState etc.",
          "Using AZURE CI/CD to write environment specific pipelines for application deployments."
        ]
      },
      {
        title: "Snr. Software Engineer",
        company: "Royal Bank of Canada (TCS)",
        location: "Toronto, Ontario, Canada",
        dates: "May 2021 to June 2022",
        responsibilities: [
          "Developing UI components using HTML/HTML5, CSS/CSS3/SCSS, AG-GRID, Typescript, Angularjs, Angular 9/10/11, NGRX, Java SpringBoot.",
          "Querying the MongoDB Database using Nodejs, also added features like Authorization verification.",
          "Managing Application State using NGRX, Front end Data Store.",
          "Use MongoDB Compass, Java SpringBoot and Postman for development and APIs testing.",
          "User interface development for FINTECH, Financial management project in Wealth management.",
          "CRUD operations using Java Spring boot (RESTful web services).",
          "Building Single page applications (Widgets) using angular core features and AG-Grid to display financial data.",
          "Attend regular standups and work under pressure.",
          "Handling production issues during regular calls and interactions with the users of the application and solving prod. Bugs on a regular basis along with development.",
          "worked with TAC Application, one of the most complicated applications in RBC.",
          "Wrote business logic for TAC, managed Investment portfolios logic from household to account level.",
          "Also, worked in an application called BMD, which allows bank managers to manage the advisor level performance."
        ]
      },
      {
        title: "Snr. Engineer, Front end",
        company: "McAfee",
        location: "Waterloo, Ontario, Canada",
        dates: "July 2019 to May 2021",
        responsibilities: [
          "Developed UI components using HTML/HTML5, CSS/CSS3, Typescript, Angularjs, Core Java, Reactjs, Redux, Angular 2/4/5/6/7, CSS3, font-awesome.",
          "User interface development for McAfee desktop based Security application, Anti virus scan and updates.",
          "Manage data using MongoDB, collecting to MongoDB using Nodejs, Angularjs, React, Express, Core Java creating models and using different querying methods.",
          "Building Single page applications with dynamic routes for user friendliness and minimum API interaction.",
          "Handling production issues during regular calls and interactions with the users of the application and solving prod. Bugs on a regular basis along with development.",
          "Followed Agile methodology in a very strict manner and attending daily standups in a timely fashion."
        ]
      },
      {
        title: "Front end engineer",
        company: "Cisco (TCS)",
        location: "San Jose, California, USA",
        dates: "Feb 2016 to April 2019",
        responsibilities: [
          "Developed UI components using HTML/HTML5, CSS/CSS3, Typescript, Angularjs, Angular 2/4/5, Bootstrap 3, font-awesome, backend Java Spring boot.",
          "Build RESTful APIs using Java.",
          "Maintain the code base by frequent updates to revision control using GIT and used JIRA as a task-logging tool.",
          "User interface development for process and information centralization of Cisco products and partner product supply chain.",
          "Added special colour codes for the colour blind conditionally based on the user profile.",
          "Built reusable components using the new component based architecture of Angular 2/4/5 and further developed the Angularjs based version 1 of the application.",
          "Built Single page applications with dynamic routes for user friendliness and minimum API interaction.",
          "Handed production issues during regular calls and interactions with the users of the application.",
          "Followed Agile methodology in a very strict manner by following the estimated deadlines for user stories without compromising with the quality of the web based product."
        ]
      },
      {
        title: "User Interface developer",
        company: "Paypal",
        location: "San Jose, CA",
        dates: "Sep 2014-Jan 2016",
        responsibilities: [
          "Designing and developing dynamic web pages using HTML5, CSS3, Angularjs, Bootstrap, Highcharts, Python Django for visual representation of Data.",
          "Used Angularjs to create Views, models and Controllers to synchronize data from the Web services and worked closely with Data Research Analysts to understand the core logic and the implementation.",
          "Closely worked in coordination with the SQL developers, Project Manager to understand the project design and data retrieval.",
          "Initiated and conducted meetings with senior management to get inputs and to understand frequent change in requirements.",
          "Environment: HTML5, CSS3, Angularjs, Bootstrap, JavaScript, Highcharts, Python, DJango."
        ]
      }
    ]
  };

  return (
    // Main container with dark background and responsive padding
    <div className="min-h-screen bg-gray-900 text-white font-inter p-4 sm:p-8 lg:p-12">
      {/* Header Section */}
      <Header
        name={resumeData.name}
        phone={resumeData.phone}
        email={resumeData.email}
        linkedin={resumeData.linkedin}
      />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Summary Section */}
        <Summary summaryPoints={resumeData.summary} />

        {/* Technical Skills Section */}
        <TechnicalSkills skills={resumeData.technicalSkills} />

        {/* Education Section */}
        <Education educationData={resumeData.education} />

        {/* Professional Experience Section */}
        <Experience experienceData={resumeData.experience} />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
