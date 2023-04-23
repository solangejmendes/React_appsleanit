import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Inicio from './components/pages/Inicio';
import Servicios from './components/pages/Servicios';
import Productos from './components/pages/Productos';
import Contacto from './components/pages/Contacto';
import Gracias from './components/pages/inc/Gracias';
import Quiensomos from './components/pages/Quiensomos';
import Metodologia from './components/pages/Metodologia';

function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="servicios" element={<Servicios />} />
                <Route path="productos" element={<Productos />} />
                <Route path="quiensomos" element={<Quiensomos />} />
                <Route path="metodologia" element={<Metodologia />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="gracias" element={<Gracias />} />
                <Route path="/" element={<Inicio />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
