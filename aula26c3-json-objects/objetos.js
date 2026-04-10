/*
    Objetos - Guia completo com todas as situações de uso

        1 - O que é um objeto?
            - Um objeto é uma coleção de propriedades (pares chave-valor)
            - É uma das estruturas de dados mais importantes do JavaScript
            - Objetos permitem agrupar dados relacionados e funcionalidades
*/

// Clientes


/*
let nomeCliente = "Vinicius"
let rua = "Rua João"
let numero = 0
let idade = 20

let cliente = {
    nome: "Vinicius",
    idade: 40,
    sexo: "Masculino",
    endereco: {
        rua: "Rua João",
        numero: 0,
        bairro: "JavaScript",
    }
}

// Elvis Operator ? interrogação
console.log(cliente.endereco.rua?.nome?.numero) 
*/

//JSON

/*

let cliente = {
    nome: "Vinicius",
    idade: 40,
    sexo: "Masculino",
    altura: "1.85",
    endereco: {
        rua: "dos Bebos",
        numero: 0,
        bairro: "JavaScript"
    }
}   


let { nome, idade, endereco, altura = "Não informado" } = cliente

console.log(altura)

*/

// SPREAD OPERATOR - ... tudo o que sobrou do objeto vai para a variável "resto" (a varável com o nome que for criado)

/*
let cliente = {
    nome: "Vinicius",
    idade: 40,
    sexo: "Masculino",
    altura: "1.85",
    endereco: {
        rua: "dos Bebos",
        numero: 0,
        bairro: "JavaScript"
    }
}   


let { nome, idade, ...resto} = cliente

console.log(resto)
*/

//OBJETOS

/*
let cliente = {
    nome: "Vinicius",
    idade: 40,
    sexo: "Masculino",
    altura: "1.85",
    endereco: {
        rua: "dos Bebos",
        numero: 0,
        bairro: "JavaScript"
    }
}   

Object.freeze(cliente) //congela o objeto em questão, não deixando trocá-lo

cliente.nome = "João"

const valores = Object.values(cliente)
const chaves = Object.keys(cliente)

console.log(valores)
*/


//JSON - JAVASCRIPT OBJECT NOTATION
// Back end (servidor) -> front end (site/sistema web)

// OBJETO - Vive no código, pode ter funções
const usuario = {
    nome: "Vinicius",
    idade: 40,
    ativo: true
}

const jasonParaOServidor = JSON.stringify(usuario)

console.log(jasonParaOServidor)
console.log(usuario)

//JSON - é apenas TEXTO (string), usado para transportar dados
const json = '{"nome":"Vinicius","idade":40,"ativo":true}'

const objetoJavaScript = JSON.parse(json)
console.log(objetoJavaScript)