import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import Three from './views/Three';
import ObjDetection from './views/ObjDetection';
import { Inqs } from './views/Inqs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/three" element={<Three/>} />
        <Route path="/webcam" element={<ObjDetection/>} />
        <Route path="/inquiries" element={<Inqs/>} />
      </Routes>
    </div>
  );
}

export default App;
