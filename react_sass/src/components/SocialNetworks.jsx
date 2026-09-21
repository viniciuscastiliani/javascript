import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin />},
  { name: "github", icon: <FaGithub />},
  { name: "instagram", icon: <FaInstagram />},
]

const SocialNetwork = () => {
  return <section id='socialNetworks'>
    { socialNetworks.map((network) => (
      <a href="#" className='socialBtn' id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
}

export default SocialNetwork