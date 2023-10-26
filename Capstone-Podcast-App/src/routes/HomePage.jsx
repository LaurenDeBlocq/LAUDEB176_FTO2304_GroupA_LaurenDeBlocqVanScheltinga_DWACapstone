import { useState, useEffect } from 'react'
import '../App.css'

import Header from "../components/Header"
import Card from "../components/Card"

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
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

  console.log(data);
  
  const previewCards = data.map( (show) => { 
    return (<Card key={show.id} showData={show} />)
  })

console.log(data);

  return (
    <div>
      <Header />
      {previewCards}
    </div>
  );
}


export default HomePage
