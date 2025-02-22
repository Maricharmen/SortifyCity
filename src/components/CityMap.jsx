import React, { useState } from 'react';
import './CityMap.css';

const CityMap = () => {
  const [elements, setElements] = useState([]);

  const addElement = (type) => {
    const newElement = {
      id: elements.length + 1,
      type,
      x: Math.random() * 450,
      y: Math.random() * 450,
    };
    setElements([...elements, newElement]);
  };

  return (
    <div className="city-map-container">
      <div className="controls">
        <button onClick={() => addElement('road')}>Agregar Calle</button>
        <button onClick={() => addElement('traffic light')}>Agregar Semáforo</button>
        <button onClick={() => addElement('building')}>Agregar Edificio</button>
      </div>
      <div className="city-map">
        {elements.map((el) => (
          <div
            key={el.id}
            className={`city-element ${el.type}`}
            style={{ left: el.x, top: el.y }}
          >
            {el.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityMap;


