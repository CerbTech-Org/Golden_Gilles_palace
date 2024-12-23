import '../App.css';
import Navbar from './Navbar'
import Header from './Header'
import Welcome from './Welcome';
import Card from './card';
import tourisme from '../assets/tourisme.png'
import heberg from '../assets/hebergement.png'
import restau from '../assets/restauration.png'
import Hebergement from './hebergement';
import Description from './footer';
import Localistn from './local';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// const libraries = ['places'];
// const mapContainerStyle = {
// width: '100vw',
// height: '100vh',
// };

// async function give_pos(params) {

// const apiUrl = 
// "https://api.geoapify.com/v1/geocode/search?text=Gilles%20Golden%20Palace&apiKey=b4e3e4c7e954462c96f69b85711e842c"
// const response = await fetch(apiUrl);
//   const data = await response.json();
//       if (data.cod && data.cod !== 200) {
//         throw new Error(data.message || 'Failed to fetch weather data');
//       }
//        alert(data)
//        console.log(data.query)
//       const position = { lat: data.results[0].lat, lng: data.results[0].lon };
// }
// const center = give_pos()
function Home(){
        return(
          <motion.div   initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }} >
        <div className="App">
         <Header/>
         <MediaQuery minWidth={1025} maxWidth={2560}>
            <Navbar/>
         </MediaQuery>
         <Welcome/>
         <div id="cardSystem">
           <Card image_src={heberg} margin_left={350} margin_top={30} title='Hébergement' description='Un choix de chambres etsuites, toutes pensées pour votre confort. Entre raffinement et équipements modernes, découvrez un espace qui vous offre un équilibre parfait entre élégance et détente'/>
           <Card image_src={restau} margin_left={765} margin_top={-450} title='Restauration' description="Une gastronomie d'exception vous attend. Savoures des plats inspirés des traditions locales et internationales, conçus pour satisfaire les palais les plus exigeants"/>
           <Card image_src={tourisme} margin_left={1180} margin_top={-450} title='Tourisme' description='Explorez les merveilles locales grâce à nos excursions  et activités. Laissez-nous vous guider à travers une découverte authentique et enrichissante de notre région.'/>
         </div>
         <Hebergement/>
          <Localistn/>
         <Description/>
       </div>
        </motion.div>
        );
}

export default Home