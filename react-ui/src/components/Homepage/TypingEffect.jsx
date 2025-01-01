import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const TypingEffect = () => {
  return (
    <h2 className="text-4xl font-bold mb-10 text-[#FFFFFF]">
      S
      <TypeAnimation
        sequence={[
          'eamless', // Types 'eamless'
          1500,      // Waits 1 second
          '',        // Clears the text, leaving 'S'
          1000,       // Waits 0.5 second
          'calable', // Types 'calable'
          1500,      // Waits 1 second
          '',        // Clears the text, leaving 'S'
          1000,       // Waits 0.5 second
          'mart',    // Types 'mart'
          1000,      // Waits 1 second
          '',        // Clears the text, leaving 'S'
          500,       // Waits 0.5 second
        ]}
        speed={100}           // Adjust typing speed (ms)
        deletionSpeed={80}    // Adjust deletion speed (ms)
        repeat={Infinity}     // Repeat the sequence indefinitely
        style={{ display: 'inline' }} // Ensures the text stays inline
      />
    </h2>
  );
};

export default TypingEffect;
