import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGetProductById } from "../hooks/UseGetProductById"
import ItemCount from "../components/ItemCount";
import { useParams } from "react-router-dom"
export const ItemDetailContainer = () => {
  const {id} = useParams()
  const {productData}  = useGetProductById("products", id);
  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
    <Link to={`/item/${productData.id}`}><Card.Img variant="top" src={productData.thumbnail} /></Link>
    <Card.Body>
        <Card.Title>{productData.Title}</Card.Title>
        <Card.Text>
            {productData.description}
        </Card.Text>
        <ItemCount productId={productData.id} />
    </Card.Body>
 </Card>
  )
}
