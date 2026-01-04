import './Carrossel.css'

export default function Carrossel({img1, img2, img3, img4}){
    return(
      <div className="carousel-wrapper">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner" style={{maxHeight: 650}}>
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100"/>
            </div> 
            <div className="carousel-item">
              <img src={img3} className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100"/>
            </div>
          </div>
          <button className="carousel-control-prev" style={{width: 100}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" style={{width: 100}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}