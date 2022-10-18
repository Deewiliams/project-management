import './App.css';
import Home from './Pages/Home';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import { Routes, Route } from "react-router-dom";
import Header from '../src/Component/Header/Index'

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
    
  );
}

export default App;
