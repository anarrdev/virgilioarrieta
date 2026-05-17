import { BotonesRS2 } from "./Botones"

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="seccion d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start px-4 gap-3 mt-2">

  <div className="d-flex align-items-center gap-3">

    <Link to="/" className="navbar-brand">
      <h3 className="m-0">Virgilio Arrieta</h3>
    </Link>

    <ul className="d-flex gap-2 list-unstyled fs-3 align-items-center">
      <li>
        <BotonesRS2
          href="https://www.instagram.com/virgilioarrieta/"
          iconClass="bi bi-instagram"
          label="Instagram"
        />
      </li>

      <li>
        <BotonesRS2
          href="https://www.tiktok.com/@virgilio.arrieta"
          iconClass="bi bi-tiktok"
          label="TikTok"
        />
      </li>

      <li>
        <BotonesRS2
          href="https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn"
          iconClass="bi bi-spotify"
          label="Spotify"
        />
      </li>
    </ul>

  </div>

  <small className="mb-0 text-center text-md-end">
    © 2026 - Todos los derechos reservados
  </small>

</div>
  );
}

export default Footer;