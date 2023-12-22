import { useParams } from 'react-router-dom'
import ItemListContainer from '../components'
import { UseGetProductByCategory } from '../hooks/UseGetProductsByCategory';

export const Category = () => {
    const {id} = useParams();
    const {productsData} = UseGetProductByCategory(id)
  return (
    <ItemListContainer greeting="Bienvenidos a La Tiendita" productsData={productsData}/>
  )
}
