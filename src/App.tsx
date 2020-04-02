import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './provider'

function App() {
  const { login, auth } = useContext(AuthContext)

  return (
    <>
      <h6>Auth Testing, {auth.token || "-"}</h6>
      <button
        onClick={() => login({ email: "eve.holt@reqres.in", password: "cityslicka" })}>Login</button>
    </>
  );
}

export default App;
