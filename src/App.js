import { ProductCard } from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [products, setProducts]= useState([])

  useEffect(()=> {
      axios.get('https://fakestoreapi.com/products').then((result)=>{
        // Para mostrar directamente la data usa - .data
        setProducts(result.data) 
        console.log(products)
      })
  },[] )
  return (
  
    <div className="App">
     <h1> Lista de productos </h1>
     <ProductCard title="producto" price="12"/>
    </div>
  );
}

export default App;
