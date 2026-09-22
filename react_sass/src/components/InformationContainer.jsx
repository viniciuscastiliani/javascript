import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div class="infoCard">
      <AiFillPhone id="phoneIcon"/>
      <div>
        <h3>Telefone:</h3>
        <p>(14) 99777-0276</p>
      </div>
    </div>

    <div class="infoCard">
      <AiOutlineMail id="mailIcon"/>
      <div>
        <h3>E-mail:</h3>
        <p>viniciuscastiliani@gmail.com</p>
      </div>
    </div>

    <div class="infoCard">
      <AiFillEnvironment id="pinIcon"/>
      <div>
        <h3>Localização:</h3>
        <p>Tupã/SP</p>
      </div>
    </div>

  </section>
}

export default InformationContainer