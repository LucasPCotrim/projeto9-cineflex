import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import FilmPage from './components/FilmPage/FilmPage';
import SessionPage from './components/SessionPage/SessionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/filme" element={<FilmPage />}/>
        <Route path="/sessao" element={<SessionPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

