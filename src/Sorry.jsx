import Oops from './Components/Titles/Oops';
import { styled } from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const SectionContainer = styled.section`
  border-radius: 2em;
  border: 2px solid transparent;
  border-color: #ffffff;
  font-size: 0.8em;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
//   background: #66b2ca;
  color: #ffffff;
  transition: all 0.25s ease;
  overflow: hidden;
  position: relative;
  width: 8rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  margin-top: 20px; /* Отступ сверху для визуального разделения */
`;

export default function Sorry() {
  return (
    <MainContainer>
      <Oops />
      <a href="https://myshop-bcw638.myinsales.ru/" target="_blank" rel="noopener noreferrer">
        <SectionContainer>
          <h4>Сайт</h4>
        </SectionContainer>
      </a>
    </MainContainer>
  );
}
