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
import QuartoPage from "../Pages/QuartoPage";


import PrivateRoute from "../Components/PrivateRoute";
import HistoricoDeReservas from "../Pages/historicoReserva";
import Page404 from "../Pages/Page404";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/check/:quartoId" element={<QuartoPage />} /> 
        <Route path="/dashboard"element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/historico" element={<Layout><HistoricoDeReservas /></Layout>} />
        <Route path="/Reservas" element={<Layout><ReserverPage /></Layout>} />
        <Route path="/Checkin" element={<Layout><CheckInPage /></Layout>} />
        <Route path="/Perfil" element={<PaginaPerfil/>} />
        <Route path="/404" element={<Page404/>} />
      </Routes>
      {/* <Footer /> */}
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
