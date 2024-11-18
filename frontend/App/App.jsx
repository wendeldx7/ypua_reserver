import react from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import CheckInPage from "../Pages/CheckinPage";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Reservas" element={<ReserverPage />} />
        <Route path="/Checkin" element={<CheckInPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
