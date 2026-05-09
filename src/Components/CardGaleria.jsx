import { BotonesVerMas } from "./Botones";

const CardGaleria = ({ titulo, texto, img, ruta }) => {
    return (
        <div className="card p-2">
            <img src={img} className="imgG" alt={`imagen ${titulo}`} />
            <div className="card-body">
                <h4 className="text-center m-0">{titulo}</h4>

                {texto ? <p className="m-0">{texto}</p> : null}

                {ruta ?
                    <div className="d-flex justify-content-end mt-3">
                        <BotonesVerMas href={ruta} />
                    </div>
                : null}

            </div>
        </div>
    )
}

export default CardGaleria;