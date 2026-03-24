/*

    ForEach(item, index, array)

    item - Dados/Informações contidos na posição atual do Array
    index - Número da posição, sempre começando em 0
    array - Retorna o Array completo

*/

const users = [
    { name: 'Vinicius', age: 40, contact: '(14) 99999-9999'},
    { name: 'Fernanda', age: 39, contact: '(14) 99999-9998'},
    { name: 'Luiz', age: 35, contact: '(14) 99999-9997'},
    { name: 'Livia', age: 17, contact: '(14) 99999-9996'},
]

users.forEach(function(item, index){
    if(item.age < 18) {
        console.log(`O(a) cliente ${item.name}, posição ${index} é menor de idade!`)
    }
})