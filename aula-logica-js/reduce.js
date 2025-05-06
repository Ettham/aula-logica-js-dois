// reduce

// const numero = [2,5,7,10]

// const soma = numero.reduce((total,num) => total + num, 0)

// console.log(soma)

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

const total = produtos.reduce((soma,produto) => soma + produto.preco, 0)
console.log(total)