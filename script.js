// Array para armazenar os produtos selecionados
let carrinho = [];
let totalCompra = 0.0;

// Função para adicionar um produto ao carrinho
function adicionarProduto(produto) {
    switch (produto) {
        case 'banana':
            carrinho.push({ nome: 'Banana', preco: 2.50 });
            break;
        case 'maca':
            carrinho.push({ nome: 'Maçã', preco: 3.00 });
            break;
        case 'laranja':
            carrinho.push({ nome: 'Laranja', preco: 2.75 });
            break;
        case 'abacate':
            carrinho.push({ nome: 'Abacate', preco: 5.50 });
            break;
        case 'morango':
            carrinho.push({ nome: 'Morango', preco: 4.00 });
            break;
        default:
            return;
    }

    atualizarCarrinho();
}

// Função para atualizar a visualização do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    totalCompra = 0.0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome}: R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);

        totalCompra += item.preco;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `R$ ${totalCompra.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Por favor, adicione produtos.');
        return;
    }

    // Aqui você pode implementar a lógica para finalizar a compra, por exemplo, enviar para um servidor, etc.

    alert(`Compra finalizada! Total: R$ ${totalCompra.toFixed(2)}`);

    // Limpar o carrinho e a visualização
    carrinho = [];
    atualizarCarrinho();
}
