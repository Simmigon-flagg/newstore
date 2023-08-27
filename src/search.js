import React, { useState, useEffect } from 'react';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.REACT_APP_VIVALAJOVY_KEY_TEST_SECRET);

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const retrievedProduct = await stripe.products.retrieve('prod_OTWe06kKh2FzpK');
        setProduct(retrievedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h2>Product Details from Stripe</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.metadata.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
