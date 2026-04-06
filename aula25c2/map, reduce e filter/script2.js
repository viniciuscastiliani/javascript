const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TV LG %%", preco: 3999.99, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1, },
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console Playstation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 1, },
    { id: 10, nome: "Caixa de Som Portátil", preco: 1000.00, temDesconto: false, quantidade: 3 },
];

//Adicionar + 10 em cada produto
//Filtrar só os em promoção
//Saber qual é o faturamento se vendermos todos em promoção

const faturamentoTotal = produtos
    .map(produto => {
        return { ...produto, quantidade: produto.quantidade + 10 }
    })
    .filter(produto => produto.temDesconto)
    .reduce(
        (acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 
        0
    )

console.log(faturamentoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))