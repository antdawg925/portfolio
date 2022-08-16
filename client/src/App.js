import './App.css';
import {useNavigate, Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import Three from './views/Three';
import ObjDetection from './views/ObjDetection';
import { Inqs } from './views/Inqs';
function App() {

  const navigate = useNavigate();
  return (
    <div className="App">

      
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/three" element={<Three/>} />
        <Route path="/webcam" element={<ObjDetection/>} />
        <Route path="/inquiries" element={<Inqs/>} />
        <Route path="*" element={<Home/>} />


      </Routes>

    </div>
  );
}

export default App;
