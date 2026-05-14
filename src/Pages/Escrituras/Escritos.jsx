import Escrito from "../../Components/Escrito";
import dataEscrito from "./dataEscrito"



const Escritos = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/UltimaCena.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            <h2>Escritos</h2>
            <p>En esta sección, se abre una ventana al universo creativo de Virgilio Arrieta. Aquí podrás adentrarte en su libro Cuento hasta diez, así como en las historias que dieron origen a sus canciones, sus pensamientos más íntimos y una selección de poemas que reflejan su forma de ver la vida.</p>

<p>No es solo una colección de textos, sino un recorrido por las emociones, recuerdos y vivencias que han marcado su camino como autor. Cada escrito invita a detenerse un momento, leer con calma y descubrir las ideas y sentimientos que han acompañado su obra a lo largo del tiempo.</p>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <h4>Historias de una canción</h4>
                {dataEscrito.map((item) => (
                    <Escrito
                        key={item.id}
                        num={item.id}
                        titulo={item.titulo}
                        texto={item.texto}
                    />
                ))}
            </div>

        </div>
    )
}

export default Escritos;