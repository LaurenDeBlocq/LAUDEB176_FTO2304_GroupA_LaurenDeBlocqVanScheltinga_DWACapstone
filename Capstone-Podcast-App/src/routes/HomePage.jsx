import { useState, useEffect } from 'react'
import '../App.css'

import Header from "../components/Header"
import Card from "../components/Card"
import Footer from '../components/Footer';

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
  
  const previewCards = data.map( (show) => { 
    return (<Card key={show.id} showData={show} />)
  })

  return (
    <div>
      <Header />
      {previewCards}
      <Footer />
    </div>
  );
}


export default HomePage
