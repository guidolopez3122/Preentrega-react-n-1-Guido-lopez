import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({product}) => {

  const [showItemCount, setShowItemCount] = useState(true)

  const {addProductInCart} = useContext(CartContext)

const addProduct = (count) => {
    const productCard = {...product, quantity: count}

    addProductInCart(productCard)
    setShowItemCount(false)
}

const [currentImage, setCurrentImage] = useState(product.foto[0])

const images = product.foto.filter((foto)=> foto !== currentImage )

  return (
        <div className="item-detail">
          <div className="images-detail-container">
            <div className="other-images">
              {
                images.map((image)=>(
                  <img src={image} key={image} onClick={()=> setCurrentImage(image)} />
                ))
              }
            </div>
            <div className="main-image">
                <img src={currentImage} alt="imagen-principal" />
            </div>
          </div>

              <div className="text-detail-container">
                <h2 className="product-title">{product.nombre}</h2>
                <h2 className="product-info">{product.descripcion}</h2>
                <p className="product-price">Precio: ${product.precio}</p>
                {
                  showItemCount === true ? (<ItemCount stock={product.stock} addProduct={addProduct}/>
                  ) : (
                  <Link to="/cart">Finalizar compra</Link>)
                }
              </div>
        </div>
  )
}

export default ItemDetail
