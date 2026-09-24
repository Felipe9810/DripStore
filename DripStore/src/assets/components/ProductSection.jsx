import Card from "./Card.jsx";
import img from "../assets/tenis.svg";
import produtos from "../../utilities/product.js";

function ProductSection() {
  const listaCards = [];
  for (let i = 0; i < produtos.length; i++) {
    const item = produtos[i];
    listaCards.push(<Card key={item.id} desconto={item.desconto} src={img} alt={item.alt} tipo={item.tipo} produto={item.produto} genero={item.genero} preco={item.preco} id={item.id} />,);
  }
      

  return ( 
      <>
       
         {listaCards}
         
      </>
  
     )
}

export default ProductSection;
