import Banner from "./Banner"
import CardSeccion from "../../Components/CardSeccion"
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="d-flex flex-column gap-2">

      <Banner />


      {/*BIOGRAFIA*/}
      <CardSeccion
        titulo="Historia de un Creador"
        img="/virgilioarrieta/VA taller.webp"
        texto={`Te invitamos a descubrir la biografía de Virgilio Arrieta, un creador integral nacido en El Limón en 1955, cuya vida ha estado profundamente ligada al arte, la música y la cultura venezolana. Desde sus primeros años mostró una sensibilidad especial que lo llevó a desarrollar, de forma autodidacta, una trayectoria artística que abarca la pintura, la música y la expresión cultural.
        
        A lo largo de su vida ha construido una obra amplia y diversa: como pintor ha explorado distintos lenguajes visuales, y como compositor ha creado más de 300 canciones interpretadas por reconocidos artistas nacionales e internacionales. Su trabajo ha trascendido fronteras, consolidándolo como un embajador de la identidad cultural venezolana.
        
        Conocer su historia es adentrarse en el recorrido de un artista que ha hecho del arte una forma de vida, uniendo emoción, creatividad y compromiso cultural en cada una de sus obras.`}
        href="/biografia"
      />


      <p className="text-center mt-2">Artista polifacético que abarca la pintura, el muralismo, la escultura, La música, la composición, la escritura y la producción.</p>

      {/*CAROUSEL*/}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover">

        <div className="text-center carousel-inner">

          <div className="carousel-item active">
            <Link to="/arte" className="text-decoration-none text-dark">
              <img src="/virgilioarrieta/ObraParejaBailando.webp" className="imgC" style={{objectPosition: "50% 15%"}}/>
              <h3 className="mt-2">ARTE</h3>
              <p>
                Descubre un universo creativo que abarca pintura, murales, escultura,
                arte digital y diseño aplicado en prendas y accesorios. Cada pieza conecta
                arte y vida cotidiana.
              </p>
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/musica" className="text-decoration-none text-dark">
              <img src="/virgilioarrieta/ObraGuitarrista.webp" className="imgC" style={{objectPosition: "50% 80%"}}/>
              <h3 className="mt-2">MÚSICA</h3>
              <p>
                Sumérgete en un universo musical y descubre canciones de su autoría que
                conectan con emociones reales, letras que cuentan historias y melodías que invitan a cantar.
              </p>
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/escritos" className="text-decoration-none text-dark">
              <img src="/virgilioarrieta/ObraLinea5.webp" className="imgC" style={{objectPosition: "50% 30%"}}/>
              <h3 className="mt-2">ESCRITURA</h3>
              <p>
                Adéntrate en la obra literaria del artista, donde su libro y diversos escritos
                revelan una voz personal que explora emociones, ideas y experiencias desde una mirada creativa y reflexiva.
              </p>
            </Link>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span>Prev</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span>Next</span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>

      </div>
    </div>
  );
}

export default Home;