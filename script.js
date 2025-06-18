// Variáveis globais para armazenar os itens do carrinho
let cart = [];

// Função para atualizar o carrinho e o total
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const proceedButton = document.getElementById('proceed-to-payment');

    // Limpa o conteúdo do carrinho
    cartItems.innerHTML = '';
    
    // Calcula o total
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Se o carrinho tiver itens, habilita o botão de finalizar
    if (cart.length > 0) {
        proceedButton.classList.remove('disabled');
        proceedButton.disabled = false;
    } else {
        proceedButton.classList.add('disabled');
        proceedButton.disabled = true;
    }
}

// Função para adicionar item ao carrinho
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Função para ir para a tela de pagamento
function proceedToPayment() {
    document.getElementById('payment').style.display = 'block';
}

// Adicionando os eventos para os botões de "Adicionar ao Carrinho"
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});

// Evento de clique no botão de finalizar compra
document.getElementById('proceed-to-payment').addEventListener('click', proceedToPayment);

// Função para tratar o envio do formulário de pagamento
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pagamento realizado com sucesso! :)');
});
