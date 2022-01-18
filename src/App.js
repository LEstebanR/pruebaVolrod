import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import Random from './pages/Random.jsx'
import Result from './pages/Result.jsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/random" element={<Random/>}/>
      <Route path="/:search" element={<Result/>}/>
    </Routes>
  );
}

export default App;
