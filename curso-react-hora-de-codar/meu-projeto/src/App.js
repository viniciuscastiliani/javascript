import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Vinicius" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Vinicius"
        idade="40"
        profissao="Designer/Dev"
        foto="https://placehold.co/150"
      />
    </div>
  );
}

export default App;
