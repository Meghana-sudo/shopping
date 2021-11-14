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
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
      </Routes>
    
 
    
    </BrowserRouter>
  );
}

export default App;
