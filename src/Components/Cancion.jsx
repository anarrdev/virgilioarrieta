const Cancion = ({ num, titulo, letra }) => {
    return (
        <div className="accordion-item">

            <h2 className="accordion-header">
                <button
                    className="accordion-button fs-5 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${num}`}
                    aria-expanded="false"
                    aria-controls={`collapse${num}`}
                >
                    {titulo}
                </button>
            </h2>

            <div
                id={`collapse${num}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">

                    <div className="text-center">
                        <h6 className="m-0">{titulo}</h6>
                        <small>Autor: Virgilio Arrieta</small>
                    </div>

                    <br />

                    <p className="texto_space">{letra}</p>

                </div>
            </div>

        </div>
    )
}

export default Cancion;