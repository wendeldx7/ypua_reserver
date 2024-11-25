import styled from "styled-components";
import ImgLogin from "../Image/CarrosselHome/background3.png";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
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
  width: 80%;
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
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-bottom: 2px solid black;
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
  background-color: #800000;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: 30px;
  margin-top: 50px;
  width:200px;

  &:hover {
    background-color: #cc3333;
  }
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
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  color: black;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

export const TextoLogin = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  text-shadow:
    1px 1px 0px black,
    -1px -1px 0px black,
    1px -1px 0px black,
    -1px 1px 0px black;
`;
