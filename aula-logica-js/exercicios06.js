//crie um array de objetos em que cada objeto é um produto, tendo como chave (nome, preco, descricao).crie pelo menos 3 produtos

// crie uma variavel que ira armazenar o arry com os nomes dos produtos

// crie uma segunda variavel que ira  armazenar o array com os preços dos produtos

// use o laço for ou for of para exibir cada item do array da variavel de nomes no console

const produtos= [
    {
        nome : "arroz",
        preco : 6,
        descricao: "barato",
    },
    {
        nome : "macaarao",
        preco : 4,
        descricao: "em oferta",
    },
    {
        nome : "farinha",
        preco : 10,
        descricao: "pra cozinhar",
    }
]

const nomesDosProdutos = produtos.map(produto => produto.nome)
const ValorDoPreco = produtos.map(produto => produto.preco)

console.log("nomes dos prudutos",nomesDosProdutos)
console.log("preco dos prudutos",ValorDoPreco)

for(nome of nomesDosProdutos){
    console.log(nome)
}