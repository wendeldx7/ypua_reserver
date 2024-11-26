
## **1. Criar Check-In**

**Método:** `POST`  
**URL:** `/check/:quartoId`  
**Descrição:** Cria um check-in, verificando disponibilidade do quarto, conflito de datas, e calculando o preço total com base nas noites reservadas.

**Entrada (JSON Raw):**
```json
{
  "checkInData": "2024-12-01",
  "checkOutData": "2024-12-05",
  "adultos": 2,
  "criancas": 1,
  "bebes": 0,
  "nome": "João da Silva"
}
```

**Resposta de Sucesso (201 - Created):**
```json
{
  "checkId": 1,
  "quartoId": 10,
  "checkInData": "2024-12-01",
  "checkOutData": "2024-12-05",
  "adultos": 2,
  "criancas": 1,
  "bebes": 0,
  "precoTotal": 800,
  "nome": "João da Silva",
  "Quarto": {
    "quarto": "Suite Luxo"
  }
}
```

---

## **2. Obter Todos os Check-Ins**

**Método:** `GET`  
**URL:** `/check`  
**Descrição:** Lista todos os check-ins realizados, com detalhes sobre o quarto associado.

**Resposta de Sucesso (200 - OK):**
```json
[
  {
    "checkId": 1,
    "quartoId": 10,
    "checkInData": "2024-12-01",
    "checkOutData": "2024-12-05",
    "adultos": 2,
    "criancas": 1,
    "bebes": 0,
    "precoTotal": 800,
    "nome": "João da Silva",
    "Quarto": {
      "quarto": "Suite Luxo"
    }
  },
  {
    "checkId": 2,
    "quartoId": 5,
    "checkInData": "2024-11-15",
    "checkOutData": "2024-11-20",
    "adultos": 1,
    "criancas": 0,
    "bebes": 0,
    "precoTotal": 500,
    "nome": "Maria Oliveira",
    "Quarto": {
      "quarto": "Quarto Standard"
    }
  }
]
```

---

## **3. Obter Check-In Por ID**

**Método:** `GET`  
**URL:** `/check/:id`  
**Descrição:** Retorna os detalhes de um check-in específico.

**Resposta de Sucesso (200 - OK):**
```json
{
  "checkId": 1,
  "quartoId": 10,
  "checkInData": "2024-12-01",
  "checkOutData": "2024-12-05",
  "adultos": 2,
  "criancas": 1,
  "bebes": 0,
  "precoTotal": 800,
  "nome": "João da Silva",
  "Quarto": {
    "quarto": "Suite Luxo"
  }
}
```

**Possíveis Erros:**
- `404`: "Check-in não encontrado."
- `500`: "Erro interno do servidor."

---

## **4. Atualizar Check-In**

**Método:** `PUT`  
**URL:** `/check/:id`  
**Descrição:** Atualiza os dados de um check-in específico. Apenas os campos enviados são atualizados.

**Entrada (JSON Raw):**
```json
{
  "checkOutData": "2024-12-06"
}
```

**Resposta de Sucesso (200 - OK):**
```json
{
  "checkId": 1,
  "quartoId": 10,
  "checkInData": "2024-12-01",
  "checkOutData": "2024-12-06",
  "adultos": 2,
  "criancas": 1,
  "bebes": 0,
  "precoTotal": 1000,
  "nome": "João da Silva"
}
```

**Possíveis Erros:**
- `400`: "Data de saída deve ser depois/maior que a data de entrada."
- `404`: "Check-in não encontrado."
- `500`: "Erro interno do servidor."

---

## **5. Deletar Check-In**

**Método:** `DELETE`  
**URL:** `/check/:id`  
**Descrição:** Remove um check-in específico.

**Resposta de Sucesso (204 - No Content):**
- Sem corpo na resposta.

**Possíveis Erros:**
- `404`: "Check-in não encontrado."
- `500`: "Erro interno do servidor."

---

## **6. Listar Quartos com Paginação**

**Método:** `GET`  
**URL:** `/quartos?page={number}&limit={number}`  
**Descrição:** Retorna uma lista de quartos com paginação.

**Resposta de Sucesso (200 - OK):**
```json
{
  "totalquartos": 50,
  "totalPaginas": 5,
  "paginaAtual": 1,
  "itemsPorPagina": 10,
  "proximaPagina": "http://localhost:3333/quartos?page=2",
  "quartos": [
    {
      "quartoId": 1,
      "quarto": "Suite Luxo",
      "tipo": "Luxo",
      "descricao": "Quarto com vista para o mar.",
      "capacidade": 2,
      "precoPorNoite": 200,
      "situacao": "disponível",
      "facilidades": "WiFi, TV, Banheira",
      "caminhoImagem": "/imagens/suite-luxo.jpg"
    },
    ...
  ]
}
```

---

## **7. Criar Quarto**

**Método:** `POST`  
**URL:** `/quartos`  
**Descrição:** Cria um novo quarto no sistema.

**Entrada (JSON Raw):**
```json
{
  "quarto": "Suite Luxo da110das12df",
  "tipo": "Luxo",
  "descricao": "Uma suíte de luxo com vista para o mar, equipada com banheira e cama king-size.",
  "capacidade": 2,
  "precoPorNoite": 600.00,
  "situacao": "disponível",
  "facilidades": {
    "wifi": true,
    "arCondicionado": true,
    "tv": true,
    "frigobar": true,
    "servicoDeQuarto": true
  },
  "caminhoImagem": "foto01"
}
```

**Resposta de Sucesso (201 - Created):**
```json
{
  "message": "Quarto criado com sucesso"
}
```

---

## **8. Obter Quarto Por ID**

**Método:** `GET`  
**URL:** `/quartos/:quartoId`  
**Descrição:** Busca detalhes de um quarto específico.

**Resposta de Sucesso (200 - OK):**
```json
{
  "message": "Quarto criado com sucesso",
  "quarto": {
    "quarto": "Suite Luxo da110das12df",
    "tipo": "Luxo",
    "descricao": "Uma suíte de luxo com vista para o mar, equipada com banheira e cama king-size.",
    "capacidade": 2,
    "precoPorNoite": 600.00,
    "situacao": "disponível",
    "facilidades": {
      "wifi": true,
      "arCondicionado": true,
      "tv": true,
      "frigobar": true,
      "servicoDeQuarto": true
    },
    "caminhoImagem": "foto01"
  }
}

```

**Possíveis Erros:**
- `404`: "Quarto não encontrado."
- `500`: "Erro interno do servidor."

---

## **9. Registrar Usuário**

**Método:** `POST`  
**URL:** `/users/register`  
**Descrição:** Registra um novo usuário no sistema com senha criptografada.

**Entrada (JSON Raw):**
```json
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta de Sucesso (201 - Created):**
```json
{
  "message": "Usuário cadastrado com sucesso"
}
```

**Possíveis Erros:**
- `400`: "E-mail já cadastrado."
- `500`: "Erro ao cadastrar usuário."

---

## **10. Login de Usuário**

**Método:** `POST`  
**URL:** `/users/login`  
**Descrição:** Autentica um usuário e gera um token JWT.

**Entrada (JSON Raw):**
```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta de Sucesso (200 - OK):**
```json
{
  "token": "jwt.token.aqui",
  "message": "Login realizado com sucesso"
}
```

**Possíveis Erros:**
- `404`: "E-mail não encontrado."
- `401`: "Senha incorreta."
- `500`: "Erro ao fazer login."
