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
function Home(){
    return(
        <div className="App">
         <Header/>
         <Navbar/>
         <Welcome/>
         <div id='card-system'>
           <Card image_src={heberg} margin_left={350} margin_top={30} title='Hébergement' description='Un choix de chambres etsuites, toutes pensées pour votre confort. Entre raffinement et équipements modernes, découvrez un espace qui vous offre un équilibre parfait entre élégance et détente'/>
           <Card image_src={restau} margin_left={765} margin_top={-450} title='Restauration' description="Une gastronomie d'exception vous attend. Savoures des plats inspirés des traditions locales et internationales, conçus pour satisfaire les palais les plus exigeants"/>
           <Card image_src={tourisme} margin_left={1180} margin_top={-450} title='Tourisme' description='Explorez les merveilles locales grâce à nos excursions  et activités. Laissez-nous vous guider à travers une découverte authentique et enrichissante de notre région.'/>
         </div>
         <Hebergement/>
         <Description/>
       </div>
    )
}

export default Home