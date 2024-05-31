import './asssets/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Estoque from './components/Estoque';
import Financas from './components/Financas';
import Projetos from './components/Projetos';
import Perfil from './components/Perfil';
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function App() {
  
  return (
    <BrowserRouter>
          <header>
            <nav className='navbar'>
              <h1 className='logo'>SNI Service</h1>

                <ul className='nav-list'>
                  <a href="/" className='links'><li> <FaHome /> Dashboard</li></a>
                  <a href="/estoque" className='links'><li> <FaCartShopping /> Estoque</li></a>
                  <a href="/projetos" className='links'><li> <FaProjectDiagram /> Projetos</li></a>
                  <a href="/financas" className='links'><li> <FaWallet /> Financeiro</li></a>
                  <a href="/perfil" className='links'><li> <IoPersonSharp /> Perfil</li></a>
                </ul>
            </nav>
          </header>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/estoque' element={<Estoque/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/financas' element={<Financas/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
          </Routes>
    </BrowserRouter>
    
  )
}

export default App;
