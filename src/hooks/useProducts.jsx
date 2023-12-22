import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/productService";
export const useGetProducts = (limit=10) =>{
    const [productsData, setproductsData] = useState([]);
    useEffect(() =>{  
        getProducts(limit)
          .then((response) => {
            setproductsData(response.data.products)
          } )
          .catch((error) => {
            console.log(error);
          });
      }, []); 
    
      return{productsData}
}