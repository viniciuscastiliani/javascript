import './App.css'
import { useState } from 'react'
import UserCard from './components/UserCard'

/*
1 - Função (Código muito antigo, pode ser uma classe)
2 - Ele tem um return
3 - Fora do return / Código JavaScript
4 - Dentro do return / Código "HTML"

    useState (estado do react)
    Estado - Super Variável
    Não fica carregando a tela poor nada e nem a tela toda
*/

// todo componente do react é assim: 1) é uma função, 2) ele tem um return: fora do return é cod javascript, dentro do returno é cod HTML
function App() {

const [name, setName] = useState("Vinicius")
const [email, setEmail] = useState("viniciuscastiliani@gmail.com")
const [age, setAge] = useState(40)
const [users, setUsers] = useState([])
// O estado tem dois carinhas: Variável em si, que eu pego o valor dela
// (set) uma função para colocar o valor dentro da variável


  function handleSubmit(event){
    event.preventDefault()
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
    }

    console.log(users)

    setUsers ([...users, newUser]) //spread operator (manter todo mundo que já tinha e adicionar um novo usuário)

  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>

      {/* onSubmit = Ação - fazer alguma coisa quando acontecer alguma coisa */}

      {/* REACT - Reagir - > quando isso acontece, faça aquilo | On determina ação - onChange (mudar) - onClick (clicar) - onSubmit (enviar) */}

      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Nome' 
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input 
          placeholder='Email' 
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input 
          placeholder='Idade'
          type='number' 
          value={age}
          onChange={event => setAge(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>

      </form>

      <div className='user-list'> {/* Return - apenas 1 elemento*/}

        {users.map ((user) => (
          <UserCard key={user.id} user={user}/>
        ))}

      </div>

    </div>
  )
}

export default App
