import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const ItemListContainer = ({greeting, productsData}) =>{
    return(
        <div style={{fontWeight: 'bold' , fontSize: '1rem' , width: '100vw' , height:'50vh' , textAlign: 'center'}}>
            {greeting}
            <div style={{width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>
                {
                    productsData.map(products =>{
                        return(
                            <Card key={products.id} style={{ width: '18rem' }}>
                                <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
                                <Card.Body>
                                    <Card.Title>{products.Title}</Card.Title>
                                    <Card.Text>
                                        {products.description}
                                    </Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                             </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ItemListContainer;