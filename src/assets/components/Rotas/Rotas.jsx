import Register from "../../../pages/Register.jsx";
import Home from "../../../pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout.js";
import ProductDescription from "../../../pages/ProductDescription.jsx";
import { useBusca } from "../../../context/BuscaContext.jsx";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="cadastrar" element={<Register />} />
            <Route path="product-list/:termoBusca" element={<ProductList />} />
            <Route
              path="Product-Description/:id"
              element={<ProductDescription />}
            />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
