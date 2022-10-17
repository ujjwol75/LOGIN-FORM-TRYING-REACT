import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SuccessPage from './components/SuccessPage';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)
  console.log('token', token)

  const handleOut = (e) =>{
     setToken("")
     localStorage.clear()
  }
  return (
    <div className="App">
      <button onClick={handleOut} type="submit">logout</button>
      {token ? <SuccessPage /> : <Login token={token} setToken={setToken} />} 
    </div>
  );
}

export default App;
