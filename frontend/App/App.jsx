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

        
        <Route path="/Reservas" element={<ReserverPage />} />
        <Route path="/Checkin" element={<CheckInPage />} />
        <Route path="/Perfil" element={<PaginaPerfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
