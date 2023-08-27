
import React from 'react';

import { Outlet } from 'react-router-dom'
// import { NavbarSale } from '../components/NavbarSale'
import Navbar from '../components/Navbar'
import { Footer } from './Footer'

export const Layout = () => {

  return (
    <div>
      <div className="site-wrapper">
        {/* <NavbarSale /> */}
        <Navbar />
        <main>
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
};

