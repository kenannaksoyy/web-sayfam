import './App.css';
import Home from './comps/Home';
import Projects from './comps/Projects';
import {Route, Routes} from "react-router-dom";
import Header from './comps/Header';
import Skills from './comps/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/skills"element={<Skills/>}/>
        </Routes>  
      
    </div>
  );
}

export default App;
