import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm"
import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })

  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: { ...cart },
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }

    try {
      const response = await validateForm(dataForm)
      if (response.status === "error") throw new Error(response.message)
      toast.success("Confirmando orden...")
      uploadOrder(order)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const uploadOrder = async (newOrder) => {
    const ordersRef = collection(db, "orders")
    try {
      const docRef = await addDoc(ordersRef, newOrder)
      setIdOrder(docRef.id)
      deleteCart()
    } catch (error) {
      console.error("Error al subir la orden:", error)
      toast.error("Hubo un problema al procesar la orden.")
    }
  }

  return (
    <div>
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div className="checkout-confirmation">
          <h2>¡Su compra se realizó correctamente!</h2>
          <p>No pierdas de vista tu pedido con el número de seguimiento: {idOrder}</p>
          <Link to="/" className="checkout-home-link">Volver a Home</Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
