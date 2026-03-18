/*
Functions / Funcões
    - Trecho de código que é executado
        SOMENTE quando solicitado ( Parente gente boa )
    - Teecho de código que ser Reutilizado várias vezes

[] O que é uma função e como usar
[] Função VOID (vazia)
[] Função com parametros
[] Função return
[] Arrow Function
 
*/


/* void */

/*const number = 200
 console.log (number)

 function digaMeuNome() {
    const name = "Vinicius"
    console.log(name)
 }

 digaMeuNome()*/

/*parametros*/

/*function digaQualquerNome(nome) {
    console.log(nome)
 }

digaQualquerNome("Vinicius")
digaQualquerNome("Dudu")
digaQualquerNome("Fer")
digaQualquerNome("Cid")*/


/*function soma(numero1, numero2) {
    const res = numero1 + numero2
    console.log(res)
 }

soma(6,2)
soma(524552, 52544855)*/

/*return*/

/*function soma(numero1, numero2) {
    const res = numero1 + numero2
    return res
 }

const resSoma = soma(30, 40)
console.log(resSoma)*/


/* function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return "Azul"
    } else {
        return "Vermelho"
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(`Maria está no ${maria}`)
console.log(`João está no ${joao}`) */

/* Arrow Function (função flecha) */


function abacte(){} // Forma Clássica
const digaMeuNome = () => { // Forma moderna de funções
    console.log("Vinicius")
}

digaMeuNome()
