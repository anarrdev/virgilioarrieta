import { BotonesVerMas } from "./Botones";

const CardSeccion = ({ titulo, img, texto, caption, href, extra }) => {
    return (
        <div className="seccion p-2">

            <div className="row align-items-start g-3">

                {img && (
                    <div className="col-12 col-md-4">
                        <img src={img} className="imgS w-100" alt={titulo} />
                        {caption && (
                            <p className="mb-0">
                                <small>{caption}</small>
                            </p>
                        )}
                    </div>
                )}

                <div className={img ? "col-12 col-md-8" : "col-12"}>
                    <h4>{titulo}</h4>

                    <p className="texto_space">{texto}</p>

                    {extra && <div>{extra}</div>}

                    {href && (
                        <div className="d-flex justify-content-end">
                            <BotonesVerMas href={href} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default CardSeccion;