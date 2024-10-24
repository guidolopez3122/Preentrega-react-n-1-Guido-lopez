import Item from "./Item"
import "./itemlist.css"

const ItemList = ({products}) => {
  return (
    <div className="item-list">
        {
          products.map((product) =>(
            <Item product={product} key={product.id}/>
          ))
        }
    </div>
  )
}

export default ItemList