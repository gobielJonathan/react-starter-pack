import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './provider'
import Footer from './components/footer/footer.component'
import Login from './components/login/login.component'

function App() {
  const { login, auth } = useContext(AuthContext)

  return (
    <>
      <Login/>
      <Footer/>
    </>
  );
}

export default App;
