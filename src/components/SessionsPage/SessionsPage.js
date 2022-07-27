import './style.css'
import Footer from '../Footer/Footer';
import filmImage from '../../assets/img/film_2067.png';

export default function SessionsPage(){
  return (
    <>
      <div className='sessions-page'>
        <h1>
          Selecione o horário
        </h1>
        <div className='sessions-browser'>
          <Session />
          <Session />
          <Session />
          <Session />
          <Session />
        </div>
      </div>
      <Footer>
        <div className='film-poster'>
          <img src={filmImage} alt="film poster"/>
        </div>
        <div className='film-info'>
          <div className='film-title'>Enola Holmes</div>
          {/* <div className='film-session-info'>Quinta-feira - 15:00</div> */}
        </div>
      </Footer>
    </>
    
  );
}


function Session(){
  return (
    <div className='session'>
      <h2>Quinta-feira - 24/06/2021</h2>
      <div className='times-container'>
        <div className='session-time'>15:00</div>
        <div className='session-time'>19:00</div>
      </div>
    </div>
  );
}