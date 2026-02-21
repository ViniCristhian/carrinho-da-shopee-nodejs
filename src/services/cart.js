// Carrinho de Compras

// Ações do carrinho de compras

// Adicionar um item do carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Excluir item do carrinho
async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName);
    if (index !== -1)
        userCart.splice(index, 1);
}

// Exclui um item de acordo com o seu index
async function deleteItemByIndex(userCart, index) {
    if (index >= 0 && index <= userCart.length) {
        --index;
        userCart.splice(index, 1);
    } else {
        console.log("Index informado incorreto!");
    }
}

// Remover um item do carrinho - diminuir um item
async function removeItem(userCart, item) {
    const foundIndex = userCart.findIndex((p) => p.name === item.name);

    if (foundIndex === -1) {
        console.log("Item não emcontrado!");
        return;
    }

    if (userCart[foundIndex].quantity === 1)
        userCart.splice(foundIndex, 1);
    else {
        --userCart[foundIndex].quantity;
    }
}

// Calcular total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log(`\nThe total in yout cart is: ${result}`);
}

// Mostrar as compras no carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} | ${item.quantity}x R$ ${item.price}  | Subtotal: ${item.price * item.quantity}`);
    });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart, deleteItemByIndex };