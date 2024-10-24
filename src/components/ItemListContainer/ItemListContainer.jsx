import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"

const ItemListContainer = ({saludo}) => {

    const[products, setProducts] = useState([])
    const {idCategoria} = useParams()

    useEffect(()=> {

        getProducts()
        .then((data) =>{
           if(idCategoria){
            const filterProducts = data.filter((product)=> product.categoria === idCategoria)
            setProducts(filterProducts)
           }else{
            setProducts(data)
           }    
        }).catch((error) =>{
            console.error(error)
        })
        .finally(() =>{
            console.log("proceso finalizado con exito codigo 0")
        })
    },[idCategoria])

    return (
    <div className="item-list-container">
        <h1>{saludo}</h1>
        <ItemList products={products}/>
    </div>
        
    )
}
export default ItemListContainer