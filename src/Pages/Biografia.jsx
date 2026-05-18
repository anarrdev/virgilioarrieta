import CardSeccion from "../Components/CardSeccion";

const Biografia = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/VAObraDetras.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            <h2>Biografía</h2>

            <p>Bienvenidos a la historia de un artista cuya vida y obra han dejado una huella única en el mundo del arte.</p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>Acompáñanos en este viaje para conocer al artista más allá de sus obras y adentrarte en la historia que hizo posible su genialidad.</strong>


            {/*NACIMIENTO*/}
            <CardSeccion titulo="Vida y Obra de un Creador Integral"
                img=""
                texto={<>
                    Virgilio Arrieta nació el <strong>14 de abril de 1955</strong> en El Limón, un pintoresco valle del estado Aragua, Venezuela. Este lugar, conocido por su rica naturaleza y sus faenas agrícolas centradas en la producción de caña de azúcar, moldeó su carácter y creatividad. Fue allí, en un entorno rural junto a sus padres y seis hermanos, donde transcurrieron los años más formativos de su vida. La conexión con esta tierra fértil y su vida sencilla marcó profundamente su sensibilidad artística.
                    <br /><br />
                    Sobre su infancia, Arrieta reflexiona con gratitud y orgullo:
                    <br />
                    <b>“Lo que ahora soy es producto de esa niñez.”</b>
                    <br /><br />
                    Desde muy pequeño, Virgilio mostró una marcada inclinación hacia las artes, especialmente la pintura y la música. <b>Con tan solo 11 años, demostró su osadía artística al organizar su primera exposición</b> de manera autodidacta, utilizando la cerca de un parque infantil de la Plaza Bolívar de El Limón para mostrar sus pinturas durante su reinauguración. Este gesto audaz atrajo la atención del gobernador, quien no solo adquirió una de sus obras, sino que también le otorgó una beca de estudios.
                    <br /><br />
                    Este evento fortuito marcó el inicio de su camino artístico, una senda que seguiría explorando con pasión y determinación.
                </>}

                extra={
                    <div style={{ width: "100%", aspectRatio: "16 / 5" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31405.004506947655!2d-67.6478568367882!3d10.291723149049908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803a4e0ecc53d3%3A0xf73d705adbec6eb1!2sEl%20Lim%C3%B3n%2C%20Aragua%2C%20Venezuela!5e0!3m2!1ses-419!2ses!4v1775413867638!5m2!1ses-419!2ses"
                            style={{
                                border: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                }
            />


            {/*JUVENTUD*/}
            <CardSeccion titulo="Juventud y Formación Dual"
                img="/virgilioarrieta/VAJoven.webp"
                caption='Virgilio Arrieta foto interna disco: Canto Portatil'
                texto={<>
                    Durante su adolescencia, Virgilio continuó cultivando su amor por las artes mientras cumplía con sus estudios formales. <b>A los 19 años se trasladó a Barquisimeto para estudiar Contaduría Pública y Finanzas en la universidad</b>, una decisión que le permitió desarrollar una formación académica sólida. Sin embargo, nunca perdió de vista su verdadero llamado: el arte y la música.
                    <br /><br />
                    En paralelo a sus estudios universitarios, participó en talleres de formación artística y asistió a salones de arte, donde fue perfeccionando su técnica. Este período de su vida fue clave para equilibrar su lado académico con su crecimiento creativo, sentando las bases para lo que se convertiría en una carrera multifacética y profundamente comprometida con la expresión artística.
                </>}
            />


            {/*CAMBIO DE CARRERA PROFESIONAL*/}
            <CardSeccion titulo="Entrega Plena al Arte y la Música"
                img="/virgilioarrieta/Retrato.webp"
                caption="Retrato - Técnica: Mixta, lápices de oleo sobre papel - 1985"
                texto={<>
                    En 1990, Arrieta tomó una decisión que transformaría por completo el rumbo de su vida: <b>dejó atrás su carrera como contador y auditor</b>, profesión que ejerció durante varios años en diversas empresas del centro occidente venezolano, para entregarse plenamente al arte y la música, convencido de que allí residía su verdadera vocación.

                    Ya instalado en Barquisimeto, abrió la <strong>Galería “Aguatinta”</strong>, un pequeño pero vibrante espacio creativo ubicado dentro de la reconocida tienda Maxxis, que pronto se convirtió en el núcleo de su actividad artística.
                    <br /><br />
                    En ese entorno íntimo y efervescente, Arrieta exploró con profundidad una amplia variedad de técnicas: trabajó con carboncillo, lápices de colores, tizas, ceras y lápices al óleo, así como con tinta, experimentando con texturas, contrastes y gestualidades que enriquecieron su lenguaje visual.
                    <br /><br />
                    Fue también allí donde consolidó su dominio del retrato, un género que interpreta con precisión técnica, fuerza expresiva y una sensibilidad que distingue cada una de sus obras.</>}
            />


            {/*EXPLORACIONES CREATIVAS*/}
            <CardSeccion titulo="Exploraciones Creativas"
                img="/virgilioarrieta/ObraMujerLPS.webp"
                caption="Etapa: Entre Lunas, Peces y Soles - 1994"
                texto={<>
                    El año 1993 marcó un hito importante en su trayectoria artística con la presentación de su primera gran propuesta, <strong>“Entre Peces, Lunas y Soles”</strong>. Esta serie de obras figurativas le otorgó un reconocimiento nacional considerable, consolidándolo como un artista versátil y visionario. Las críticas positivas no fueron suficientes para detener su inquietud creativa; al contrario, Arrieta buscó ir más allá de las formas tradicionales.
                    <br /><br />
                    En su afán por capturar la esencia de las emociones humanas, comenzó a distanciarse del realismo convencional y a explorar un lenguaje artístico más simbólico y minimalista. Este enfoque lo llevó a sintetizar las formas, desarrollando un estilo caracterizado por personajes unilineales, de doble rostro, expresivas miradas y composiciones que relataban narrativas poéticas. Sus obras buscaban no solo impactar visualmente, sino también resonar en lo más profundo del espectador.
                    <br /><br />
                    El artista describió este proceso como una búsqueda interior:
                    <br />
                    <b>“Desde la belleza externa del humano, voy en la búsqueda de la belleza interna.”</b>
                    <br /><br />
                    A lo largo de su trayectoria, ha demostrado ser un creador en constante transformación, comprometido con la búsqueda de un lenguaje artístico propio. Su obra, arraigada en la sensibilidad humana y en las emociones más universales, trasciende fronteras y géneros, dejando un impacto imborrable tanto en el arte como en la música.</>}

            />


            {/*LA MUSICA*/}
            <CardSeccion titulo="La Música: Una Carrera Prolífica y Cultural"
                img=""
                caption=""
                texto={<>
                    La música, siempre presente en su vida, fue otro de los pilares fundamentales de su obra. Virgilio Arrieta <b>compuso más de trescientas canciones</b> que han sido interpretadas por artistas nacionales e internacionales como <strong>Simón Díaz, Oscar D’León, Serenata Guayanesa, María Rivas, Neguito Borjas, Gualberto Ibarreto</strong> y muchos otros. Sus letras, cargadas de lirismo y sensibilidad, celebran la cultura y las tradiciones venezolanas.
                    <br /><br />
                    Producciones como <strong>“El Canto del Pueblo II”, “Lo Nuestro es lo Mejor II”, “Agua Bendita”, “Corazón Venezolano”, “El Tiquititaqui del Tambor”, “Falta por Cantarle a Tanta Gente”, “El Amor es la Vida”, “Arcilla Camino y Sol”, y “Si Así Llueve Que No Escampe”</strong> destacan entre sus contribuciones al acervo musical venezolano. Estas producciones no solo muestran su versatilidad como compositor, sino también su capacidad para abordar temas que resuenan profundamente con la identidad nacional.
                </>}
            />


            {/*LO NUESTRO ES LO MEJOR*/}
            <CardSeccion titulo='“Lo Nuestro es lo Mejor”: Un Tributo a la Música Venezolana'
                img="/virgilioarrieta/LoNuestroEsLoMejor.webp"
                caption='Logotipo de la Gira y Produccion:
                “Lo nuestro es lo mejor” Empresas POLAR - 1997'
                texto={<>
                    La trayectoria musical de Virgilio Arrieta alcanzó un nuevo nivel de reconocimiento con el éxito de sus composiciones, que comenzaron a ser grabadas por destacados artistas de diversos géneros musicales. Este logro no solo aumentó su visibilidad en la industria, sino que también consolidó su reputación como un compositor talentoso y versátil. Su capacidad para crear letras profundas y melodías cautivadoras atrajo a intérpretes consagrados, quienes vieron en sus obras una oportunidad para enriquecer sus propios repertorios.
                    <br /><br />
                    En este contexto, surgió uno de los proyectos más emblemáticos de su carrera: la gira nacional <strong>“Lo Nuestro es lo Mejor”</strong>, organizada en colaboración con <strong>Empresas Polar</strong>. Este evento fue mucho más que una serie de conciertos; se convirtió en un homenaje a la música venezolana y en un punto de encuentro cultural. La gira reunió a numerosos artistas que habían interpretado las canciones de Arrieta, transformando cada presentación en una celebración colectiva del talento y las tradiciones musicales del país.
                    <br /><br />
                    El éxito de la gira fue rotundo. Las multitudes que acudían a cada concierto reflejaban el entusiasmo y el aprecio por el arte de Arrieta y los intérpretes que lo acompañaban. Cada actuación no solo reforzaba el vínculo entre el artista y su público, sino que también dejaba una huella imborrable en la escena musical venezolana de la época.
                    <br /><br />
                    <strong>“Lo Nuestro es lo Mejor”</strong> no solo destacó el legado de Arrieta como compositor, sino que también subrayó su compromiso con la cultura local, convirtiéndose en un testimonio del impacto de su obra en la identidad musical de Venezuela.
                </>}
            />


            {/*RECONOCIMIENTO INTERNACIONAL*/}
            <CardSeccion titulo="Reconocimiento Internacional y Embajador Cultural"
                img="/virgilioarrieta/MusicayColoresdeVenezuela.webp"
                caption='"Musica y Colores de Venezuela" Italia - 1995'
                texto={<>
                    En 1995, Virgilio Arrieta fue invitado a participar en la prestigiosa gira <strong>“Música y Colores de Venezuela” en Italia</strong>, un evento que lo posicionó como un embajador de la cultura venezolana en el ámbito internacional. Durante esta gira, presentó un repertorio cuidadosamente seleccionado, que exaltaba las tradiciones culturales y musicales de su país. Las letras de sus canciones, profundamente inspiradas en vivencias personales, así como en las costumbres y tradiciones de los pueblos venezolanos, resonaron con un público diverso que recibió su trabajo con entusiasmo y admiración.
                    <br /><br />
                    Cada interpretación estuvo impregnada de un fuerte sentimiento venezolano, logrando transmitir la esencia y el espíritu del país a través de su música. Sus melodías, cargadas de lirismo y emotividad, reflejaban la diversidad cultural, la rica historia y el vibrante folclore de Venezuela. La conexión entre Arrieta y el público italiano fue palpable, convirtiendo cada presentación en una experiencia inolvidable que celebraba el colorido y la profundidad de la música venezolana.
                    <br /><br />
                    Tres años más tarde, <b>en 1998, Arrieta amplió aún más su impacto internacional al viajar al Reino Unido bajo el patrocinio de British Petroleum</b>. Participó en el prestigioso <b>Festival de Aberdeen en Escocia y en el emblemático Bolívar Hall de Londres</b>, dos escenarios que le ofrecieron la oportunidad de llevar su música a nuevas audiencias. Estas presentaciones permitieron a Arrieta compartir la riqueza cultural venezolana con públicos de diferentes contextos, reafirmando su compromiso de actuar como un puente entre culturas.
                    <br /><br />
                    En cada una de estas experiencias internacionales, Arrieta no solo mostró su talento como músico y compositor, sino también su capacidad para capturar la esencia de Venezuela y presentarla de manera universal. Estas giras no fueron simplemente eventos artísticos; representaron un testimonio de la capacidad transformadora del arte, capaz de conectar culturas, emocionar audiencias y celebrar la identidad venezolana en escenarios globales.
                </>}
            />


            {/*TELEVISION*/}
            <CardSeccion titulo="El Alma de los Pueblos y Su Aporte a la Cultura Popular"
                img=""
                caption=""
                texto={<>
                    Como locutor certificado desde 1992, Virgilio Arrieta dirigió durante siete años el programa <strong>“El Alma de los Pueblos”</strong> en <b>Promar Televisión</b>, un espacio dedicado a la promoción de la cultura y la música venezolana. Además, participó como jurado en eventos internacionales, como el <b>Festival de Villavicencio en Colombia (1997)</b>, y lideró proyectos innovadores como la creación de agrupaciones musicales juveniles como <strong>Bahareque, Santoral y Aguamiel</strong>, con quienes grabó 32 de sus composiciones.
                </>}
            />


            {/*LEGADO*/}
            <CardSeccion titulo="Un Legado Artístico y Humano"
                img="/virgilioarrieta/MuralUcla.webp"

                caption={`Mural: "Ah mundo Barquisimeto"
                    Técnica: Pigmento sobre gres
                    Medidas: 224m2
                    Lugar: Rectorado de la UCLA Barquisimeto Edo. Lara, Venezuela`}

                texto={<>
                    En su faceta como artista plástico, Arrieta exploró diversas formas de expresión, llevando su obra más allá del caballete para crear murales de gran escala, incluyendo uno que supera los <b>224 m²</b>. Su arte, profundamente humanista y poético, ha sido expuesto en <b>Latinoamérica, Estados Unidos y Europa</b>, logrando resonar con audiencias de distintas culturas. La unión de sus talentos como pintor, compositor y músico lo convierte en un creador integral.
                    <br /><br />
                    Según sus palabras:
                    <br />
                    <b>“Mis dibujos se convierten en canciones, y mis canciones se llenan de color. Es una relación necesaria e inevitable.”</b>
                    <br /><br />
                    Virgilio Arrieta es un artista y cantautor cuya obra trasciende las fronteras de lo visual y lo sonoro. Su legado, profundamente arraigado en las tradiciones venezolanas, celebra la belleza de la vida cotidiana, la dualidad del ser humano y el poder del arte para conectar corazones y culturas. Su trayectoria, marcada por el amor a su país y su búsqueda constante de excelencia, lo consolida como una de las figuras más destacadas del panorama artístico y cultural venezolano.
                </>}
            />



            {/*DISTINCIONES*/}
            <CardSeccion titulo="Algunas distinciones"
                img="/virgilioarrieta/VAObraDetras.webp"
                caption="Virgilio Arrieta junto a una de sus obras en el Country Club Barquisimeto"
                texto={<>
                    <ul>
                        <li>
                            1999 - <b>Orden Jacinto Lara</b>, en su primera clase, otorgada por el clero y el Ejecutivo Nacional.
                        </li>
                        <li>
                            2001 - <b>Embajador cultural de Lara</b>.
                        </li>
                        <li>
                            2006 - <b>Epónimo de todas las carreras de la XXV promoción de la Universidad Yacambú</b>.
                        </li>
                        <li>
                            2007 - Recibe la <b>Orden Mario Briceño Iragorri</b>, como artista e hijo ilustre, Maracay Aragua.
                        </li>
                        <li>
                            2015 - Recibe <b>Orden Juan Guillermo Iribarren</b>, en su primera clase.
                        </li>
                        <li>
                            2024 - Recibe <b>Medalla Institucional de la Universidad Centroccidental Lisandro Alvarado</b> (UCLA)-Barquisimeto, por su excelente contribución a la cultura en nuestra región y el país.
                        </li>
                        <li>
                            2025 - Recibe <b>Orden “Hijo Ilustre del Municipio Crespo”</b>, en su Única Clase
                        </li>
                    </ul>
                </>}
            />
        </div >

    )
}

export default Biografia;



<p>
    <b className="d-flex gap-2">
        <i className="bi bi-chat-text"></i>
        Su obra es un reflejo de su pasión por el arte y su deseo de conectar con el mundo.
    </b>
</p>