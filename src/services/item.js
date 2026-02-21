// Casos de usos dos Itens

// Cria item com subtotal certo
export default async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}