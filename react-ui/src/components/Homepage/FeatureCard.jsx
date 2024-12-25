import React from 'react';
import '../../index.css';

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative h-64 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Title with animation */}
        <h3 className="text-3xl font-semibold transition-transform duration-500 ease-in-out text-[--my-black] group-hover:-translate-y-4 group-hover:text-[--my-violet]">
          {title}
        </h3>
        {/* Description with fade-in effect */}
        <p className="text-[--my-black] text-lg mt-4 opacity-0 transform scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
