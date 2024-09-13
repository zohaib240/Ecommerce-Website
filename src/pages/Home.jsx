import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import BasicExample from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import SingleStudent from './SingleStudent';






const Home = () => {
  const [data, setdata] = useState(null)

  // usenavigate
  const navigate = useNavigate()
 
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    
    })
    .catch(err => console.log(err))

  async function GetData() {

   const response= await fetch  ('https://fakestoreapi.com/products')
   const res = await response.json()  
    setdata(res)      
    console.log('res');
    
    
  }
  GetData()
}, [])


  return (
    <>
     <div className='d-flex justify-content-between gap-5 flex-wrap p-5'>
    {data ? data.map((item)=>{
       return <div key={item.id}>
       <BasicExample img={item.image} title={item.title} description={item.price} />
        </div>
      }): <h1>Loading...</h1>}

      </div>

    </> 
  )
}

export default Home