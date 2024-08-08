import React from 'react';
import { styled } from 'styled-components'
// import Card from './Card/Card'
import MenuButtons from './MenuButtons/MenuButtons'
import { menuBtn } from './data'

const MenuSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: #f8f9fa; /* Пример фона */
`;


export default function TabSection({ active, onChange }) {
    return(
        <MenuSection>
            <MenuButtons isActive = {active === 'main' } onClick={() => onChange('main')}>Главная</MenuButtons>
            <MenuButtons isActive = {active === 'store' } onClick={() => onChange('store')}>Корзина
                {/* <img
                    src={menuBtn.shop.image}
                    alt="Корзина"
                    style={{ width: '10rem', height: '10rem', marginRight: '1.5rem', marginTop: '3rem', position: 'flex', background: 'var(--product-background)' }}
                /> */}
            </MenuButtons>
            <MenuButtons isActive = {active === 'collection' } onClick={() => onChange('collection')}>Каталог</MenuButtons>
            <MenuButtons isActive = {active === 'profile' } onClick={() => onChange('profile')}>Профиль</MenuButtons>
            <MenuButtons isActive = {active === 'shop' } onClick={() => onChange('shop')}>Карта</MenuButtons>
        </MenuSection>
    )
}


// marginBottom: '5rem', 