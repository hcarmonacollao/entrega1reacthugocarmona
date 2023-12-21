import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ItemListContainer = ({greeting, productsData}) =>{
    return(
        <div style={{fontWeight: 'bold' , fontSize: '1rem' , width: '100vw' , height:'50vh' , textAlign: 'center'}}>
            {greeting}
            <div>
                {
                    productsData.map(products =>{
                        return(
                            <Card key={products.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
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