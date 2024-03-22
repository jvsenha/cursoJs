let pedido1 = {
    numPedido: "0001",
    dataPedido: "2024-03-22",
    itens: [
        {
            nome: "Camisa",
            quantidade: 2,
            precoUnitario: 25.99,
        },
        {
            nome: "Calça Jeans",
            quantidade: 1,
            precoUnitario: 39.99,
        }],
    cliente: {
        nome: "João Silva",
        endereco: "Rua das Flores, 123",
        cidade: "São Paulo"
    },
    status: "Em processamento"
};

let pedido2 = {
    numPedido: "0002",
    dataPedido: "2024-03-21",
    itens: [
        {
            nome: "Tênis",
            quantidade: 1,
            precoUnitario: 59.99,
        },
        {
            nome: "Meias",
            quantidade: 3,
            precoUnitario: 5.99,
        }],
    cliente: {
        nome: "Maria Souza",
        endereco: "Av. Principal, 456",
        cidade: "Rio de Janeiro"
    },
    status: "Aguardando pagamento"
};

let pedido3 = {
    numPedido: "0003",
    dataPedido: "2024-03-20",
    itens: [
        {
            nome: "Celular",
            quantidade: 1,
            precoUnitario: 699.99,
        },
        {
            nome: "Fone de Ouvido",
            quantidade: 1,
            precoUnitario: 29.99,
        }],
    cliente: {
        nome: "Carlos Oliveira",
        endereco: "Travessa das Palmeiras, 789",
        cidade: "Belo Horizonte"
    },
    status: "Enviado"
};

let listaPedidos=[pedido1,pedido2,pedido3]
