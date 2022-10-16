import Clients from './Component/client/Index'
import Header from './Component/Header/Index';
import Add from './Component/add/Index'
import Project from './Component/Project/Index'

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
     <Header />
     <Project />
     <Add />
     <Clients />
    </div>
  );
}

export default App;
