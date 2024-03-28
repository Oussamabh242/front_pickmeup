import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import SingIn from './Signin';
import { Routes , Route } from 'react-router-dom'; 
import PostLogIn from './PostLogIn';
import { useState  } from 'react';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(['/login', '/signin' , '/'].includes(location.pathname)) ;

  return (
    <>
      {showNavbar && <Navbar/>}
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signin' element={<SingIn/>}/>
        <Route exact path='/main' element={<PostLogIn/>}/>
      </Routes>
    </>
  );
}

export default App;
