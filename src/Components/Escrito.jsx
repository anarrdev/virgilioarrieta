const Escrito = ({ num, titulo, texto }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button fs-5 fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${num}`} aria-expanded="false" aria-controls={`flush-collapse${num}`}>
                    {titulo}
                </button>
            </h2>
            <div id={`flush-collapse${num}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body texto_space">{texto}

                <div className="text-end"><i>-Virgilio Arrieta</i></div>
                </div>
            </div>
        </div>
    )
}

export default Escrito