import { useState, useEffect } from 'react'
import './App.css'

import Header from "./components/Header"
import Card from "./components/Card"

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/id/10716')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Card 
        data={data.seasons[0]}
        title={data.title}
      />
    </div>
  );
}


export default App
