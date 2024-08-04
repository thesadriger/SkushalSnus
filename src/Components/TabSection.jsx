import React from 'react';
import { styled } from 'styled-components'
// import Card from './Card/Card'
import MenuButtons from './MenuButtons/MenuButtons'
import { menuBtn } from './data'


export default function TabSection({ active, onChange }) {
    return(
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
            <MenuButtons isActive = {active === 'main' } onClick={() => onChange('main')}>Магазин</MenuButtons>
            <MenuButtons isActive = {active === 'store' } onClick={() => onChange('store')}>Корзина
                <img
                    src={menuBtn.shop.image}
                    alt="Корзина"
                    style={{ width: '10rem', height: '10rem', marginRight: '1.5rem', marginTop: '3rem', position: 'flex', background: 'var(--product-background)' }}
                />
            </MenuButtons>
            <MenuButtons isActive = {active === 'shop' } onClick={() => onChange('shop')}>Магазин</MenuButtons>
        </section>
    )
}


// marginBottom: '5rem', 