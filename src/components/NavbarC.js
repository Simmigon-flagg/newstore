import { NavLink, Link } from 'react-router-dom'
import {Button, Container, Modal} from 'react-bootstrap';
import { React, useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';

export const Navbar = () => {
   
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
        
        return (
            <header>
                <Link className="site-logo" to="/">VIVA LA JOVY LLC</Link>
                <nav>
                    <NavLink 
                        to="/host"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to="/about"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/vans"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Vans
                    </NavLink>
                    {/* <NavLink 
                        to="/ecommerce"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                Checkout
                    </NavLink> */}
                    <NavLink 
                        to="/ecommerce"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                Cart
                    </NavLink>
                </nav>
            </header>
        )
};
