import './Pay.css'

export default function Pay({ isActive }) {
    return (
      
      <span className={`pay-button ${isActive ? 'active' : 'inactive'}`}>
        {isActive ? 'Купить' : 'Новинки!'}
      </span>
    )
  
}

// pay-button 



