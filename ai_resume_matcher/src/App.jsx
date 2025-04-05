import { useState } from 'react';
import './App.css';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Login />
      <Register/>
    </>
  );
}

export default App;
