import '../App.css'
import MediaQuery from 'react-responsive'
import React from 'react'
import Navbar from './Navbar';
import Description from './footer';
import Header from './Header';
import './style/feature.css'


function Resta ({name, titre1, titre2}) {
  return (
    <div> 
    <MediaQuery minWidth = {768} maxWidth={1024}>
    <div className="cntr1"> 
        <div className="hdr1"> 
            <h1>{titre1}</h1> 
            </div>
        <div> 
        <img src= {name} alt="etudiant parfait" className='ipie1'/>
        </div> 
            <div className="dsptn1"> 
                <p>{titre2}</p>
            </div> 
        <button className="bontt1">Commander maintenant</button> 
    </div>
    </MediaQuery>
    <MediaQuery minWidth = {1025}>
    <div className="cntr"> 
        <div className="hdr"> 
            <h1>{titre1}</h1> 
            </div>
        <div> 
        <img src= {name} alt="etudiant parfait" className='ipie'/>
        </div> 
            <div className="dsptn"> 
                <p>{titre2}</p>
            </div> 
        <button className="bontt">Commander maintenant</button> 
    </div>
    </MediaQuery>
    <MediaQuery minWidth = {350} maxWidth={500}>
    <div className="cntr2"> 
        <div className="hdr2"> 
            <h1>{titre1}</h1> 
            </div>
        <div> 
        <img src= {name} alt="etudiant parfait" className='ipie2'/>
        </div> 
            <div className="dsptn2"> 
                <p>{titre2}</p>
            </div> 
        <button className="bontt2">Commander maintenant</button> 
    </div>
    </MediaQuery>
    </div>
  )
  
}
export default Resta