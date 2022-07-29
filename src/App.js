import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import FilmPage from './components/FilmPage/FilmPage';
import SessionPage from './components/SessionPage/SessionPage';
import SuccessPage from './components/SuccessPage/SuccessPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sessoes/:idMovie" element={<FilmPage />}/>
        <Route path="/assentos/:idSessao" element={<SessionPage />}/>
        <Route path="/sucesso" element={<SuccessPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

