import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';



function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>

      <div>
        <Cards/>
      </div>
      
    </div>
  );
}

export default App;
