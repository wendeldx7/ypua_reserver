import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Biblioteca para realizar requisições HTTP
import { useNavigate } from 'react-router-dom'; // Para redirecionar o usuário após o logout

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    // Função para buscar as informações do usuário
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Recupera o token do localStorage

      if (!token) {
        setError('Usuário não autenticado.');
        setLoading(false);
        return;
      }

      try {
        // Envia o token como parte do cabeçalho da requisição
        const response = await axios.get('http://localhost:3333/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Token enviado no cabeçalho
          },
        });

        setUserData(response.data); // Armazena os dados do usuário no estado
        setLoading(false); // Finaliza o carregamento
      } catch (err) {
        setError('Erro ao carregar as informações do usuário.');
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUserData(); // Chama a função de busca
  }, []);

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona o usuário para a página de login
  };

  // Exibe um carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Exibe uma mensagem de erro, caso algo dê errado
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe as informações do usuário quando a requisição for bem-sucedida
  return (
    <div>
      <h1>Bem-vindo, {userData.nome}</h1>
      <p>Email: {userData.email}</p>

      {/* Botão de logout */}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
