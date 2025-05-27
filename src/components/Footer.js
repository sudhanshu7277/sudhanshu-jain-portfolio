import React from 'react';

// Footer component displays copyright information.
function Footer() {
    return (
      <footer className="text-center mt-12 p-6 bg-gray-800 rounded-lg shadow-xl text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sudhanshu Jain. All rights reserved.</p>
      </footer>
    );
  }
  

export default Footer;