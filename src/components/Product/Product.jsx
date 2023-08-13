import { ProductCard } from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Products = ()=> {

        const [products, setProducts]= useState([])

        useEffect(()=> {
            axios.get('https://fakestoreapi.com/products').then((result)=>{
              // Para mostrar directamente la data usa - .data
              setProducts(result.data) 
            //   console.log(products)
            })
        },[]) // Pasa un arreglo vacío aquí
        return (
        
          <div className="App">
           <h1> Lista de productos </h1>
           {products && products.map((product)=>{
            return(
              <ProductCard 
              key={product.id}
              title={product.title} 
              image={product.image}
              price={product.price}/>
            )
           })}
           
          </div>
        )
    
}