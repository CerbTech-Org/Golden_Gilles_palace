import '../App.css'
import React from 'react'
import MyImage from './alex_work/assets/oignons.jpg'; 
import Image from './alex_work/assets/patate.jpg'; 
import ImageMy from './alex_work/assets/douce.jpg'; 
import ImageM from './alex_work/assets/tomatoes.jpg'; 
import Navbar from './Navbar';
import Description from './footer';
import Header from './Header';
import './style/feature.css'
export default function Restauration() {
  return (
    <div style={{
      backgroundColor: '#dde0e6'
    }}>
      <Header/>
      <Navbar/>
        <div className='content-with-margin' id="restauration">
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
          <br />Une gastronomie d’exception vous attend. Savourez des plats inspirés des traditions <br />locales et internationales, conçus pour satisfaire les palais les plus exigeants
        </p>
        <h2>
          <br />Petit Déjeuner</h2><br />
        <img src= {MyImage} alt="etudiant parfait" className='image-dimensions'/>
        <h2><br />Déjeuner</h2><br />
        <img src= {Image} alt="etudiant parfait" className='image-dimensions'/>
        <h2><br />Goûters</h2><br />
        <img src= {ImageMy} alt="etudiant parfait" className='image-dimensions'/>
        <h2><br />Diners</h2><br />
        <img src= {ImageM} alt="etudiant parfait" className='image-dimensions'/>
      </div>
      <Description/>
    </div>
  );
}
