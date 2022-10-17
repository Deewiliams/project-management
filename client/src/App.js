import Home from './Pages/Home';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
    
  );
}

export default App;
