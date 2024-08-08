import React, { useState, useEffect, useRef } from 'react';
import { vitrinaItem } from './Tovar/DataVitrina'
import './Vitrina.css'
import Tovar from './Tovar/Tovar'


const Vitrina = () => {
  const [contentType, setContentType] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Object.keys(vitrinaItem);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClick = (type) => {
    setContentType(type);
    console.log(`Clicked on ${type}`);
  };

  return (
    <div className="vitrina-container">
      <div className="vitrina-wrapper" >
        <div 
          className="vitrina-inner"
        >
          {Object.keys(vitrinaItem).map((type, index) => (
            <div className="vitrina-item" key={index}>
              <Tovar
                bbb={type}
                type={type} // Передача типа для получения данных карточки
                isActive={contentType === type} // Здесь можно управлять активностью карточек, если нужно
                onClick={() => handleClick(type)} // Обработчик клика
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vitrina;