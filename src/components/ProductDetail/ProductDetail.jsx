import { useParams } from "react-router-dom"



export const ProductDetail = () =>{
    let {id}=useParams ()

    return(

        <>
        <h1>Información del producto con el identificador {id}</h1>
        
        </>
    )
}