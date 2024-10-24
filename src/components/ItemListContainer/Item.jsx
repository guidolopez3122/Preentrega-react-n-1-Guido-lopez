import { Link } from "react-router-dom"
import "./item.css"

const Item = ({product}) => {
    return (
      <Link to={"/detalle/" + product.id} className="item-card">
      <h2>{product.nombre}</h2>
      <img src={product.foto} alt="imagen-producto" />
      <p>$ {product.precio}</p>
      <p>{product.descripcion}</p>
      </Link>
    )
  }
  
  export default Item