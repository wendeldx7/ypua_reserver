import { Navigate } from "react-router-dom";
export const logoutUser = (navigate) => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  }