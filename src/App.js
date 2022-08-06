import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Placeorder from './components/Placeorder/Placeorder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App" >
    <AuthProvider>
    <BrowserRouter>
     <Header></Header>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/placeorder" element={ <PrivateRoute><Placeorder /></PrivateRoute> } />
     </Routes>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
