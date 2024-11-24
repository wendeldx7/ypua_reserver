import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff; /* Cor de fundo (vermelho) */
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
`;

export const LoginForm = styled.div`
  background-color: #fff;
  height: 30vh;
  color: #800000;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
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
  border-radius: 5px;
  border: 1px solid #ccc;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc3333;
  }
`;
export const WineContainer = styled.div`
   background-color: #fff;
   height: 30vh;
  color: #800000;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;
