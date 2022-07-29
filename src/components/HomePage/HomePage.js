import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css'

const moviesAPI = 'https://mock-api.driven.com.br/api/v7/cineflex/movies'


export default function HomePage(){

  const [movies, setMovies] = useState([])

  useEffect(() => {
		const request = axios.get(moviesAPI);
		request.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);


  return (
    <div className='home-page'>
      <h1>
        Selecione o filme
      </h1>
      <FilmBrowser movies={movies}/>
    </div>
  );
}


function FilmBrowser({movies}){
  return (
      <div className='film-browser'>
        {movies.map((movie)=>{
          return (
            <Link to={`/sessoes/${movie.id}`} key={movie.id}>
              <div className='film-poster'>
                <img src={movie.posterURL} alt={movie.title}/>
              </div>
            </Link>
          );
        })}
      </div>
  );
}
