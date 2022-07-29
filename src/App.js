import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import FilmPage from './components/FilmPage/FilmPage';
import SessionPage from './components/SessionPage/SessionPage';
import SuccessPage from './components/SuccessPage/SuccessPage';

export default function App() {

  const [purchaseInfo, setPurchaseInfo] = useState({})

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/sessoes/:idMovie"
          element={<FilmPage />}
        />
        <Route
          path="/assentos/:idSession"
          element={
            <SessionPage
              purchaseInfo={purchaseInfo}
              setPurchaseInfo={setPurchaseInfo}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SuccessPage
              purchaseInfo={purchaseInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

