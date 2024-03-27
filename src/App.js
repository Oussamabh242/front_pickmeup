import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import { Routes , Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
