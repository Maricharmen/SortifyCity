import React from 'react';
import './title.css';

const Title = () => {
  const letters = ['S', 'o', 'r', 't', 'i', 'f', 'y', 'C', 'i', 't', 'y'];

  return (
    <div className="title-container">
      {letters.map((letter, index) => (
        <span key={index} className="pixel-art">{letter}</span>
      ))}
    </div>
  );
};

export default Title;
