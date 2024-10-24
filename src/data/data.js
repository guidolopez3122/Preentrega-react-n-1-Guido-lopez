const products = [
    {
        id:"rapblack",
        nombre:"Camiseta Raptors",
        precio:40,
        stock:6,
        foto:"/img/camisetaraptors.jpeg",
        descripcion:"Camiseta raptors suplente",
        categoria:"camisetas"
    },
    {
        id:"campthun",
        nombre:"Campera Thunder",
        precio:100,
        stock:5,
        foto:"/img/camperathunder.jpeg",
        descripcion:"Campera Thunder frizada",
        categoria:"camperas"
    },
    {
        id:"chaqpirts",
        nombre:"Chaqueta Pirates",
        precio:60,
        stock:8,
        foto:"/img/chaquetaMLB.JPG",
        descripcion:"Chaqueta pirates titular 2024",
        categoria:"camisetas"
    },
    {
        id:"capbulls",
        nombre:"Gorra Bulls",
        precio:20,
        stock:7,
        foto:"/img/gorrabulls.JPG",
        descripcion:"Gorra Bulls ajustable Bugs Bunny",
        categoria:"gorras"
    },
    {
        id:"shokb",
        nombre:"Short Kobe",
        precio:30,
        stock:10,
        foto:"/img/shortkobe.jpeg",
        descripcion:"Short Kobe LA Lakers",
        categoria:"shorts"
    },
    {
        id:"conjvanc",
        nombre:"Conjunto Vancouver",
        precio:120,
        stock:2,
        foto:"/img/conjunto.JPG",
        descripcion:"Conjunto vancouver overzise",
        categoria:"conjuntos"
    },
    {
        id:"cam49ers",
        nombre:"Camiseta 49ers",
        precio:60,
        stock:3,
        foto:"/img/JBZE0976.JPG",
        descripcion:"Camiseta 49ers S. Francisco",
        categoria:"camisetas"
    },
    {
        id:"shorjd23",
        nombre:"Short Jordan 23",
        precio:50,
        stock:7,
        foto:"/img/WCNZ8603.JPG",
        descripcion:"Short Jordan titular",
        categoria:"shorts"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export {getProducts}