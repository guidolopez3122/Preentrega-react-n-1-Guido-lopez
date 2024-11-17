import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2 className="cart-empty-title">¡No agregaste productos al carrito!</h2>
        <Link to="/" className="cart-empty-link">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Productos en el carrito</h2>
      <div className="cart-products">
        {cart.map((productCard) => (
          <div className="cart-product-card" key={productCard.id}>
            <img className="cart-product-image" src={productCard.foto[0]} alt={productCard.nombre} />
            <div className="cart-product-info">
              <h1 className="cart-product-name">{productCard.nombre}</h1>
              <p className="cart-product-description">{productCard.descripcion}</p>
              <p className="cart-product-price">Precio: ${productCard.precio}</p>
              <p className="cart-product-quantity">Cantidad: {productCard.quantity}</p>
              <p className="cart-product-subtotal">
                Subtotal: ${productCard.quantity * productCard.precio}
              </p>
            </div>
            <button 
              className="cart-product-delete" 
              onClick={() => deleteProductById(productCard.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3 className="cart-total-price">Precio final: ${totalPrice()}</h3>
        <div className="cart-actions">
          <button className="cart-clear" onClick={deleteCart}>Vaciar carrito</button>
          <Link to="/checkout" className="cart-checkout-link">Finalizar compra</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
