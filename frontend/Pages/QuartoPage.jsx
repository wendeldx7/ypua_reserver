import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import imagensQuartos from "../utils/imagensQuartos"; 

// Estilos com Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const RoomInfoContainer = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const RoomImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
`;

const CheckInPage = () => {
  const { quartoId } = useParams();
  const navigate = useNavigate();

  const [quarto, setQuarto] = useState(null);
  const [formData, setFormData] = useState({
    checkInData: "",
    checkOutData: "",
    adultos: 1,
    criancas: 0,
    bebes: 0,
    nome: "",
    precoTotal: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchQuarto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/quartos/${quartoId}`
        );
        setQuarto(response.data);
      } catch (error) {
        setError("Erro ao carregar as informações do quarto.");
      }
    };

    fetchQuarto();
  }, [quartoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculatePrice = () => {
    const { checkInData, checkOutData } = formData;
    if (checkInData && checkOutData) {
      const dataEntrada = new Date(checkInData);
      const dataSaida = new Date(checkOutData);
      const milisegundos = dataSaida.getTime() - dataEntrada.getTime();
      const dias = milisegundos / (1000 * 60 * 60 * 24);
      if (dias > 0) {
        const precoPorNoite = quarto?.precoPorNoite || 0;
        const precoTotal = precoPorNoite * dias;
        setFormData((prevData) => ({
          ...prevData,
          precoTotal: precoTotal.toFixed(2),
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const {
      nome,
      checkInData,
      checkOutData,
      adultos,
      criancas,
      bebes,
      precoTotal,
    } = formData;

    try {
      await axios.post(`http://localhost:3333/check/${quartoId}`, {
        checkInData,
        checkOutData,
        adultos,
        criancas,
        bebes,
        precoTotal,
        nome,
        quartoId,
      });
      setLoading(false);
      setShowModal(true);
      setTimeout(() => {
        navigate("/Checkin");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setError(
        error.response ? error.response.data.message : "Erro ao realizar check-in"
      );
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [formData.checkInData, formData.checkOutData]);

  return (
    <PageContainer>
      <FormContainer>
        <h2>Realizar Check-in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Data de Entrada:</label>
            <Input
              type="date"
              name="checkInData"
              value={formData.checkInData}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Data de Saída:</label>
            <Input
              type="date"
              name="checkOutData"
              value={formData.checkOutData}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Adultos:</label>
            <Input
              type="number"
              name="adultos"
              value={formData.adultos}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div>
            <label>Crianças:</label>
            <Input
              type="number"
              name="criancas"
              value={formData.criancas}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div>
            <label>Bebês:</label>
            <Input
              type="number"
              name="bebes"
              value={formData.bebes}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div>
            <label>Preço Total:</label>
            <Input
              type="text"
              name="precoTotal"
              value={`R$ ${formData.precoTotal}`}
              readOnly
            />
          </div>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Realizar Check-in"}
          </Button>
        </form>
      </FormContainer>

      <RoomInfoContainer>
        {quarto ? (
          <>
            <h3>{quarto.quarto}</h3>
            <p>
              <strong>Tipo:</strong> {quarto.tipo}
            </p>
            <p>
              <strong>Descrição:</strong> {quarto.descricao}
            </p>
            <p>
              <strong>Preço por Noite:</strong> R${quarto.precoPorNoite}
            </p>
            <p>
              <strong>Capacidade:</strong> {quarto.capacidade} pessoas
            </p>
            <ImageContainer>
              {quarto.caminhoImagem ? (
               <RoomImage
               src={imagensQuartos[`foto${quarto.caminhoImagem.slice(-1)}`] || imagensQuartos.foto1}
               alt="Imagem do quarto"
             />
             
              ) : (
                <p>Imagem não disponível</p>
              )}
            </ImageContainer>
          </>
        ) : (
          <p>Carregando informações do quarto...</p>
        )}
      </RoomInfoContainer>

      <Modal show={showModal}>
        <ModalContent>
          <h3>Check-in realizado com sucesso!</h3>
          <p>Você será redirecionado em breve...</p>
        </ModalContent>
      </Modal>
    </PageContainer>
  );
};

export default CheckInPage;
