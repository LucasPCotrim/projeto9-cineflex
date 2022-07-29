import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import axios from 'axios';
import './style.css'
import Footer from '../Footer/Footer';


export default function SessionPage(){

  const {idSession} = useParams();
  console.log('idSession = ',idSession);
  const [session, setSession] = useState({})

  useEffect(() => {
    const sessionsAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`
		const request = axios.get(sessionsAPI);
		request.then(resposta => {
      console.log(resposta.data)
			setSession(resposta.data);
		});
	}, [idSession]);


  return (
    <div className='session-page'>
      <h1>
        Selecione o(s) assento(s)
      </h1>
      <div className='seats-container'>
        {session.seats
          ? 
            session.seats.map((seat, index)=>{
              return (
                seat.isAvailable
                  ?
                    <div className='seat disponivel'>{index}</div>
                  : 
                    <div className='seat indisponivel'>{index}</div>
              );
            })
          :
            <></>
        }
      </div>
      <Legend />
      <form className='inputs-container'>
        <h2>Nome do Comprador:</h2>
        <input type="text" placeholder='Digite seu nome...'/>
        <h2>CPF do Comprador:</h2>
        <input type="text" placeholder='Digite seu CPF...'/>
        <button>Reservar assento(s)</button>
      </form>
      <Footer>
        {session.movie
          ?
            <>
              <div className='film-poster'>
                <img src={session.movie.posterURL} alt={session.movie.title}/>
              </div>
              <div className='film-info'>
                <div className='film-title'>{session.movie.title}</div>
                <div className='film-session-info'>{`${session.day.weekday} - ${session.name}`}</div>
              </div>
            </>
          :
            <></>
        }
      </Footer>
    </div>
  );
}



function Legend(){
  return (
    <div className='legend'>
      <div className='option'>
        <div className='icon selecionado'></div>
        Selecionado
      </div>
      <div className='option'>
        <div className='icon disponivel'></div>
        Disponível
      </div>
      <div className='option'>
        <div className='icon indisponivel'></div>
        Indisponível
      </div>
    </div>
  );
}