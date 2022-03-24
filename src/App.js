import './App.css';
import {useState} from "react";
import Form from './components/Form';
import Card from './components/Card';


function App() {
  const [res, setRes] = useState({});
  const [showCard, setShowCard] = useState(false);
 
  return (
    <div className="App container text-center">
        <h1 className='mt-3' >Love Calculator </h1>
        
        <Form setRes={setRes} setShowCard={setShowCard}  />
        <Card res={res} showCard={showCard} />
        <div className="footer">Created by <a href="https://github.com/mucahitkok">Mücahit Kökdemir</a> </div>
        
    </div>
  );
}

export default App;
