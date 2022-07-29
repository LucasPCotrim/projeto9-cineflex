import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import axios from 'axios';
import './style.css'
import Footer from '../Footer/Footer';




export default function FilmPage(){

  const {idMovie} = useParams();
  const [sessions, setSessions] = useState({})

  useEffect(() => {
    const sessionsAPI = `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`
		const request = axios.get(sessionsAPI);
		request.then(resposta => {
			setSessions(resposta.data);
		});
	}, [idMovie]);

  
  return (
    <div className='film-page'>
      <h1>
        Selecione o horário
      </h1>
      <div className='sessions-browser'>
        {sessions.days
         ? 
          sessions.days.map((session)=>{
            return (
              <Session
                weekday={session.weekday}
                date={session.date}
                showtimes={session.showtimes}
                key={session.id}
              />
            );
          }) 
         :
          <></>
        }
      </div>
      <Footer>
        {sessions.posterURL
        ?
        <>
          <div className='film-poster'>
            <img src={sessions.posterURL} alt={sessions.title}/>
          </div>
          <div className='film-info'>
            <div className='film-title'>{sessions.title}</div>
          </div>
        </>
        :
          <></>
        }
      </Footer>
    </div>
  );
}


function Session({weekday, date, showtimes}){
  return (
    <div className='session'>
      <h2>{`${weekday} - ${date}`}</h2>
      <div className='times-container'>
        {showtimes.map((time)=>{
          return (
            <Link to={`/assentos/${time.id}`} key={time.id}>
              <div className='session-time'>{time.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}