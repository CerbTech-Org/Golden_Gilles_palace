import '../App.css'
import MediaQuery from 'react-responsive'
import React from 'react'
import './style/feature.css'


function Resta ({name, titre1, titre2}) {
  return (
    <div> 
    <MediaQuery minWidth = {702}>
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
    <MediaQuery minWidth = {350} maxWidth={701}>
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