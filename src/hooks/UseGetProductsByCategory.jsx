import { useEffect, useState } from "react"
import { getProductByCategory} from "../services/productService";
export const UseGetProductByCategory = (category) => {
    const [productData, setproductData] = useState([]);
    useEffect(() =>{  
        getProductByCategory(category)
          .then((response) => {
            setproductData(response.data.products)
          } )
          .catch((error) => {
            console.log(error);
          });
      }, [category]); 
  return (
    {productData}
  )
}