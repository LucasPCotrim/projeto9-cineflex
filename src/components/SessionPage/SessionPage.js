import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import axios from 'axios';
import './style.css'
import Footer from '../Footer/Footer';


export default function SessionPage(){

  const {idSession} = useParams();

  const [session, setSession] = useState({})
  const [selectedSeats, setSelectedSeats] = useState([])
  const [invalidSeat, setinvalidSeat] = useState(undefined)

  useEffect(() => {
    const sessionsAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`
		const request = axios.get(sessionsAPI);
		request.then(resposta => {
			setSession(resposta.data);
		});
	}, [idSession]);


  const handleSeatClick = (idSeat, seatStatus)=>{
    if (invalidSeat !== undefined) return;
    if (seatStatus === 'indisponivel'){
      setinvalidSeat(idSeat);
      setTimeout(() => {
        setinvalidSeat(undefined);
      }, 1000);
      console.log('Assento indisponível!');
      return;
    }
    else if (seatStatus === 'selecionado'){
      setSelectedSeats(selectedSeats.filter(s => s !== idSeat));
      return;
    }
    else if (seatStatus === 'disponivel'){
      setSelectedSeats([...selectedSeats,idSeat]);
      return;
    }
  }


  return (
    <div className='session-page'>
      <h1>
        Selecione o(s) assento(s)
      </h1>
      <InvalidSeatPopup invalidSeat={invalidSeat} />
      <div className='seats-container'>
        {session.seats
          ? 
            session.seats.map((seat, idSeat)=>{
              let seatStatus;
              if (!seat.isAvailable){
                seatStatus = 'indisponivel'
              } else{
                seatStatus = selectedSeats.includes(idSeat+1) ? 'selecionado' : 'disponivel'
              }
              return (
                <div
                  className={`seat ${seatStatus}`}
                  key={idSeat+1}
                  onClick={()=>handleSeatClick(idSeat+1, seatStatus)}
                >
                  {idSeat+1}
                </div>
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

function InvalidSeatPopup({invalidSeat}){
  return (
    (invalidSeat!==undefined)
      ? <div className='invalid-seat-popup'>{`Assento ${invalidSeat} Indisponível`}</div>
      : <></>
  );
}