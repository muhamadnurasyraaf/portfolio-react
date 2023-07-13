import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import About from './pages/About';
import { Navbar } from './Components';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
