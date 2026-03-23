/*

Estrutura de Repetição - LOOP

    - FOR IN
    - Usado para iterar Objetos

*/

const user = { 
    name: 'Vinicius', 
    age: 40, 
    street: 'Rua João Rangel'
}

//user.name -> Vinicius
//user['name'] -> Vinicius

for(let key in user) {
    console.log(`${key}: ${user[key]}`)
}