import Clients from './Component/client/Index'
import Header from './Component/Header/Index';
import AddClient from './Component/addClientModel/Index';
function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
     <Header />
     <AddClient />
     <br />
     <Clients />
    </div>
  );
}

export default App;
