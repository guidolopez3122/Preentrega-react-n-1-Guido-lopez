import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    const getProducts = () => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => ({
                    id: productDb.id,
                    ...productDb.data()
                }))
                setProducts(productsDb)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching products:", error)
                setLoading(false)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryCategories = query(productsRef, where("categoria", "==", idCategoria))
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => ({
                    id: productDb.id,
                    ...productDb.data()
                }))
                setProducts(productsDb)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching products by category:", error)
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        if (idCategoria) {
            getProductsByCategory()
        } else {
            getProducts()
        }
    }, [idCategoria])

    return (
        <div className="item-list-container">
            <h1>{saludo}</h1>
            {loading ? <div>Cargando...</div> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer