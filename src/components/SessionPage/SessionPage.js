import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './style.css'
import Footer from '../Footer/Footer';

const bookSeatsAPI = 'https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many'


export default function SessionPage({setPurchaseInfo}){

  const {idSession} = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [invalidSeat, setinvalidSeat] = useState(undefined);

  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');

  useEffect(() => {
    const sessionsAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`
		const request = axios.get(sessionsAPI);
		request.then(resposta => {
			setSession(resposta.data);
		});
	}, [idSession]);


  const handleSeatClick = (idSeat, seatStatus, index)=>{
    // Prevent user from selecting a seat when popup message is on display
    if (invalidSeat !== undefined) return;
    // User attempted to select unavailable seat
    if (seatStatus === 'indisponivel'){
      setinvalidSeat(index+1);
      setTimeout(() => {
        setinvalidSeat(undefined);
      }, 750);
      console.log('Assento indisponível!');
      return;
    }
    // De-select seat
    else if (seatStatus === 'selecionado'){
      setSelectedSeats(selectedSeats.filter(s => s !== idSeat));
      return;
    }
    // Select seat
    else if (seatStatus === 'disponivel'){
      setSelectedSeats([...selectedSeats,idSeat]);
      return;
    }
  }


  const handleForm = (event)=>{
    event.preventDefault();
    const request = axios.post(bookSeatsAPI,
      {
        ids: selectedSeats,
        name: userName,
        cpf: userCPF
      }
    )
    request.then(() => {
      setPurchaseInfo(
      {
        movieTitle: session.movie.title,
        sessionWeekDay: session.day.weekday,
        sessionDate: session.day.date,
        sessionTime: session.name,
        seats: selectedSeats,
        userName: userName,
        userCPF: userCPF
      })
      navigate('/sucesso')
		})
  }


  return (
    <div className='session-page'>
      <h1>
        Selecione o(s) assento(s)
      </h1>
      <InvalidSeatPopup invalidSeat={invalidSeat} />
      <SeatsContainer
        seats={session.seats}
        selectedSeats={selectedSeats}
        handleSeatClick={handleSeatClick}
      />
      <Legend />
      <form className='inputs-container' onSubmit={handleForm}>
        <h2>Nome do Comprador:</h2>
        <input type="text" placeholder='Digite seu nome...' value={userName} onChange={e => setUserName(e.target.value)} required/>
        <h2>CPF do Comprador:</h2>
        <input type="text" placeholder='Digite seu CPF...' value={userCPF} onChange={e => setUserCPF(e.target.value)} required/>
        <button type="submit">Reservar assento(s)</button>
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



// Auxiliary Components
//------------------------
function SeatsContainer({seats, selectedSeats, handleSeatClick}){
  return (
    <div className='seats-container'>
      {seats
        ? 
          seats.map((seat, index)=>{
            let seatStatus;
            if (!seat.isAvailable){
              seatStatus = 'indisponivel'
            } else{
              seatStatus = selectedSeats.includes(seat.id) ? 'selecionado' : 'disponivel'
            }
            return (
              <div
                className={`seat ${seatStatus}`}
                key={seat.id}
                onClick={()=>handleSeatClick(seat.id, seatStatus, index)}
              >
                {index+1}
              </div>
            );
          })
        :
          <></>
      }
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