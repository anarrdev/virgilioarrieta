import Cancion from "../../Components/Cancion";
import DataCV from "./DataMusica/DataCV";

const CorazonVene = () => {
    return (
        <>
            <div className="seccion row">

                <div className="col-lg-4">
                    <img src="/virgilioarrieta/CorazonVenezolano.webp" className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">

                        {DataCV.map((cancion) => (
                            <Cancion
                                group="ACYS"
                                key={cancion.num}
                                num={cancion.num}
                                titulo={cancion.titulo}
                                letra={cancion.letra}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorazonVene;