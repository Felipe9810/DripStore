import Register from "../pages/Register.jsx"
import Home from "../pages/Home.jsx"
import { BrowaserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"

function Rotas () {
    return(
        <>  
            <BrowaserRouter>
                <Routes>
                   <Route element={<Layout />}>   
                        <Route path="/" element={<Home />} />
                        <Route path= "cadastrar" element={<Register />} />
                        <Route path="Product-Description/:id" element={<ProductDescription />} />
                   </Route>
                <Route path="*" element={<Home />} />
                </Routes>
            </BrowaserRouter>
        </>
    )
}

export default Rotas