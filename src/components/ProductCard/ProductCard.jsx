import { Link } from 'react-router-dom';
import './ProductCardStyles.css';

export const ProductCard = ({id, title, price, image}) => {

    return (
        <>
         {/* <a href={`/product/${id}`} className="productInfo"> {title} </a>  es un comentario*/ } 
         <h2 className="productInfo">
            <Link to={`/product/${id}`}>
              {title}
            </Link>

         </h2>
         <img className="productImage" src={image} alt="Imagen de producto"/>
         <p>Price:{price}</p>
          
        </>
      )
}