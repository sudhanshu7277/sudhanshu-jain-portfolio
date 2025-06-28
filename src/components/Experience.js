import React from 'react';
import { Banknote, Globe, Shield, Router, CreditCard } from 'lucide-react'; // Added more icons


export const Experience = () => {
  const experience = [
    {
      title: "UI/Front-end Lead at TD Bank",
      duration: "May 2024 - Current",
      description: "Leading a team of 3 UI Developers, I build front-end applications using Angular 17, React.js, and Vanilla JavaScript, with Express and Node.js for backend. My responsibilities include gathering business requirements for admin and customer-focused applications, conducting code reviews, and ensuring robust testing with Jest, Jasmine, and Karma. I also manage interactions with MongoDB and SQL databases via Node.js proxy middleware for financial data in the Wealth Management division, implementing state management with NGRX and Context API, and utilizing Azure CI/CD for deployments.",
      tech: ["Angular 17", "React.js", "Vanilla JS", "Node.js", "Express.js", "MongoDB", "SQL", "Jest", "Jasmine", "Karma", "NGRX", "Context API", "Azure CI/CD", "Team Leadership"],
      icon: 'https://www.td.com/content/dam/tdct/images/personal-banking/td-logo-en.png',
      color: "text-green-700"
    },
    {
      title: "Software Engineer, UI at GlobalLogic",
      duration: "July 2022 - May 2024",
      description: "Developed UI components using React (JSX), Redux, HTML/HTML5, CSS/CSS3/SCSS, and built APIs with Node.js and Express. Managed data with MongoDB and Java SpringBoot for a financial client. Focused on building single-page applications dealing with large datasets, manipulating and displaying data efficiently on the UI. Ensured WCAG compliance for accessibility and built reusable React components with state management and Context APIs. Responsible for Azure CI/CD pipeline development for deployments.",
      tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Java SpringBoot", "NGRX", "WCAG Standards", "Azure CI/CD"],
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQEcwaYik2791g/company-logo_100_100/B56ZV9kVCfHoAQ-/0/1741568430537/globallogic_logo?e=1756339200&v=beta&t=YoWOFgADM5u5Hz9n7oI5K4UmCs01743euUySNMPWNq8',
      color: "text-orange-700"
    },
    {
      title: "Snr. Software Engineer at Royal Bank of Canada",
      duration: "May 2021 - June 2022",
      description: "Developed UI components using HTML5, CSS3, SCSS, Vanilla Javascript, AG-GRID, Typescript, Angularjs, Angular 9/10/11, NGRX, Java SpringBoot. Queried MongoDB Database using Node.js, and added authorization verification features. Managed Application State using NGRX. Utilized MongoDB Compass, Java SpringBoot, and Postman for development and API testing. User interface development for FINTECH, Financial management projects in Wealth management. Performed CRUD operations using Java Spring Boot (RESTful web services). Built Single page applications (Widgets) using Angular core features and AG-Grid to display financial data. Handled production issues and solved production bugs regularly. Worked with TAC Application and BMD, managing investment portfolios and bank manager performance logic.",
      tech: ["HTML5", "CSS3", "SCSS", "Vanilla JS", "AG-GRID", "TypeScript", "AngularJS", "Angular (9-11)", "NGRX", "Java SpringBoot", "MongoDB", "Node.js", "RESTful APIs", "Fintech", "Production Support"],
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQFGyRvMVMYqAw/company-logo_100_100/company-logo_100_100/0/1719806995661?e=1756339200&v=beta&t=gJKfPJxhpwMV8VLhlTuiH6qPyT4C3T0bZ2BgLPUdRS0',
      color: "text-blue-700"
    },
    {
      title: "Snr. Engineer, Front-end at McAfee",
      duration: "July 2019 - May 2021",
      description: "Developed UI components for McAfee desktop-based Security application, Anti-virus scan and updates using HTML/HTML5, CSS/CSS3, Vanilla Javascript, Angularjs, Core Java, React.js, Redux, Angular 2/4/5/6/7, CSS3, font-awesome. Managed data using MongoDB, collecting to MongoDB using Node.js, Angularjs, React, Express, Core Java, creating models and using different querying methods. Built Single page applications with dynamic routes for user friendliness and minimum API interaction. Handled production issues and solved production bugs on a regular basis along with development. Followed Agile methodology strictly and attended daily standups.",
      tech: ["HTML5", "CSS3", "Vanilla JS", "AngularJS", "Core Java", "React.js", "Redux", "Angular (2-7)", "MongoDB", "Node.js", "Express.js", "SPA", "Agile", "Production Support"],
      icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQF8epKyYz-LlQ/company-logo_100_100/company-logo_100_100/0/1719941820047/mcafee_logo?e=1756339200&v=beta&t=Ah3xcgD2iuK1zo5s8HXcXVqakcSnpvVOftNYgOwxJcc',
      color: "text-red-700"
    },
    {
      title: "Front-end engineer at Cisco",
      duration: "Feb 2016 - April 2019",
      description: "Developed UI components using HTML/HTML5, CSS/CSS3, Javascript, Typescript, Angularjs, Angular 2/4/5, Bootstrap 3, font-awesome, and backend Java Spring boot. Built RESTful APIs using Java. Maintained codebase with GIT and used JIRA for task logging. User interface development for process and information centralization of Cisco products and partner product supply chain. Added special color codes for the color blind conditionally based on the user profile. Built reusable components using the new component-based architecture of Angular 2/4/5 and further developed the Angular.js based version 1. Built Single page applications with dynamic routes for user friendliness and minimum API interaction. Handled production issues and followed Agile methodology strictly.",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "AngularJS", "Angular (2-5)", "Bootstrap 3", "Java Spring Boot", "RESTful APIs", "GIT", "JIRA", "Accessibility", "SPA", "Agile"],
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQGo0LANKsqgCg/company-logo_100_100/B56ZaSzDOOGoAQ-/0/1746219578583/cisco_logo?e=1756339200&v=beta&t=-3KzXALp6BBLi7A6UNsRfd5DxnxyMKr4mF3F188Xqiw',
      color: "text-blue-600"
    },
    {
      title: "User Interface developer at Paypal",
      duration: "Sep 2014 - Jan 2016",
      description: "Designed and developed dynamic web pages using HTML5, CSS3, Javascript, Angular.js, Bootstrap, Highcharts, Python Django for visual representation of Data. Used Angular.js to create Views, models, and Controllers to synchronize data from Web services. Worked closely with Data Research Analysts to understand core logic and implementation. Coordinated with SQL developers and Project Manager on design and data retrieval. Initiated and conducted meetings with senior management to gather inputs and understand changing requirements.",
      tech: ["HTML5", "CSS3", "JavaScript", "AngularJS", "Bootstrap", "Highcharts", "Python", "Django", "SQL", "Data Visualization"],
      icon: 'https://media.licdn.com/dms/image/v2/D560BAQGlX0cKdGRk-w/company-logo_100_100/company-logo_100_100/0/1725506319701?e=1756339200&v=beta&t=ie6rajOz9y2JbDij4Dk-Yd0FikUx66xbLzXDoHSCX_M',
      color: "text-blue-800"
    }
  ];

  return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {experience.map((job, index) => (
      <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-indigo-100 transform hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out flex flex-col justify-between">
        <div>
          <h3 className={`text-2xl mb-3 flex items-center space-x-2 ${job.color}`}>
            {job.icon && <img src={job.icon} style={{"height": "36px", "width": "41px"}} className={job.color} />}
            <span>{job.title}</span>
          </h3>
          <p className="text-gray-600 text-sm mb-3">{job.duration}</p>
          <p className="text-gray-700 text-md mb-4">{job.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white text-indigo-600 text-sm font-normal rounded-full shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>);
};