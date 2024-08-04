import { cardImg } from '../data'
import classes from './Card.module.css'



export default function Card({ type, children, onClick, isActive}) { 
    const { logo, image, title, description, price, rating } = cardImg[type] || {};
    const handleMouseEnter = () => console.log('entered')
    return (
        <button className= {isActive ? `${classes.button} ${classes.active}` : classes.button}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}>   
            <div  className={classes.cardContent}>
            <div className={classes.cardDetails}>
                            {title && <h2 className={classes.cardTitle}>{title}</h2>}
                            {description && <p className={classes.cardDescription}>{description}</p>}
                            {price !== undefined && <p className={classes.cardPrice}>{price}</p>}
                            {rating !== undefined && <p className={classes.cardRating}>Rating: {rating} / 5</p>}
                        </div>
                    {logo && <img src={logo} alt={`${title} Logo`} className={classes.cardLogo} />}
                    {image && <img src={image} alt={title} className={classes.cardImage} />}
                {children} 
            </div>
        </button>
    )
}














// import classes from './Card.module.css'



// export default function Card({ children, onClick, isActive}) { 
//     const handleMouseEnter = () => console.log('entered')
//     return (
//         <button className= {isActive ? `${classes.button} ${classes.active}` : classes.button}
//             onClick={onClick}
//             onMouseEnter={handleMouseEnter}>   
//             <div>
//                 {children} 
//             </div>
//         </button>
//     )
// }


// export default function Card({ children, onClick, isActive }) { 
//     let classes = 'button'
//     if (isActive) classes += ' active'
//     const handleMouseEnter = () => console.log('entered')
//     return (
//         <button className= {classes}
//             onClick={onClick}
//             onMouseEnter={handleMouseEnter}
//             > {children} 
//         </button>
        
//     )
// }
// ___________________________________________________

// function handleClick(){
//     console.log('button clicked')
// }
// <button onClick={handleClick}> {children} </button>
// ___________________________________________________

// const handleMouseEnter = () => console.log('entered')
// <button onMouseEnter={handleMouseEnter}> {children} </button>
// ___________________________________________________

// <button onDoubleClick={() => console.log('dbl')}> {children} </button>
