import './App.css';
import './bootstrap.min.css.map'
import './bootstrap.css.map'
import './bootstrap.css'
import './animate.min.css'
import './aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Storage from './pages/Storage'
import { Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import Quotes from './pages/Quotes';
import Local from './pages/Local';
import Commercial from './pages/Commercial';
import Consultation from './pages/Consultation';



function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/localmoving' element={<Local />} />
         <Route path='/commercialmoving' element={<Commercial />} />
         <Route path='/storage' element={<Storage />} />
         <Route path='/freequote' element={<Quotes />} />
         <Route path='/consultation' element={<Consultation />} />
         <Route path='/contact' element={<Contact />} />
       </Routes>
    </div>
  );
}

export default App;
