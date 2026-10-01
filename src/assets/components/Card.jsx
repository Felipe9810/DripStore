//desconto 20%
// 0.2

function Card({desconto, src, alt, tipo, produto, genero, preço, id}) {
  return (
    <>
     <link to={'product-description/${id}'} /> 
      <div clasName="flex flex-col w-48">
        {desconto && (
          <span className= "tag">{desconto * 100}% OFF</span>
        )}
        <img src={src} alt={alt} />
        <span className="tipo">{tipo}</span>
        <span className=" produto-genero"> 
          {produto} - {genero}
        </span>
        <span clasName="preço">{""}{preço}</span> 
        {desconto && (<span className="preço-desconto">{preço - (preço * desconto)}</span>)}
        
      </div>
    </>
   )
}

export default Card
