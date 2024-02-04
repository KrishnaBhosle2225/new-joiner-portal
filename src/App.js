import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar/>
      </div>
      <div>
        <Cards/>
      </div>

      {/* <div>
        <Card data={data}/>
      </div> */}
      
    </div>
  );
}

export default App;
