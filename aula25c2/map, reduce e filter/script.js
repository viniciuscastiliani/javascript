/*

    DOMINANDO ARRAYS no JS

    Map(mapear item por item no Array)
        - Criar um novo array com a mesma quantidade de itens do array original.
        - O novo array você pode alterar o que quiser em relação ao array original.
        - Você tem acesso a 3 dados:
            - Item por Item do array
            - Posição atual do array
            - Array completo
            
*/

/* const num = [1,2,3,4,5]

const dobro = num.map( (numero, index, arrayCompleto) => {
    return numero * 4
})

console.log(dobro) */


const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TV LG %%", preco: 3999.99, temDesconto: true, quantidade: 5},
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1,},
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console Playstation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 1,},
    { id: 10, nome: "Caixa de Som Portátil", preco: 1000.00, temDesconto: false, quantidade: 3 },
];

const novosProdutos = produtos.map( produto => {

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    // Ternário = If / Else     ? = if / : else

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
})

console.log(novosProdutos)