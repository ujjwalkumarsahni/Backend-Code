import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get('/api/product')
    .then((response) =>{
      setProducts(response.data)
    })
    .catch((error) =>{
      console.log(error);
      
    })

  },[])
  return (
    <>
     <h1 className='product-head'>Product</h1>
     <div className='container'>
     {
      products.map((product,idx) =>(
        <div className='card' key={idx}>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.title}</p>
          <p>price : {product.price}</p>
          <p>Rating : {product.rating}</p>
          <p>stock : {product.rating}</p>
          <p>discountPercentage : {product.discountPercentage}</p>
        </div>
      ))
     }
     </div>

    </>
  )
}

export default App
