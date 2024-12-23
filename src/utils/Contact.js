import '../App.css';
import Navbar from './Navbar'
import Header from './Header';
import Description from './footer';
import Us from './ContactUs';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
function Contact() {
  return (
    <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }}  > 
    <div className="App">
      <Header/>
      <MediaQuery minWidth={1025} maxWidth={2560}>
        <Navbar/>
      </MediaQuery>
      <Us/>
      <Description/>
    </div>
    </motion.div>
  );
}

export default Contact;
