import { vitrinaItem } from './DataVitrina'
import classes from './Tovar.module.css'



export default function Tovar({ type, children, onClick, isActive}) { 
    const { logo, image, title, description, price, rating } = vitrinaItem[type] || {};
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
