
import { Routing } from './Routing/Rutas';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import './responsive.css';
import './ColorVariantSelector.css';
import 'primeflex/primeflex.css';
import './App.css';


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
