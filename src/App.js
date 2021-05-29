import './App.css';
import React, {useEffect, useState} from 'react'
const API_URL =  process.env.REACT_APP_API_URL

function App() {
  const [obj, setObj] = useState(null)
  useEffect(() => {
    fetch(API_URL).then(response => response.json()).then(setObj)
  }, [])
  return (
    <h1>Hello my {obj && obj.wife}</h1>
  );
}

export default App;
