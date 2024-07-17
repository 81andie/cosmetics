
import { Routing } from './Routing/Rutas';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import './responsive.css';
import './ColorVariantSelector.css';
import 'primeflex/primeflex.css';
import './App.css';
import './Header.css';
import './Navbar.css';
import './ErrorPage.css';
import './Targeta.css';
import './Nosotros.css';
import './NuestrasMarcas.css';
import './Subscripcion.css';
import './Footer.css';


function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
     <Routing/>
     </Router>
    </div>
  );
}

export default App;
