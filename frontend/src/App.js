
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deleted from './component/Deleted';
import Updated from './component/Updated';
import Read from './component/Read';
import Register from './component/Register';
import bootstarp from 'bootstrap';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/d.id' element={<Updated />} />
          <Route path='/delete/:id' element={<Deleted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
