import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Gallery.css'


const Gallery = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  
    fetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
  
},[])


  return (
    <>
    <Alert variant="dark" className="text-center p-4">in this gallery i used the fetch method</Alert>
      
      <div className="mygallery" key={data.id}>
        {data.map((item) => (
          <div className="gl" key={data.id}>
            <img src={item.url} className="mylist" />
            <h5>{item.title}</h5>
          </div>

        ))}


      </div>
      <div className="mygfooter">
        <h2>Gallery extra</h2>

      </div>






    </>
  );
}

export default Gallery;