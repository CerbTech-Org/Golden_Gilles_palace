import './App.css';
import Home from './utils/Home';
import Contact from './utils/Contact';
import Tourisme from './utils/Tourisme';
import Hmenu from './utils/Hebergement_menu';
import Hbb from './utils/Hbb';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Restauration from './utils/Rest';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="Contact" element={<Contact />} />
        <Route path="Tourisme" element={<Tourisme />} />
        <Route path="Hebergement" element={<Hbb />} />
        <Route path="Restauration" element={<Restauration />} />
        <Route path="Hebergement/Reserver" element={<Hmenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}
