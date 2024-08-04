import React, { useEffect, useRef } from 'react'
import './SLStyle.css'

const SnusLavka = ({ word = "" }) => {
  const spansRef = useRef([]);

  useEffect(() => {
    const spans = spansRef.current;

    spans.forEach((span, idx) => {
      const handleClick = (e) => {
        e.target.classList.add('active');
      };
      const handleAnimationEnd = (e) => {
        e.target.classList.remove('active');
      };

      span.addEventListener('click', handleClick);
      span.addEventListener('animationend', handleAnimationEnd);

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));

      // Cleanup function to remove event listeners
      return () => {
        span.removeEventListener('click', handleClick);
        span.removeEventListener('animationend', handleAnimationEnd);
      };
    });
  }, [word]);

  return (
    <div className="word" data-text={word} >
      {word.split('').map((char, idx) => (
        <span key={idx} ref={(el) => spansRef.current[idx] = el}>
          {char}
        </span>
      ))}
      <div className="lavka" data-text="LAVKA">LAVKA</div>
    </div>
  );
};

export default SnusLavka;
