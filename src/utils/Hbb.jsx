import React from 'react'
import ImageM from '../assets/tomatoes.jpg'; 
import Header from './Header';
import Description from './footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import { motion } from 'framer-motion';
export default function Hbb() {

  return (
    <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} > 
    <div style={{
      backgroundColor: '#dde0e6'
    }}>
      <Header/>
      
      <MediaQuery minWidth={1366} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
      <div className='content-with-margin'>    <h1 className='content-h1'><br /><br />Nos hébergements</h1><br />
            <MediaQuery minWidth={350} maxWidth={475}>
            <br /><br /><img src= {ImageM} alt="etudiant parfait" className='image1'/>
            <br /> <br /> 
            <div className="overlay1"> 
                <button className="overlay-button_one1">CHAMBRE DOUBLE</button>
                <Link to={'/Hebergement/Reserver'}>
                <button className="overlay-button_two2">VOIR LES DÉTAILS</button> 
                </Link>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={476}>
            <br /><br /><img src= {ImageM} alt="etudiant parfait" className='image'/>
            <br /> <br /> 
            <div className="overlay"> 
                <button className="overlay-button_one">CHAMBRE DOUBLE</button>
                <Link to={'/Hebergement/Reserver'}>
                <button className="overlay-button_two">VOIR LES DÉTAILS</button> 
                </Link>
            </div>
            </MediaQuery>
              <div className="overlay_one">
                    <p className="overlay-button_twox ">Découvrez nos offres exclusives et nos forfaits saisonniers</p>
              </div>
                  <div className='colored-box'>
                      <p className="pore"> <br />Week-End Romantique</p>
                      <p className="pre"> Valable jusqu'au 31 décembre 2024</p>
                        <p className='pr'> Évadez-vous le temps d'un week-end romantique avec votre moitié
                          <div className="br">
                          </div> Le forfait comprend :
                        </p>
                      <br />
                      <ul className='me'>
                        <li className='oi'>2 nuits dans notre suite de luxe</li>
                        <li className='oi'>Séance de massage en couple</li>
                        <li className='oi'>Dîner romantique aux chandelles</li>
                      </ul>
                      <p className='pr'> À partir de 350.000 FCFA par couple</p>
                      <br />
                      <button className='buonto'>Réserver maintenant</button>
                  </div>
                    <div className='colored-box'>
                      <p className="pore"> <br />Expérience gastronomique</p>
                      <p className="pre"> Disponible toute l'année</p>
                      <p className='pr'> Laissez-vous tenter par nos délices culinaires
                        <div className="br">
                          </div> Le forfait comprend :
                      </p>
                      <br />
                      <ul className='me'>
                        <li className='oi'>Une nuit en chambre de luxe</li>
                        <li className='oi'>Menu dégustation à 5 plats</li>
                        <li className='oi'>Expérience d'appréciation de vins</li>
                        <li className='oi'>Cours de cuisine avec notre chef</li>
                      </ul>
                      <p className='pr'>À partir de 240.000 FCFA par personne</p>
                      <br />
                      <button className='buonto'>Réserver maintenant</button>
                    </div>
          </div>
          <Description/>
        </div>
        </motion.div>
    );
}