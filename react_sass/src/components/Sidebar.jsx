import SocialNetworks from './SocialNetworks'

import Avatar from '../img/vinicius-edit.png'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt='ViniciusCastiliani'></img>
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Download Currículo</a>
  </aside>
}

export default Sidebar