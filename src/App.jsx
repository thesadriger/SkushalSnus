import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import TabSection from './Components/TabSection'
import Header from './Components/Header/Header'
import Pay from './Components/Payment/Pay'
import IntroSection from './Components/IntroSection'
import ShopSection from './Components/ShopSection'
import StoreSection from './Components/StoreSection'
import { useState, useRef } from 'react'

export default function App() {
  const [tab, setTab] = useState('main')
  const [contentType, setContentType] = useState(null);
  const sectionRef = useRef(null);

  function handleMainClick(e) {
    // Проверяем, что клик был не по карточке
    if (!e.target.closest('.button')) {
      setContentType(null);
    }
  }

  function handlePayClick() {
    if (!contentType && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const isPayActive = !!contentType;

  return ( 
    <>
        <Header/>
      <main>
        {/* <IntroSection/> */}
        <TabSection active={tab} onChange={(current) => setTab(current)} />
        {tab === 'main' && (
        <>
          <div onClick={handlePayClick}>
            <Pay isActive={isPayActive} />
          </div>
          <Section2
            onMainClick={handleMainClick}
            sectionRef={sectionRef}
            contentType={contentType}
            setContentType={setContentType} />
          <Section1/>
          
        </>
        )}

        {tab === 'collection' && <ShopSection/>}
        {tab === 'profile' && <StoreSection/>}
        {tab === 'store' && <StoreSection/>}
      </main>
    </>
  )
}





















  // useEffect(() => {
  //   // Пример асинхронной операции
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://api.example.com/data');
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);
// ___________________________________________________

{/* <WayToTeach title={ways[0].title} description={ways[0].description}/>  {/*- как вариант использования 
              <WayToTeach {...ways[1]}/>
              <WayToTeach {...ways[2]}/>
              <WayToTeach {...ways[3]}/> */}
// ___________________________________________________

// { !contentType ? <p> Выберите товар </p> : null}
// { contentType ? <p>{differences[contentType]}</p> : null}
// ___________________________________________________

// {!contentType && <p> Выберите товар </p> }
// {contentType && <p>{differences[contentType]}</p> }
// ___________________________________________________


// let tabContent = null

// if( contentType ){
//   tabContent = <p>{differences[contentType]}</p>
// } else {
//   tabContent = <p> Выберите товар </p>
// }

// {tabContent}
// ___________________________________________________

// {contentType ? <p>{differences[contentType]}</p> : <p>Выберите товар</p>}
// ___________________________________________________
