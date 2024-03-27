import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import SingIn from './Signin';
import { Routes , Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signin' element={<SingIn/>}/>
      </Routes>
    </>
  );
}

export default App;
