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
    <a href="https://drive.google.com/file/d/1IHoO1hDqeuWoghzvjHnMw-_ombHwdD33/view?usp=sharing" className="btn">Download Currículo</a>
  </aside>
}

export default Sidebar