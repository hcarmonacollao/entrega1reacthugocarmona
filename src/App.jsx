import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div  style={{width:'100vw', height:'100vh'}}>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a La Tiendita"/>
      </div>
    </>
  )
}

export default App
