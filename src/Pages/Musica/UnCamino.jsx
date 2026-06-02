import Cancion from "../../Components/Cancion";
import DataUCYUE from "./DataUCYUE";

const UnCamino = () => {
    return (
        <>
            <div className="seccion row">

                <div className="col-lg-4">
                    <img src="/virgilioarrieta/UnCaminoYUnaEstrella.webp" className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">

                        {DataUCYUE.map((cancion) => (
                            <Cancion
                            group="UCYUE"
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

export default UnCamino;