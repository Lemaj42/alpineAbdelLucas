import { reacteBrowserRouter } from "react-router-dom";
import './App.css';
import Router from './router';

const router = reacteBrowserRouter()

function App() {
  return (
    <div className="App">


      <Router></Router>

    </div>
  );
}

export default App;
