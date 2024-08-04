import classes from './MenuButtons.module.css'



export default function MenuButtons({ children, onClick, isActive}) { 
    const handleMouseEnter = () => console.log('entered')
    return (
        <button className= {isActive ? `${classes.button} ${classes.active}` : classes.button}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}>   
            <div>
                {children} 
            </div>
        </button>
    )
}