import { BrowserRouter, Routes, Route } from "react-router-dom"    
import { Home } from "../pages/Home"
import { Category } from "../pages/Category"
import NavBar from "../components/NavBar"
import { ItemDetailContainer } from "../pages/ItemDetailContainer"
    export const MainRouter = () => {
      return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:id" element={<Category/>}/>
            </Routes>
        </BrowserRouter>
      )
    }
    