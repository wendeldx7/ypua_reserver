import react from "react";
import "../App/App.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ReserverPage from "../Pages/ReserverPage";

const App = () => {
  return (

    <NavBar />,
    <ReserverPage/>
    

  );  
};

export default App;
