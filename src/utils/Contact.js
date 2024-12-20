import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import Us from './ContactUs';
import MediaQuery from 'react-responsive';
function Contact() {
  return (
    <div className="App">
      <Header/>
      <MediaQuery minWidth={1366} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
      <Us/>
      <Description/>
    </div>
  );
}

export default Contact;
