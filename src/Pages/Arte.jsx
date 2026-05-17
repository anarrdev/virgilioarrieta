import CardGaleria from "../Components/CardGaleria";
import CarruselNo from "../Components/CarruselNo";


const Arte = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/ObraProcesionDP.webp" className="card-img-banner" alt="ObraProcesionDP - Virgilio Arrieta" style={{objectPosition: "50% 23%"}}/>

            <h2>Arte</h2>

            <p>Bienvenidos a la galería virtual de Virgilio Arrieta, un espacio dedicado a su obra plástica. Aquí podrás explorar una colección de sus cuadros y creaciones visuales, donde cada pieza refleja su visión única y su habilidad para transformar emociones y conceptos en arte.</p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>Te invitamos a sumergirte en esta experiencia visual y descubrir la profundidad de su trabajo artístico.</strong>


            {/* OBRA PLASTICA */}
            <h2 id="obraPlastica">Obra Plástica</h2>
            <div className="p-2">

                <CarruselNo
                    id="ObraPlastica"
                    img1="/virgilioarrieta/ObraNuestroEncuentro.webp"
                    img2="/virgilioarrieta/ObraNocheDeJazz.webp"
                    img3="/virgilioarrieta/ObraMujerSentada.webp"
                    img4="/virgilioarrieta/ObraParejaBicicleta.webp"
                    img5="/virgilioarrieta/ObraRS.webp"
                />

            </div>


            {/*MURALES*/}
            <div id="murales">
                <h2>Murales</h2>
                <div className="p-2">

                    {/* UCLA */}
                    <CarruselNo
                        id="MuralUcla"
                        img1="/virgilioarrieta/MuralUcla1.webp"
                        img2="/virgilioarrieta/MuralUcla2.webp"
                        img3="/virgilioarrieta/MuralUcla4.webp"
                        img4="/virgilioarrieta/MuralUcla3.webp"
                    />

                    <div className="text-center">
                        <h4 className="mt-2">"Ah mundo Barquisimeto"</h4>
                        <p>Técnica: Pigmento sobre gres - Medidas: 224m2 - Lugar: Rectorado de la UCLA, Barquisimeto, Edo. Lara-Venezuela</p>
                        <p>Año: 2003</p>
                    </div>
                </div>


                <div className="mt-2">

                    {/* ASCARDIO */}
                    <CarruselNo
                        id="MuralAscardio"
                        img1="/virgilioarrieta/MuralAscardio.webp"
                        img2="/virgilioarrieta/MuralAscardio1.webp"
                    />

                    <div className="text-center p-2">
                        <h4 className="mt-2">"ASCARDIO"</h4>
                        <p>Técnica: Pigmento sobre madera - Medidas: - Lugar: ASCARDIO, Barquisimeto, Edo. Lara-Venezuela</p>
                        <p>Año: 2021</p>
                    </div>
                </div>


                <div className="mt-2">

                    {/* MuralUniversidad Valencia */}
                    <CarruselNo
                        id="MuralUniversidadValencia"
                        img1="/virgilioarrieta/MuralUniversidadValencia.webp"
                        img2="/virgilioarrieta/MuralUniversidadValencia1.webp"
                    />

                    <div className="text-center p-2">
                        <h4 className="mt-2">"Universalidad"</h4>
                        <p>Técnica: Pigmento sobre gres - Medidas: - Lugar: Universidad, Valencia, Edo. Carabobo-Venezuela</p>
                        <p></p>
                    </div>
                </div>

            </div>


            {/* INTERVENCIONES */}
            <div id="intervenciones">
                <h2>Diseño e Intervenciones</h2>

                <div className="d-flex flex-wrap gap-2">
                    <div className="galeria-item">
                        <CardGaleria
                            titulo="Madera"
                            img="/virgilioarrieta/ObraMaderaMusicos.webp"
                        />
                    </div>

                    <div className="galeria-item">
                        <CardGaleria
                            titulo="Arte digital"
                            img="/virgilioarrieta/ObraTamunangue.webp"
                        />
                    </div>

                    <div className="galeria-item">
                        <CardGaleria
                            titulo="Intervenciones"
                            img="/virgilioarrieta/CamisetaObra.webp"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arte;