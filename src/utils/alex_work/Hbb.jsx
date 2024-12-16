import React from 'react'
import ImageM from './assets/tomatoes.jpg'; 


export default function Hbb() {

  return (
<div className='content-with-margin'>    <h1 className='content-h1'><br /><br />Nos hébergements</h1><br />
    <form className='reserveForm'>
        <div className='form-group'>
      <label htmlFor="date_a">Date de départ</label><br />
        <input name="date_a" type= "date" id="date_a"/>
        </div>
        <div className='form-group'>
        <label htmlFor="date">Date d'arrivée</label>
        <input name="date" type= "date" id="date"/>
        </div>
        <div className='form-group'>
        <label htmlFor="nbr">Nombre d'invités</label>
        <input name="nbr" type= "number" id="nbr"/>
        </div>
        <button type='submit'className='button-custom'>RECHERCHEZ UN LOGEMENT</button>
    </form>
    <br /><br /><img src= {ImageM} alt="etudiant parfait" className='image'/>
      <br /> <br /> <div className="overlay"> 
        <button className="overlay-button_one">CHAMBRE DOUBLE</button>
        <button className="overlay-button_two">VOIR LES DÉTAILS</button> 
        </div>
         <br /> <br /> <div className="overlay_one">
         <p className="overlay-button_twox ">Découvrez nos offres exclusives et nos forfaits saisonniers</p>
         <div className='colored-box'>
        <p className="pore"> <br />Week-End Romantique</p>
        <p className="pre"> Valable jusqu'au 31 décembre 2024</p>
        <p className='pr'> Évadez-vous le temps d'un week-end romantique avec votre moitié<div className="br"></div> Le forfait comprend :</p>
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
          <div className='tour'>
         <div className='colored-box'>
        <p className="pore"> <br />Expérience gastronomique</p>
        <p className="pre"> Disponible toute l'année</p>
        <p className='pr'> Laissez-vous tenter par nos délices culinaires<div className="br"></div> Le forfait comprend :</p>
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
         
        </div>
    </div>
    );
}