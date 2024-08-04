import './NPStyle.css'


export default function SectionTitle() {
    return(
        <section className="header-title">
            <div className="title-wrapper">
                <h1 className="sweet-title">
                    <span data-text="Что-то">Что-то</span>
                    <span data-text="Новенькое!">Новенькое!</span>
                </h1>
            </div>
        </section>
    )
}