export default function Feedback() {
    return(
        <section>
            <h3>При заказе от 10 шайб цена за 1 шайбу - 295р</h3>
            {/* <Shayba/> */}
            <ul>
              {ways.map((way) => (<WayToTeach key ={way.title} {...way} /> ))}
            </ul>
          </section>
    )
}