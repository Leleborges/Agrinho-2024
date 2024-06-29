// Variáveis globais para armazenar os produtos e o carrinho
let produtos = [
    { nome: 'Banana', preco: 2.50 },
    { nome: 'Maçã', preco: 3.00 },
    { nome: 'Laranja', preco: 2.75 },
    { nome: 'Abacate', preco: 5.50 },
    { nome: 'Morango', preco: 4.00 },
    { nome: 'Pêra', preco: 3.25 },
    { nome: 'Uva', preco: 4.50 },
    { nome: 'Cenoura', preco: 1.75 },
    { nome: 'Batata', preco: 2.00 },
    { nome: 'Couve', preco: 2.25 }
];

let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProduto(nome) {
    let produto = produtos.find(item => item.nome === nome);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar o conteúdo do carrinho na página
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalElement = document.getElementById('total');

    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco;
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    // Simulação de finalização da compra
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
        return;
    }

    // Aqui você pode adicionar lógicas adicionais, como enviar dados para um servidor, etc.

    // Limpar o carrinho
    carrinho = [];
    atualizarCarrinho();

    // Exibir mensagem de sucesso ou redirecionar para uma página de agradecimento, etc.
    alert('Compra finalizada com sucesso! Obrigado pela sua compra.');
}

// Event listener para o botão "Finalizar Compra"
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);

// Inicializa o carrinho na primeira carga da página
atualizarCarrinho();
