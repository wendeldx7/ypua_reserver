import React from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";

import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import CheckInPage from "../Pages/CheckinPage";
import AcomodacaoPage from "../Pages/AcomodacaoPage"; // Se você quer manter AcomodacaoPage
import PaginaPerfil from "../Pages/PerfilPage"; // Se você quer manter PaginaPerfil
import Login from "../Pages/logintest";
import Dashboard from "../Pages/Dashboard";

import PrivateRoute from "../Components/PrivateRoute";
import CheckInfo from "../Pages/historicoReserva";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/historico" element={<CheckInfo />} />
        <Route path="/Reservas" element={<ReserverPage />} />
        <Route path="/Checkin" element={<CheckInPage />} />
        <Route path="/acomodacao" element={<AcomodacaoPage />} /> {/* Ou mantenha a PaginaPerfil */}
        <Route path="/Perfil" element={<PaginaPerfil />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
