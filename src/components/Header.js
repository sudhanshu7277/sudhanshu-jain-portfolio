import React from 'react';

//Header component displays the user's name and contact information.
function Header({ name, phone, email, linkedin }) {
  return (
    <header className="text-center mb-12 p-6 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2">
        {name}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-2">
        {phone} | {email}
      </p>
      <p className="text-md sm:text-lg text-gray-400 mb-4">Canadian Citizen</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
      >
        LinkedIn Profile
      </a>
    </header>
  );
}

// function Header() {
//   return (
//     <header className="header">
//       <div className="container">
//         <h1>Sudhanshu Jain</h1> [cite: 1]
//         <p>Phone: +14375663684 | Email: Sudhanshuj020@gmail.com</p> [cite: 1]
//         <p>Canadian Citizen</p> [cite: 1]
//         <p>
//           <a href="https://www.linkedin.com/in/sudhanshu-jain-4b792b108/" target="_blank" rel="noopener noreferrer">
//             LinkedIn Profile
//           </a>
//         </p>
//       </div>
//     </header>
//   );
// }

export default Header;