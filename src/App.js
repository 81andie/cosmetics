
import './App.css';
import './responsive.css';
import {Prueba} from './components/Prueba';

import 'primeflex/primeflex.css';
        

import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Inicio/>
     <Prueba/>
    </div>
  );
}

export default App;
