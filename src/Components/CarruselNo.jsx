const CarruselNo = ({ id, img1, img2, img3, img4, img5, img6 }) => {
  return (
    <div id={`carousel${id}`} className="carousel slide" data-bs-interval="false" data-bs-ride="false">
      <div className="text-center carousel-inner">
        <div className="carousel-item active p-2">
          <img src={img1} className="imgCN d-block" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="imgCN d-block" />
        </div>
        {img3 ? <div className="carousel-item">
          <img src={img3} className="imgCN d-block" />
        </div> : null}
        {img4 ? <div className="carousel-item">
          <img src={img4} className="imgCN d-block" />
        </div> : null}
        {img5 ? <div className="carousel-item">
          <img src={img5} className="imgCN d-block" />
        </div> : null}
        {img6 ? <div className="carousel-item">
          <img src={img6} className="imgCN d-block" />
        </div> : null}
      </div>


      <button className="carousel-control-prev custom-control" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span>Prev</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="next">
        <span>Next</span>
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}

export default CarruselNo;