import Card from './Card/Card'
import './Caurusel/Caurusel.css'
import Carousel from './Caurusel/Caurusel'
import NewProduct from './Titles/NewProduct'
import { cardImg, differences } from './data'
import React, { useState } from 'react'
import { styled } from 'styled-components'




  const SectionContainer = styled.section`
  background: linear-gradient(
    142deg,
    rgba(63, 161, 251, 1) 0%,
    rgba(252, 70, 168, 1) 100%
  );
  border-radius: 2rem; /* Округление краев */
`;
// , contentType, setContentType 
export default function Section2({ onMainClick, sectionRef}) {
  const [contentType, setContentType] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Object.keys(cardImg);

   const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      resetAutoScroll();
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      resetAutoScroll();
    };
  const handleClick = (type) => {
      setContentType(type);
      console.log(`Clicked on ${type}`);
    };
    return(
        <SectionContainer onClick={onMainClick} ref={sectionRef}>
              <section><NewProduct/></section>
              {/* <section><Carousel/></section> */}
              <section>
                <div className="carousel-container">
                  <div className="carousel-wrapper">
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
                 <button className="carousel-button prev" onClick={handlePrev}></button>
                  <button className="carousel-button next" onClick={handleNext}></button>
                </div>
              </section>
                {!contentType && null }
                {contentType && <p>{differences[contentType]}</p>}
        </SectionContainer>
        
    )
}











              {/* <section className={classes.cardContainer}>
              {Object.keys(cardImg).map((type) => (
              <Card 
                key={type}
                type={type}
                isActive ={contentType == 'way' } 
                onClick = {() => handleClick('way')} 
              />
            ))}
              </section> */}


{/* <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
              <Card 
                isActive ={contentType == 'way' } 
                onClick = {() => handleClick('way')} 
              >
                <div style={{ display: 'absolute', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0', placeItems: 'center' }}>
                  <img
                    src={cardImg.bbb.logo}
                    alt="BANAN_BOMBA"
                    style={{  width: '10rem', height: '10rem', bottom: '-50%', left: '0%', transform: 'translate(0%, 0%)' }}/>
                  <img
                    src={cardImg.bbb.image}
                    alt="BANAN_BOMBA"
                    style={{ width: '10rem', height: '10rem',  bottom: '-40%', left: '0%', transform: 'translate(0%, 0%)' }}
                  />
                </div>
              </Card>

              <Card 
                isActive ={contentType == 'easy' } 
                onClick = {() => handleClick('easy')}
              >
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0', placeItems: 'center'}}>
                  <img
                    src={cardImg.bob.logo}
                    alt="BERRY_ON_BOARD"
                    style={{ width: '10rem', height: '10rem', margin: '-30%' }}/>
                  <img
                    src={cardImg.bob.image}
                    alt="BERRY_ON_BOARD"
                    style={{ width: '10rem', height: '10rem'}}/>
                </div>
              </Card>

              <Card 
                isActive ={contentType == 'program' } 
                onClick = {() => handleClick('program')}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0', placeItems: 'center' }}>
                  <img
                    src={cardImg.smm.logo}
                    alt="SUMMER"
                    style={{ width: '10rem', height: '10rem', margin: '-30%' }}/>
                  <img
                    src={cardImg.smm.image}
                    alt="SUMMER"
                    style={{  width: '10rem', height: '10rem' }}/>
                </div>
              </Card>

              <Card 
                isActive ={contentType == 'program' } 
                onClick = {() => handleClick('program')}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0', placeItems: 'center' }}>
                  <img
                    src={cardImg.smm.logo}
                    alt="Корзина"
                    style={{ width: '10rem', height: '10rem', margin: '-30%' }}/>
                  <img
                    src={cardImg.smm.image}
                    alt="Корзина"
                    style={{  width: '10rem', height: '10rem' }}/>
                </div>
              </Card>

              <Card 
                isActive ={contentType == 'program' } 
                onClick = {() => handleClick('program')}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0', placeItems: 'center'}}>
                  <img
                    src={cardImg.smm.logo}
                    alt="Корзина"
                    style={{ width: '10rem', height: '10rem', margin: '-30%' }}/>
                  <img
                    src={cardImg.smm.image}
                    alt="Корзина"
                    style={{  width: '10rem', height: '10rem' }}/>
                </div>
              </Card>
              </section> */}