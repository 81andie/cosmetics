
import './App.css';
import './responsive.css';
import './ColorVariantSelector.css'
import { Routing } from './Routing/Rutas';
import { BrowserRouter as Router } from 'react-router-dom';
import 'primeflex/primeflex.css';

        

import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import 'primeicons/primeicons.css';

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
