import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProducto } = useParams()

    const getProductById = () => {
        const docRef = doc(db, "products", idProducto)
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data() }
                setProduct(productDb)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching product:", error)
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getProductById()
    }, [idProducto])

    return (
        <>
            {
                loading ? (<div>Cargando Productos....</div>) : <ItemDetail product={product} />
            }
        </>
    )
}

export default ItemDetailContainer
