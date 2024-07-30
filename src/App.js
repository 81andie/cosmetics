
import { Routing } from './Routing/Rutas';


import './responsive.css';
import './ColorVariantSelector.css';
import 'primeflex/primeflex.css';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './configuracion/i18n';
import LanguageSelector from './components/LanguageSelector';



function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <LanguageSelector/>

     <Routing/>
  
    </div>

    </I18nextProvider>
  );
}

export default App;
