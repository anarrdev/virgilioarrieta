import Escrito from "../Components/Escrito";

const dataEscrito = [
    {
        num: 1,
        titulo: 'Quién como yo',
        texto: `“Quien como yo” es el nombre de una gaita que se ha sumado al sentir de los venezolanos, ganando un espacio en sus corazones… algunos la llaman “la gaita de los nueve pantalones”.

A menudo me preguntan cómo se originó, cómo la compuse, cuál fue la motivación.
Siempre lo digo… es una gaita basada en el amor por todos aquellos que queremos y que deseamos no se vayan nunca.

Llegué en marzo del 76 a Barquisimeto a estudiar, como muchos que salieron a otros estados con el propósito de formarse y cargados de sueños.

Aunque iba a estudiar Ingeniería Electrónica, desde niño ya me atraía el arte, la pintura y la música. Para ese entonces, de manera autodidacta, pintaba; me acompañaba con la guitarra en algunas canciones y había compuesto mi primera canción allá en ese pueblecito donde nací, paso obligatorio hacia la bahía de Cata, llamado El Limón, a unos 5 km de Maracay.

Todas estas vivencias tienen que ver con la letra y lo que luego ella describe.

Culminando el primer semestre, me avisan que a mi padre lo habían hospitalizado y un mes después… nos deja.

Su despedida, a pesar del dolor, fue amorosa. Muchos de sus amigos y familiares contaron hermosas anécdotas, palabras de agradecimiento, bendiciones y le dedicaron algunas canciones, lo que hizo de aquel momento un hermoso reconocimiento a un ser humano, a un buen padre, campesino, humilde y sencillo. Esa vivencia me dejó un sentimiento especial y algunas preguntas.

Así… regreso de nuevo a clases en Barquisimeto.

Pasan algunos años y en el 80 conozco a Gloria Esperanza, quien hoy es mi esposa, y recién graduados nos casamos en el 83. En esa década nacen nuestros dos hijos.

El estar graduado, con la bella familia y desarrollándome como pintor y compositor me hizo sentir feliz y pleno.

Y es en el año 86 cuando se juntan los recuerdos con los días felices que vivía y mis sueños a futuro… surgen las preguntas: ¿llegaré a ser un artista reconocido? Y si así fuera, ¿cómo sería mi despedida?, ¿tan sentida y amorosa como la de mi padre? ¿Y mi esposa y mis hijos?, ¿qué pasará después?

Tenía en mis manos la guitarra, como acostumbro en los ratos libres, y comencé a escribir…

“Quizás porque ya las canas están cubriendo mi pelo
y que la vida es muy corta para lo que yo te quiero…”

Me estoy haciendo preguntas sin encontrarle respuesta, mi garganta enmudecida queriendo gritar con fuerza… cada frase, cada verso llegó de manera fluida y estuvo lista en media hora quizá… así… tal cual se conoce.

La graba por primera vez la agrupación Grey Zuliana, cantando Edinson Salazar, logrando ser gaita del año regional.

Tres años más tarde Los Morillos, cantando Argenis Carruyo, y dos años después Neguito Borjas… hoy sigue sonando en sus tantas versiones… y agradecido yo también la canto.`
    }
]




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