import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Home , About , NotFound , Contact , Projects } from './pages';
import { Navbar } from './Components';
import { AppProvider } from './AppContext';

function App() {


  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Router>
      </AppProvider>
    </div>
   
      
  );
}

export default App;
