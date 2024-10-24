const ItemDetail = ({product}) => {
  return (
    <div style={{display:"flex"}}>
      <img src={product.foto} width={400} alt="" />
      <div>
        <h2>{product.nombre}</h2>
        <p>precio: ${product.precio}</p>
        <p>{product.descripcion}</p>
      </div>
    </div>
  )
}

export default ItemDetail
