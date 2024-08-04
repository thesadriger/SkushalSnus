import React, { useState } from 'react'
import { useGesture } from '@use-gesture/react'
import WayToTeach from './WayToTeach'
import { ways } from './data'
import { styled } from 'styled-components'

const SectionContainer = styled.section`
  background-color: #242424;
  border-radius: 2rem; /* Округление краев */
  overflow: hidden; /* Прячет содержимое, выходящее за границы */
  transition: max-height 0.5s ease-in-out; /* Анимация раскрытия */
  max-height: ${(props) => (props.$isOpen ? '30rem' : 'auto')}; /* Контроль высоты */
`;
const SectionSpan = styled.span`
  padding: 1rem 2rem; /* Добавляем padding, чтобы контент не прилегал к краям */
  display: block; /* Обеспечивает размещение на отдельной строке */
`;

const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  // Использование useGesture для обработки жестов
  const bind = useGesture({
    onClick: (event) => {
      toggleSection();
    },
  });

  return (
    <SectionContainer $isOpen={isOpen} {...bind()}>
      <SectionSpan>
        <h3>При заказе от 10 шайб цена за 1 шайбу - 295р</h3>
      </SectionSpan>
      {isOpen && (
        <ul>
          {ways.map((way) => (
            <WayToTeach key={way.title} {...way} />
          ))}
        </ul>
      )}
    </SectionContainer>
  );
};

export default Section1;




// export default function Section1() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSection = () => {
//     setIsOpen((prev) => !prev);
//   };

//   // Использование useGesture для обработки жестов
//   const bind = useGesture({
//     onClick: () => {
//       toggleSection();
//     },
//   });

//   return (
    
//     <SectionContainer isOpen={isOpen} {...bind()}>
//       <SectionSpan>
//         <h3>При заказе от 10 шайб цена за 1 шайбу - 295р</h3>
//       </SectionSpan>
//       {isOpen && (
//         <ul>
//           {ways.map((way) => (
//             <WayToTeach key={way.title} {...way} />
//           ))}
//         </ul>
//       )}
//     </SectionContainer>
    
//   );
// }




















// import React, { useState } from 'react'
// import { useGesture } from '@use-gesture/react'
// import WayToTeach from './WayToTeach'
// import { ways } from './data'
// import { styled } from 'styled-components'

// const SectionContainer = styled.section`
//   background-color: #242424;
//   border-radius: 2rem; /* Округление краев */
//   overflow: hidden; /* Прячет содержимое, выходящее за границы */
//   transition: max-height 0.5s ease-in-out; /* Анимация раскрытия */
//   max-height: ${(props) => (props.isOpen ? '30rem' : '7rem')}; /* Контроль высоты */
// `;
// const SectionSpan = styled.span`
//   padding: 1rem 2rem; /* Добавляем padding, чтобы контент не прилегал к краям */
//   display: block; /* Обеспечивает размещение на отдельной строке */
// `;

// const ToggleButton = styled.button`
//   display: block;
//   margin: 1rem auto;
//   padding: 0.5rem 1rem;
//   background-color: #f0f0f0;
//   color: #242424;
//   border: none;
//   border-radius: 1rem;
//   cursor: pointer;
//   transition: background-color 0.5s ease-in-out;

//   &:hover {
//     background-color: #ddd;
//   }
// `;

// export default function Section1() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSection = () => {
//     setIsOpen((prev) => !prev);
//   };

//   // Использование useGesture для обработки жестов
//   const bind = useGesture({
//     onClick: () => {
//       toggleSection();
//     },
//   });

//   return (
//     <section >
//     <SectionContainer isOpen={isOpen}>
//       <SectionSpan>
//         <h3>При заказе от 10 шайб цена за 1 шайбу - 295р</h3>
//       </SectionSpan>
//       {isOpen && (
//         <ul>
//           {ways.map((way) => (
//             <WayToTeach key={way.title} {...way} />
//           ))}
//         </ul>
//       )}
//     </SectionContainer>
//       <ToggleButton onClick={toggleSection} {...bind()}>
//         {isOpen ? 'Свернуть' : 'Развернуть'}
//       </ToggleButton>
//     </section>
//   );
// }



// import WayToTeach from './WayToTeach'
// import { ways } from './data'
// import { styled } from 'styled-components'

// const SectionContainer = styled.section`
//   background-color: #242424;
//   border-radius: 2rem; /* Округление краев */
// `
// const SectionSpan = styled.span`
//    padding: 1rem 2rem; /* Добавляем padding, чтобы контент не прилегал к краям */
// `

// export default function Section1() {
//     return(
//         <SectionContainer>
//           <SectionSpan>
//             <h3>При заказе от 10 шайб цена за 1 шайбу - 295р</h3>
//             {/* <Shayba/> */}
//           </SectionSpan>
//             <ul>
//               {ways.map((way) => (<WayToTeach key ={way.title} {...way} /> ))}
//             </ul>
          
//           </SectionContainer>
//     )
// }