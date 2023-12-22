import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import { UseGetProductByCategory } from '../hooks/UseGetProductsByCategory';

export const Category = () => {
    const {id} = useParams();
    const {productData} = UseGetProductByCategory(id)
  return (
    <ItemListContainer greeting="Bienvenidos a La Tiendita" productsData={productData}/>
  )
}
