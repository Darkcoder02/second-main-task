import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import ProtectedRoutes from './Services/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
