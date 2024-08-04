import React, { useState, useEffect, useRef } from 'react';
import { cardImg } from '../data'
import { useDrag } from '@use-gesture/react'
import './Caurusel.css'
import Card from '../Card/Card'


const Carousel = () => {
  const [contentType, setContentType] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Object.keys(cardImg);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const clearExistingIntervals = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Прокрутка каждые 5 секунды
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearExistingIntervals();
    timeoutRef.current = setTimeout(startAutoScroll, 10000); // Ждать 10 секунд перед повторным запуском
  };

  useEffect(() => {
    startAutoScroll();

    return () => clearExistingIntervals(); // Очищение интервалов при размонтировании компонента
  }, []);

  const handleClick = (type) => {
    setContentType(type);
    console.log(`Clicked on ${type}`);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" >
        <div 
          className="carousel-inner" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Object.keys(cardImg).map((type, index) => (
            <div className="carousel-item" key={index}>
              <Card
                bbb={type}
                type={type} // Передача типа для получения данных карточки
                isActive={contentType === type} // Здесь можно управлять активностью карточек, если нужно
                onClick={() => handleClick(type)} // Обработчик клика
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}></button>
      <button className="carousel-button next" onClick={handleNext}></button>
    </div>
  );
};

export default Carousel;