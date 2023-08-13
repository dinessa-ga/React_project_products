import { ProductCard } from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts]= useState([])
  return (
  
    <div className="App">
     <h1> Lista de productos </h1>
     <ProductCard title="producto" price="12"/>
    </div>
  );
}

export default App;
