import ProductSection from "../assets/components/ProductSection"
import {useParams} from "react-router-dom"

function productList(){
    const {termoBusca} = useParams();
    return(
        <>
            <ProductSection />
        </>
    )
}

export default productList