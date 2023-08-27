import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";


function CartProduct({ person }) {
    const cart = useContext(CartContext);

    return (
        <>
            <h3>{person.name}</h3>
            <p>{person.quantity} total</p>
            <p>${(person.quantity * person.application_price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(person.id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;