import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './provider'
import Footer from './components/footer/footer.component'
import Auth from './containers/auth.component'

function App() {
  const { login, auth } = useContext(AuthContext)

  return (
    <>
      <Auth/>
      <Footer/>
    </>
  );
}

export default App;
