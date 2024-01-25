import { MainRouter } from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
function App() {
  //const [count, setCount] = useState(0)
 
  
  return (
    <>
      <div  style={{width:'100vw', height:'100vh'}}>
        <CartProvider>
          <MainRouter/>
        </CartProvider>
      </div>
    </>
  )
}

export default App
