import './App.css'

// todo componente do react é assim: 1) é uma função, 2) ele tem um return: fora do return é cod javascript, dentro do returno é cod HTML
function App() {
  function handleSubmit(event){
    event.preventDefault()
    
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
        />

        <input 
          placeholder='Email' 
          type='email'
        />

        <input 
          placeholder='Idade'
          type='number' 
        />

        <button type='submit'>Cadastrar</button>

      </form>

      <div className='user-list'>
        <p>Usuários cadastrados</p>
      </div>

    </div>
  )
}

export default App
