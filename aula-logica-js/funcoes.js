// // function saudacao(){
// //     console.log("bom dia!")
// // }

// //arrow function com parãmetros

// const saudacao = (turno,nome="joão")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao("bom dia","ettham")
// saudacao("bom noite")

// const soma = (x,y)=>{
//     return x,y
// }

const soma = (x,y,)=> x+y
const subitracao = (x,y)=> x-y
const multiplicacao = (x,y)=> x*y
const divisao = (x,y)=> x/y

// const resultadoDaSoma = soma(5,8)

// console.log(resultadoDaSoma)

//função retornando o calculo de duas funçoes

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("resultado do calculo",resultadoDoCalculo)

// retornao o valor de varias funções em um return dentro de um objeto

// const calculo = (x,y)=>{
//     return{
//         soma : soma(x,y),
//         subitracao : subitracao(x,y),
//         multiplicacao : multiplicacao(x,y),
//         divisao : divisao(x,y)
//     }
// }

// const resultadoDoCalculo = calculo(20,10)

// console.log("resultado final",resultadoDoCalculo)

//escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function ChamaEscopo(){
    const escopoLocal = "Espoco Local"
    console.log("escopo Local",escopoGlobal)
}

console.log(escopoLocal)

ChamaEscopo()