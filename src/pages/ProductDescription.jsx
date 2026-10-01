import ProductSection from "../assets/components/ProductSection.jsx";
import { useParams } from "react-router-dom";

function ProductDescription() {
    const { id }  = useParams();
    const encontrados = produtos.find( item => item.id == id)
    return(
        <>
            {termoBusca}
            <ProductSection />
        </>
    )
}

export default ProductDescription