import react from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ReserverPage from "../Pages/ReserverPage";
import HomePage from "../Pages/HomePage";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Reservas" element={<ReserverPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
