
import './App.css';
import About from './Compunents/About';
import Contact from './Compunents/Contact';
import Services from './Compunents/Services';
import {Route} from "react-router-dom";
import Navigationbar from './Navigationbar';
function App() {
  return (
    <div className="App">
      <Navigationbar/>
     <Route path="/about"> <About/></Route> 
      <Route path="/contact"><Contact/></Route> 
      <Route path="/services"><Services/></Route> 
    </div>
  );
}

export default App;
