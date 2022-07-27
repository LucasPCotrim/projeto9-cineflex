import './style.css'
import filmImage from '../../assets/img/film_2067.png';

export default function HomePage(){
  return (
    <div className='home-page'>
      <h1>
        Selecione o filme
      </h1>
      <FilmBrowser />
    </div>
  );
}



function FilmBrowser(){
  return (
    <div className='film-browser'>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
      <div className='film-poster'>
        <img src={filmImage} alt="film poster"/>
      </div>
    </div>
  );
}
