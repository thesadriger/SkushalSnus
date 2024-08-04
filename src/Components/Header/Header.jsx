import React from 'react'
import { styled } from 'styled-components'
import SnusLavka from '../Titles/SnusLavka'
import './Header.css'
// import { ReactComponent as logo } from './logotype-snslavka_black.svg'
import logo from '/logotype-snslavka_black.svg'
import { useState } from 'react'

const HeaderContainer = styled.header`
  height: 15rem;
  max-width: 1200px;
  display: flex;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-color: rgb(255, 255, 255);
  background: linear-gradient(to bottom right, #0e573c, #25c389);
`
const ImgHeader = styled.img`
  height: 10rem;
  background-color: var(--background-color);
  padding: 0 2rem;
  // margin-bottom: 2rem;

`
export default function Header() {

    return (
      <HeaderContainer>
        <ImgHeader src={logo} alt={"Logotype"}/>
        {/* <SnusLavka word="SNUS"/> */}
    </HeaderContainer>
    )
  }






  // const [now, setTime] = useState(new Date()) Дата в Live
  // setInterval(() => setTime(new Date()),1000)

  {/* <span>Time: { now.toLocaleTimeString() }</span> */}