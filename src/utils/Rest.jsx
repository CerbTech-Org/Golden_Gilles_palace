import '../App.css'
import MediaQuery from 'react-responsive'
import React from 'react'
import Navbar from './Navbar';
import Description from './footer';
import Header from './Header';
import './style/feature.css'
import Resta from './restau';
import Imagebi from './alex_work/assets/thé.jpg'; 
import Imagebc from './alex_work/assets/Tapioca.jpg'; 
import Imagebd from './alex_work/assets/Riz.jpg'; 
import Imagebe from './alex_work/assets/Couscous.jpg'; 

export default function Restauration() {
 
  return (
    <div style={{
      backgroundColor: '#dde0e6'
    }}>
      <Header/>

      <MediaQuery minWidth={1366} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
        <MediaQuery minWidth={350} maxWidth={500}>
        <div className='content-with'>
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
        Une gastronomie d’exception vous attend. Savourez des plats <br /> inspirés des traditions locales et internationales, conçus pour <br /> satisfaire les palais les plus exigeants
        </p>
        <br />
        <br />
        <br />
        <div className='goku2'>
        <Resta name = {Imagebi} titre1 = "Petit Déjeuner" titre2 = "Thé / Café avec assortiments de viennoiseries"/>
        <Resta name = {Imagebc} titre1 = "Goûter" titre2 = "Tapioca au lait, mangue et coco"/>
        <Resta name = {Imagebd} titre1 = "Déjeuner" titre2 = "Riz Jollof + Légumineuses"/>
        <Resta name = {Imagebe} titre1 = "Diners" titre2 = "Couscous au poulet et aux légumes"/>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1024}>
      <div className='content-margin'>
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
         Une gastronomie d’exception vous attend. Savourez des plats <br /> inspirés des traditions locales et internationales, conçus pour <br /> satisfaire les palais les plus exigeants
        </p>
        <br />
        <br />
        <br />
        <div className='goku1'>
        <Resta name = {Imagebi} titre1 = "Petit Déjeuner" titre2 = "Thé / Café avec assortiments de viennoiseries"/>
        <Resta name = {Imagebc} titre1 = "Goûter" titre2 = "Tapioca au lait, mangue et coco"/>
        <Resta name = {Imagebd} titre1 = "Déjeuner" titre2 = "Riz Jollof + Légumineuses"/>
        <Resta name = {Imagebe} titre1 = "Diners" titre2 = "Couscous au poulet et aux légumes"/>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
      <div className='content-with-margin'>
        <h1>
          <br /><br />Nos services de restauration
        </h1>
        <p className='gastronomie'>
         Une gastronomie d’exception vous attend. Savourez des plats <br /> inspirés des traditions locales et internationales, conçus pour <br /> satisfaire les palais les plus exigeants
        </p>
        <br />
        <br />
        <br />
        <div className='goku'>
        <Resta name = {Imagebi} titre1 = "Petit Déjeuner" titre2 = "Thé / Café avec assortiments de viennoiseries"/>
        <Resta name = {Imagebc} titre1 = "Goûter" titre2 = "Tapioca au lait, mangue et coco"/>
        <Resta name = {Imagebd} titre1 = "Déjeuner" titre2 = "Riz Jollof + Légumineuses"/>
        <Resta name = {Imagebe} titre1 = "Diners" titre2 = "Couscous au poulet et aux légumes"/>
        </div>
      </div>
      </MediaQuery>
      <Description/>
    </div>
  );
}
