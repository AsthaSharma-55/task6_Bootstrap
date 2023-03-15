import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Filter from './component/Filter';
import Footer from './component/Footer';
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Profile from './component/Profile';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Filter/>}   />
        <Route path='/home'element={<Home/>}   />
        <Route path='/about'element={<About/>}   />
        <Route path='/profile'element={<Profile/>}   />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
