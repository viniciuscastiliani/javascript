import SocialNetworks from './SocialNetworks'

import Avatar from '../img/vinicius-edit.png'

import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt='ViniciusCastiliani'></img>
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <p>informações de contato</p>
    <a href="" className="btn">Download Currículo</a>
  </aside>
}

export default Sidebar