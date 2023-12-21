import { useEffect } from 'react';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getproducts } from './services';
function App() {
  //const [count, setCount] = useState(0)
  const [productsData, setproductsData] = useState([]);
  useEffect(() =>{  
    getproducts()
      .then((response) => {
        setproductsData(response.data.products)
      } )
      .catch((error) => {
        console.log(error);
      });
  }, []); 
  return (
    <>
      <div  style={{width:'100vw', height:'100vh'}}>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a La Tiendita" productsData={productsData}/>
      </div>
    </>
  )
}

export default App
