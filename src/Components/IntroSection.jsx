// export default function IntroSection() {
//     return(
//         <section>
//             <h1 className="centered">410 руб</h1>
//             <h3 className="centered" style={{ color: '#666'}}>ZUZU BY FAFF BERRY ON BOARD (150 МГ) - ГРАНАТ, КЛУБНИКА, ЧЕРНИКА</h3>
//         </section>
//     )
// }

import React from "react"

const e = React.createElement

export default function IntroSection() {
    return e('section', null, [
        e('h1', {className: 'centered', key : 1 }, '410 руб'),
        e('h3', {className: 'centered', style: {color: '#666'}, key : 2}, 'ZUZU BY FAFF BERRY ON BOARD (150 МГ) - ГРАНАТ, КЛУБНИКА, ЧЕРНИКА'),
    ])
}