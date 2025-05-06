const numero = [1,2,3,4,5]

const pares = numero.filter(num => num % 2 === 0)

// console.log("numero pares" , pares)

const produtos = [
    {
        nome:"notebook",
        preco:3000
    },
    {
        nome:"mouse",
        preco:50
    },
    {
        nome:"mouse 2",
        preco:100
    },
    {
        nome:"monitor",
        preco:1200
    },
    {
        nome:"teclado",
        preco:120
    }
]

// const produtoMaiorQueMil = produtos.filter(produto => produto.preco > 1000)
const mouseProdudotos = produtos.filter(produto => produto.nome.includes("mouse"))

console.log(mouseProdudotos)