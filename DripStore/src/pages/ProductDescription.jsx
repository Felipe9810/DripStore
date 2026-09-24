import Card from "../assets/components/Card.jsx";
import img from "../assets/images/tenis1.png"
import produtos from "../utilities/product.js";
import { useParams } from "react-router-dom";

function ProductDescription() {
    const { id }  = useParams();
    const encontrados = produtos.find( item => item.id == id)
    return(
        <>
            <Card  desconto={encontrado.desconto} src={img} alt={encontrado.alt} tipo={encontrado.tipo} produto={encontrado.produto} genero={encontrado.genero} preco={encontrado.preco} id={encontrado.id} /> 
        </>
    )
}

export default ProductDescription