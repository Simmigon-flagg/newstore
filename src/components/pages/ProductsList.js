import React, { useState, useEffect } from 'react';
import Stripe from 'stripe';
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';

const stripe = new Stripe(process.env.REACT_APP_VIVALAJOVY_KEY_TEST_SECRET);

const ProductList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const response = await stripe.products.list();

                const productsWithPrices = await Promise.all(

                    response.data.map(async (product) => {

                        const prices = await stripe.prices.list({
                            product: product.id,
                            limit: 1,
                        });

                        const price = prices.data[0]?.unit_amount/100;
                        return { ...product, price };
                    })
                );
                setItems(productsWithPrices);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (

        <>
            <h2>Shirts & Tops</h2>
            <Row xs={1} md={3} className="g-4">

                {items.map((product) => {
  
                    return (
                        <Col align="center" key={product.id}>
                            <ProductCard product={product} />
                        </Col>
                    )

                })}
            </Row>
        </>
    );
};

export default ProductList;

