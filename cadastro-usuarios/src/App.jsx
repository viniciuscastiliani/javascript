import './App.css'

// todo componente do react é assim: 1) é uma função, 2) ele tem um return: fora do return é cod javascript, dentro do returno é cod HTML
function App() {
  let name = "Vinicius"

  return (
    <div>
      <p>{ name }</p>
    </div>
  )
}

export default App
