import Avatar from '../img/vinicius-edit.png'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt='ViniciusCastiliani'></img>
    <p className="title">Desenvolvedor</p>
    <p>redes sociais</p>
    <p>informações de contato</p>
    <a href="" className="btn">Download</a>
  </aside>
}

export default Sidebar