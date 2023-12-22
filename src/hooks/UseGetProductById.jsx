import { useEffect, useState } from "react"
import { getProductById} from "../services/productService";
export const UseGetProductById = (id) => {
    const [productData, setproductData] = useState({});
    useEffect(() =>{  
        getProductById(id)
          .then((response) => {
            setproductData(response.data)
          } )
          .catch((error) => {
            console.log(error);
          });
      }, []); 
  return (
    {productData}
  )
}
