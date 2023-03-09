import React from "react";
import { useParams } from "react-router-dom";


const DetalleDelProducto = ({productos}) =>{
   const {id} = useParams() ;
   const producto = productos.find((producto) => producto.id == id)
  
    return (
        <div>
             <h4>{producto.title}</h4>
            <img src={producto.image} alt="" width={150}/>
            <h5>{producto.category}</h5>
            <p>rating: {producto.rating.rate}</p>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
        </div>
        
    )
};

export default DetalleDelProducto;