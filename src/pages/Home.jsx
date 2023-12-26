import ItemListContainer from "../components/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts";
import { useEffect } from "react";
export const Home = () => {
    useEffect(() =>{
        document.title="La Tiendita - Home"
    })
    const {productsData} = useGetProducts(30);
    return (
        <ItemListContainer greeting="Bienvenidos a La Tiendita" productsData={productsData}/>
    )
}
