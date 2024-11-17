import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        id:"rapblack",
        nombre:"Camiseta Raptors",
        precio:40,
        stock:6,
        foto:["/img/camisetaraptors.jpeg", "/img/casaca-raptors-back.jpeg"],
        descripcion:"Camiseta raptors suplente",
        categoria:"camisetas"
    },
    {
        id:"campthun",
        nombre:"Campera Thunder",
        precio:100,
        stock:5,
        foto:["/img/camperathunder.jpeg", "/img/campera-thunder-open.jpeg","/img/campera-thunder-back.jpeg"],
        descripcion:"Campera Thunder frizada",
        categoria:"camperas"
    },
    {
        id:"chaqpirts",
        nombre:"Chaqueta Pirates",
        precio:60,
        stock:8,
        foto:["/img/chaquetaMLB.JPG", "/img/casaca-pirates-back.JPG"],
        descripcion:"Chaqueta pirates titular 2024",
        categoria:"camisetas"
    },
    {
        id:"capbulls",
        nombre:"Gorra Bulls",
        precio:20,
        stock:7,
        foto:["/img/gorrabulls.JPG", "/img/gorrabulls2.JPG","/img/gorrabulls3.JPG","/img/gorrabulls4.JPG"],
        descripcion:"Gorra Bulls ajustable Bugs Bunny",
        categoria:"gorras"
    },
    {
        id:"shokb",
        nombre:"Short Kobe",
        precio:30,
        stock:10,
        foto:["/img/shortkobe.jpeg", "/img/short-kobe-back.jpeg"],
        descripcion:"Short Kobe LA Lakers",
        categoria:"shorts"
    },
    {
        id:"conjvanc",
        nombre:"Conjunto Vancouver",
        precio:120,
        stock:2,
        foto:["/img/conjunto.JPG", "/img/buzoconjunto.JPG", "/img/pantalonconjunto.JPG"],
        descripcion:"Conjunto vancouver overzise",
        categoria:"conjuntos"
    },
    {
        id:"cam49ers",
        nombre:"Camiseta 49ers",
        precio:60,
        stock:3,
        foto:["/img/JBZE0976.JPG", "/img/casaca-49ers-back.JPG"],
        descripcion:"Camiseta 49ers S. Francisco",
        categoria:"camisetas"
    },
    {
        id:"shorjd23",
        nombre:"Short Jordan 23",
        precio:50,
        stock:7,
        foto:["/img/WCNZ8603.JPG", "/img/shortjordan-back.JPG"],
        descripcion:"Short Jordan titular",
        categoria:"shorts"
    }
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map (({id, ...dataProduct})=>{
        addDoc(productsRef, dataProduct)
    })
    console.log("Productos subidos")
    return
}

seedProducts()