

import { Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { loadStripe } from "@stripe/stripe-js";

function NavbarComponent() {

    let stripePromise;

    const getStripe = async () => {

        if (!stripePromise) {
            stripePromise = loadStripe(process.env.REACT_APP_VIVALAJOVY_KEY_TEST_KEY);
        }

        return stripePromise;
    };
    const [stripeError, setStripeError] = useState(null);
    // We may not need the loading state because stipe may already do this.
    // const [setLoading] = useState(false);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const redirectToCheckout = async () => {
        
        const checkoutOptions = {

            lineItems: cart.items.map(({ price, quantity }) => ({
                price,
                quantity
            })),
            mode: "payment",
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`, // Point to the redirect page
        };

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
   
        if (error) setStripeError(error.message);
        
    };

    if (stripeError) alert(stripeError);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Link to='/' className='link-logo'
                >
                    VIVA LA JOVY
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <header>
                        {/* <Link className="site-logo" to="/">VIVA LA JOVY LLC</Link> */}
                        <nav>
                            <NavLink
                                to="/host"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Host
                            </NavLink>
                            <NavLink
                                to="/about"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/vans"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Vans
                            </NavLink>
                        </nav>
                    </header>
                    <Button onClick={handleShow} style={{ backgroundColor: "green" }}><FaShoppingCart /> ({productsCount} Items)</Button>
                </Navbar.Collapse>

            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>

                            {cart.items.map((currentProduct) => (
                                <CartProduct key={currentProduct.id} person={currentProduct} ></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={redirectToCheckout}>
                                Checkout
                          
                            </Button>
                            
                        </>
                        :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body >
            </Modal >
        </>
    )
}

export default NavbarComponent;