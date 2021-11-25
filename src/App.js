import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Cart from './Cart';
import Navbar from './Navbar';




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home category="Beauty" />} />
    <Route exact path="/cart" element={<Cart  />} />
    <Route exact path="/Electronics" element={<Home category="Electronics" />}/>
    <Route exact path="/cloth" element={<Home category="Clothing" />}/>
    <Route exact path="/kids" element={<Home category="Kids" />}/>
    
      </Routes>
    
 
    
    </BrowserRouter>
  );
}

export default App;
