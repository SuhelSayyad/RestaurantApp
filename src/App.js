import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import Loginlogout from './Loginlogout';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Loginlogout />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='*' element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
