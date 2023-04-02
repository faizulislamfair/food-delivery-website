
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home,About,Contact,Error} from './Pages'
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
