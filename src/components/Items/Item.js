import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';


function Item({e}){        
    return(
        <Link to={"/item/"+e.id} className='navbar-brand '>   
            <Card  style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush d-flex flex-column">
                    <ListGroupItem>$ {e.price}</ListGroupItem>
                    <ListGroupItem className='botoncarrito mt-auto'>Agregar al carrito</ListGroupItem>                                    
                </ListGroup>                
            </Card>
        </Link>        
    );
}

export default Item;