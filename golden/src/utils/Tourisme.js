import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
function Tourisme() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>Explorer nos merveilles locales</h1>
      <p>Nous mettons à votre disposition des guides touristiques pour vous permettre <br/> d'explorer sereinement les différents sites disponibles  et que vous souhaiterez visiter </p>
        <div id="send_button">
            <p className='yellow'>CONTACTER UN GUIDE</p>
        </div>
      <Description/>
    </div>
  );
}

export default Tourisme;
