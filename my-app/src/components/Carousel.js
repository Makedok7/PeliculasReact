
import Movie from './Movie';
import movies from '../json/movies.json';

function CarouselFade() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade pt-2 " data-bs-ride="carousel" data-bs-interval="60000" style={{backgroundImage:'url(/images/banners/banner5.jpg',backgroundSize:"cover"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="text-center w-75 mx-auto" style={{ color: "rgb(231, 71, 151)" ,fontStyle:"italic"}}>
            <img src='/images/banners/banner-welcome.png' alt="welcome" className="img-fluid"/>
            <h1 className="text-wrap">DESLIZA PARA VER LAS PELICULAS</h1>
          </div>
        </div>
        {movies.map((movie,i) =>
          <div className="carousel-item" key={i} >
            <Movie
              
              title={movie.title}
              duration={movie.duration}
              image={movie.image}
              description={movie.description}
              actors={movie.actors}
              tags={movie.tags}
              reviews={movie.reviews}
            ></Movie>
          </div>
        )}
      </div>
      <button className="carousel-control-prev bg-dark" style={{ width: "4%" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next bg-dark " style={{ width: "4%" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default CarouselFade;

/* otra forma 
import Carousel from 'react-bootstrap/Carousel';
import Movie from './Movie';
import movies from '../json/movies.json';
function CarouselFade() {
  return (
    <Carousel fade>
      {movies.map(movie =>
        <Carousel.Item>
          <Movie
            title={movie.title}
            duration={movie.duration}
            image={movie.image}
            description={movie.description}
            actors={movie.actors}
            tags={movie.tags}
            reviews={movie.reviews}
          ></Movie>
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default CarouselFade;
*/