import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { UseGetProductById } from "../hooks/UseGetProductById"
import { useParams } from "react-router-dom"
export const ItemDetailContainer = () => {
  const {productId} = useParams()
  const {productData}  = UseGetProductById(productId);
  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
    <Link to={`/item/${productData.id}`}><Card.Img variant="top" src={productData.thumbnail} /></Link>
    <Card.Body>
        <Card.Title>{productData.Title}</Card.Title>
        <Card.Text>
            {productData.description}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
    </Card.Body>
 </Card>
  )
}
