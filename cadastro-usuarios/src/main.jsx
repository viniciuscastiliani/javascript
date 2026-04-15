import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// APP - componente react
// creatRoot -> Criar ali o que vai ser mostrado na tela
// render - renderizar na tela

createRoot(document.getElementById('root')).render(
   <App />
)
