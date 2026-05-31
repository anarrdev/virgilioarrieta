import Cancion from "../../Components/Cancion";
import DataACYS from "./DataACYS";

const ArcillaCamino = () => {
    return (
        <>
            <div className="seccion row">

                <div className="col-lg-4">
                    <img src="/virgilioarrieta/ArcillaCaminoySol.webp" className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">

                        {DataACYS.map((cancion) => (
                            <Cancion
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

export default ArcillaCamino;