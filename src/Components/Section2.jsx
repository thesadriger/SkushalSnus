import Card from './Card/Card'
import TestCardCarusel from './TestCardCarusel'
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
// 
export default function Section2({ onMainClick, sectionRef, contentType, setContentType }) {
 
    return(
        <SectionContainer onClick={onMainClick} ref={sectionRef}>
              <section><NewProduct/></section>
              {/* <TestCardCarusel/> */}
              <section><Carousel/></section>
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