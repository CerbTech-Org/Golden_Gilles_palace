import React from 'react'
import MyImage from './assets/oignons.jpg'; 
import Image from './assets/patate.jpg'; 
import ImageMy from './assets/douce.jpg'; 
import ImageM from './assets/tomatoes.jpg'; 
import Header from './Header';

export default function Restauration() {
  return (
    <div className='content-with-margin'>
    <Navbar/>  
    <h1><br /><br />Nos services de restauration</h1>
    <p className='pere'><br />Une gastronomie d’exception vous attend. Savourez des plats inspirés des traditions <br />locales et internationales, conçus pour satisfaire les palais les plus exigeants</p>
    <h2><br />Petit Déjeuner</h2><br />
    <img src= {MyImage} alt="etudiant parfait" className='image-dimensions'/>
    <h2><br />Déjeuner</h2><br />
    <img src= {Image} alt="etudiant parfait" className='image-dimensions'/>
    <h2><br />Goûters</h2><br />
    <img src= {ImageMy} alt="etudiant parfait" className='image-dimensions'/>
    <h2><br />Diners</h2><br />
    <img src= {ImageM} alt="etudiant parfait" className='image-dimensions'/>
    <Description/>

    </div>
  );
}
