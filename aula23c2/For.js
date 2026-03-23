/*

Estrutura de Repetição - LOOP

    - FOR
        1 - INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela
        2 - CONDIÇÃO - Enquanto for true, o laço continuará iterando. Ele irá verificar antes de cada iteração
        2 - EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta

        for ([inicialização]; [condição]; [expressão final]) {
        Seu código aqui
        }

*/

const users = ['Maria', 'Aline', 'João'] // lenght (tamanho do Array) = 3



for(let i = 0; i < users.length; i++) {
    console.log(users[i])
}