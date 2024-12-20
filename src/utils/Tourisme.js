import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import './style/Tourisme.css'
import map from '../assets/map.png'
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Tourisme() {
  return (
    <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} >
    <div className="App">
      <Header/>
      <MediaQuery minWidth={1366} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
      <h1>Explorer nos merveilles locales</h1>
      <p>Nous mettons à votre disposition des guides touristiques pour vous permettre <br/> d'explorer sereinement les différents sites disponibles  et que vous souhaiterez visiter </p>
        <MediaQuery minWidth={1920} maxWidth={2560}>
          <div style={{
            marginLeft: '-4%'
          }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
              width="50%"
              height="550"
              style={{border:0,}} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"> 
            </iframe>
          </div>
          <Link to='https://wa.me/+2299632706'>
            <div id="my_guide">
                <p className='guide_contactor'>CONTACTER UN GUIDE</p>
            </div>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={1366} maxWidth={1919}>
          <div>  
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
                  width="80%" 
                  height="550"
                  style={{border:0,}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"> 
                </iframe></div>
          <Link to='https://wa.me/+2299632706'>
            <div id="my_guide">
                <p className='guide_contactor'>CONTACTER UN GUIDE</p>
            </div>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={360} maxWidth={640}>
          <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.691935297836!2d2.3490732757924153!3d6.433602993557537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900568fb735%3A0x1f0f06e1cd80419e!2sGilles%20Golden%20Palace!5e0!3m2!1sfr!2sbj!4v1734676828643!5m2!1sfr!2sbj"
                        width="80%" 
                        height="350"
                        style={{border:0,}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"> 
                    </iframe>
          </div>
          <Link>
          <Link to='https://wa.me/+2299632706'>
              <div id="my_guide">
                <p className='guide_contactor' 
                style=
                {
                  {
                    width: 150,
                    height: 30,
                    fontSize: 10,
                    color: 'white',
                    borderRadius: 30,
                    opacity: 0.8,
                    textAlign: 'center',
                    paddingTop: 11,
                    position: 'absolute',
                    marginLeft: '15%'
                  }
                }>CONTACTER UN GUIDE</p>
            </div>
          </Link>
          </Link>
        </MediaQuery>
      <Description/>
    </div>
    </motion.div>
  );
}

export default Tourisme;
