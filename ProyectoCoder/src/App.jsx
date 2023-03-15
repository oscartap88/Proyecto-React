
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Button from './Components/button/button'
import Catálogo from './Components/Catálogo';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'
import DetalleDelProducto from './Components/DetalleDelProducto';


const Item = [ "Remeras","Pantalones","Camisas","Zapatos"];

function App() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch ('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then (json => setProductos(json))
  } , [])

  return (
    
    <div>
          
          <Navbar/>
        
          <Link to="/">
          <h1 className='titulo'>COMPREFACIL!</h1>
          </Link>
       
          <ItemListContainer Item={Item}/>
      <Routes>
        <Route path="/" element={<p></p>}/>
        <Route path="/products" element={<Catálogo productos={productos}/>}/> 
        <Route path="products/:id" element={<DetalleDelProducto productos={productos}/>}/>
      </Routes>
     

      <Button txtBtn="Compra Ahora"/>
      <Button txtBtn="Promos"/>
      
      
      
    </div>
  )
}

export default App
