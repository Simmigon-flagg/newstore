import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import React from 'react';

const ProductCard = ({ product }) => { // props.product is the product we are selling

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {product.images[0] ? <Card.Title><img src={product.images[0]} alt={`${product.name}`} />{ }
                </Card.Title> : <Card.Title> <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />{ }</Card.Title>}
                <Card.Text>${(product.price.toFixed(2))}</Card.Text>            
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id, product)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id, product)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;