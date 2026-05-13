import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
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
