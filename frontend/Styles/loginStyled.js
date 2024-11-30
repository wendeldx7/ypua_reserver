import styled from "styled-components";
import ImgLogin from "../Image/CarrosselHome/background3.png";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
width: 100%;
  background-color: #EFF1F4;
  background-size: 400% 400%;
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;

  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const LoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 20px;
  height:500px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  color:#461615;

`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-bottom: 1px solid #461615;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  font-weight: 200;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const BtnEntrar = styled.button`
  background-color: #461615;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  
  width:200px;

  &:hover {
    background-color: #cc3333;
  }
`;

export const Form = styled.form`
  padding: 10px;  
  border: none;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
  cursor: pointer;
  width:100%;
  height: 80%;
`;

export const WineContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-image: url(${ImgLogin});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
`;

export const NomeLogin = styled.div`
  font-size: 30px;
  position: relative;
  z-index: 1;
  color: black;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color:#461615;
`;

export const CadastroLink = styled.div`
  margin-top: 8px;
  font-size: 14px;
  text-align: right;
  color: #461615;

  a {
    color: #461615;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;