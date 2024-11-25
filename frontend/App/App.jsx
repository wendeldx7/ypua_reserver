import react from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import CheckInPage from "../Pages/CheckinPage";
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

        <Route path="/dashboard"element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/historico" element={<Layout><CheckInfo /></Layout>} />
        <Route path="/Reservas" element={<Layout><ReserverPage /></Layout>} />
        <Route path="/Checkin" element={<Layout><CheckInPage /></Layout>} />
        <Route path="/Perfil" element={<PaginaPerfil/>} />
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
