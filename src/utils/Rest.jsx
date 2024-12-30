import '../App.css'
import MediaQuery from 'react-responsive'
import React from 'react'
import Navbar from './Navbar';
import Description from './footer';
import Header from './Header';
import './style/feature.css'
import Resta from './restau';
import Imagebi from '../assets/thé.jpg'; 
import Imagebc from '../assets/Tapioca.jpg'; 
import Imagebd from '../assets/Riz.jpg'; 
import Imagebe from '../assets/Couscous.jpg'; 
import { motion } from 'framer-motion';

export default function Restauration() {
 
  return (
    <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }} > 
    <div style={{
      backgroundColor: '#dde0e6'
    }}>
      <Header/>

      <MediaQuery minWidth={1024} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
        <MediaQuery minWidth={350} maxWidth={702}>
        <div className='content-with'>
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
        Une gastronomie d’exception vous attend. Savourez des plats <br /> inspirés des traditions locales et internationales, conçus pour <br /> satisfaire les palais les plus exigeants
        </p>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={703}>
      <div className='content-margin'>
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
         Une gastronomie d’exception vous attend. Savourez des plats <br /> inspirés des traditions locales et internationales, conçus pour <br /> satisfaire les palais les plus exigeants
        </p>
      </div>
      </MediaQuery>
      <Description/>
    </div>
    </motion.div>
  );
}
