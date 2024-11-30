import React from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import PaginaPerfil from "../Pages/PerfilPage";
import Login from "../Pages/logintest";
import Dashboard from "../Pages/Dashboard";
import QuartoPage from "../Pages/QuartoPage";
import AcomodacaoPage from "../Pages/AcomodacaoPage";
import SuportePage from "../Pages/SuportePage";
import PrivateRoute from "../Components/PrivateRoute";
import HistoricoDeReservas from "../Pages/historicoReserva";
import Page404 from "../Pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Layout><Login/></Layout>} />
        <Route path="/*" element={<Layout><Page404 /></Layout>} />
        
        <Route path="/" element={<PrivateRoute><Layout><HomePage /></Layout></PrivateRoute>} />
        <Route path="/acomodacao" element={<PrivateRoute><Layout><AcomodacaoPage /></Layout></PrivateRoute>} />
        <Route path="/check/:quartoId" element={<PrivateRoute><QuartoPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
        <Route path="/historico" element={<PrivateRoute><Layout><HistoricoDeReservas /></Layout></PrivateRoute>} />
        <Route path="/Reservas" element={<PrivateRoute><Layout><ReserverPage /></Layout></PrivateRoute>} />
        <Route path="/Perfil" element={<PrivateRoute><PaginaPerfil /></PrivateRoute>} />
        <Route path="/Suporte" element={<PrivateRoute><Layout><SuportePage /></Layout></PrivateRoute>} />
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
