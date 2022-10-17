import Clients from './Component/client/Index'
import Header from './Component/Header/Index';
import Add from './Component/add/Index'
import Project from './Component/Project/Index'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
    // <div className="App">
    //  <h1>Hello world</h1>
    //  <Header />
    //  <Project />
    //  <Add />
    //  <Clients />
    // </div>
  );
}

export default App;
