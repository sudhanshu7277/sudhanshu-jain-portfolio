import React from 'react';

export const SectionComponent = ({ id, title, children, refProp }) => {
    return (
        <section ref={refProp} id={id} className="relative z-10 w-full max-w-5xl mx-auto my-8 p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-[1.005] transition duration-300 ease-in-out">
      <h2 className="text-4xl text-indigo-800 mb-6 text-center">{title}</h2> {/* Removed font-bold */}
      {children}
    </section>
    );
  };