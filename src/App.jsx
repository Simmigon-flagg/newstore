import theme from "./theme";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CartProvider from "./CartContext";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { VanPage } from "./pages/Van/Van";
import { VanDetail } from "./components/pages/Vans/VanDetail";
import { HostLayout } from "./components/HostLayout";
import { Dashboard } from "./components/pages/Host/Dashboard";
import { Layout } from "./components/Layout";
import Checkout from "./components/pages/Checkout";
import Cancel from "./components/pages/Cancel";
import Success from "./components/pages/Success";
import Store from "./components/pages/Store";
import { RedirectPage } from "./components/RedirectPage";


const App = () => {

  return (
    <CartProvider>
      <Container>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Store />} />
              {/* We may not need this */}
              {/* <Route path='/ud23dtiwteurct72i3r9d5954d54d58r634drre5s4132es4s123rs4u1423s' element={<CSVtoJSONConverter />} /> */}
              <Route path="/react-template" element={<Store />} />
              <Route path="ecommerce" element={<Checkout />} />

              {/* <Route path="products" element={<ProductList />} /> */}
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path="about" element={<About />} />

              {/* <Route index element={<Home />} /> */}
              {/* <Route path="/react-template" element={<Home />} /> */}
              {/* <Route index path="about" element={<About />} /> */}
              <Route path="vans" element={<VanPage />} />
              <Route path="vans/:id" element={<VanDetail />} />
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
            <Route path="/success" element={<Success />} />
            <Route path="/redirect" element={<RedirectPage />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </ThemeProvider>
      </Container>
    </CartProvider>
  );
};

export default App;
