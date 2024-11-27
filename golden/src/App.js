import logo from './logo.svg';
import './App.css';
import Navbar from './utils/Navbar'
import Header from './utils/Header'
import Welcome from './utils/Welcome';
import Card from './utils/card';
import tourisme from './assets/tourisme.png'
import heberg from './assets/hebergement.png'
import restau from './assets/restauration.png'
import Hebergement from './utils/hebergement';
import Description from './utils/footer';
import ReactDOM from "react-dom/client";
import Home from './utils/Home';
import Contact from './utils/Contact';
import Tourisme from './utils/Tourisme';
import {
  BrowserRouter,
  Routes, Route,
  Link
} from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="Contact" element={<Contact />} />
        <Route path="Tourisme" element={<Tourisme />} />
      </Routes>
    </BrowserRouter>
  );
}
