import "./Banner.css"; //importacion de los estilos del banner

import { BotonesRS } from "../../Components/Botones"; //importacion del componente de botones

function Banner() {
    return (
        <>
            <img src="/virgilioarrieta/MuralOriginalUCLA.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            {/*Comentario de bienvenida a la pagina*/}
            <p>Te invitamos a explorar su universo artístico, donde cada creación cuenta una historia y despierta emociones. Descubre sus murales vibrantes, su música envolvente y sus escritos inspiradores. Gracias por acompañar a Virgilio en este emocionante viaje creativo.</p>

            <strong className="fs-5 text-center">¡Disfruta de la Experiencia!</strong>

            {/*Botones de redes sociales*/}
            <div className="d-flex justify-content-center">
                <ul className="d-flex align-items-center gap-3 list-unstyled fs-3">
                    <li>
                        <BotonesRS
                            iconClass="bi bi-instagram"
                            label="Instagram"
                            onClick={() =>
                                window.open("https://www.instagram.com/virgilioarrieta/", "_blank")
                            }
                        />
                    </li>

                    <li>
                        <BotonesRS
                            iconClass="bi bi-tiktok"
                            label="TikTok"
                            onClick={() =>
                                window.open("https://www.tiktok.com/@virgilio.arrieta", "_blank")
                            }
                        />
                    </li>

                    <li>
                        <BotonesRS
                            iconClass="bi bi-spotify"
                            label="Spotify"
                            onClick={() =>
                                window.open(
                                    "https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn",
                                    "_blank")
                            }
                        />
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Banner;