import React from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";
import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import CheckInPage from "../Pages/CheckinPage";
import AcomodacaoPage from "../Pages/AcomodacaoPage"; // Importando AcomodacaoPage
import PaginaPerfil from "../Pages/PerfilPage";
import Login from "../Pages/logintest";
import Dashboard from "../Pages/Dashboard";

import PrivateRoute from "../Components/PrivateRoute";
import CheckInfo from "../Pages/historicoReserva";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/historico" element={<Layout><CheckInfo /></Layout>} />
        <Route path="/Reservas" element={<Layout><ReserverPage /></Layout>} />
        <Route path="/Checkin" element={<Layout><CheckInPage /></Layout>} />
        <Route path="/acomodacao" element={<Layout><AcomodacaoPage /></Layout>} />  
        <Route path="/Perfil" element={<Layout><PaginaPerfil /></Layout>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default App;
