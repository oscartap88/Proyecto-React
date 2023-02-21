
import './App.css'
import Button from './Components/button/button'
import ItemList from './Components/Navbar/ItemListContainer/ItemList';
import Navbar from './Components/Navbar/Navbar'

const Item = [ "Remeras","Pantalones","Camisas","Zapatos"];

function App() {

  return (
    
    <div>
      <Navbar/>
      <h1 className='titulo'>COMFACIL!</h1>
      <ItemList Item={Item}/>
      <Button txtBtn="Compra Ahora"/>
      <Button txtBtn="Promos"/>
      
      
    </div>
  )
}

export default App
