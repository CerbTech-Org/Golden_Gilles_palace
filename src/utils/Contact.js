import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import Us from './ContactUs';
function Contact() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Us/>
      <Description/>
    </div>
  );
}

export default Contact;
