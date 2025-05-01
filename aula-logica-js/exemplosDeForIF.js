// let num = 10
// // num = num + 5
// num += 5

//imprime multiplos de 5 de 0 a 100, excluindo o 0

// for(let i =0; i <= 100; i += 5){
//     if(i>0){
//         console.log(i)
//     }
// }

//some se os dois valores for maior que 10

// function somaSeMaiorQue10(a,b){
//     if(a>10 && b>10){
//         return a + b;
//     } else{
//         return "numeros insuficientes"
//     }
// }

// console.log(somaSeMaiorQue10(8,20))

//função para calcular média 

// function vericaMedia(notas){
//     let soma = 0;
//     for(let i = 0 ; i < notas.length ; i++){
//         soma += notas[i]
//     }
//     const media = soma / notas.length
//     return media >= 7 ? "Aprovado" : "Reprovado"
// }

// console.log(vericaMedia([8,8,8,8]))


// // 5,6,7,5


// let vogais = ["a","e","i","o","u"]
// let verificaVogaLEmarray = vogais.includes("t")

// console.log(verificaVogaLEmarray)

// let palavra = "texto"
// let palavraConvertidaemCaixa = palavra.toLowerCase()

// console.log(palavraConvertidaemCaixa)

// função que conta a cuantidade de vogais dentro de uma palavra

// function contarvogais(palavra){
//     let vogais = ["a","e","i","o","u"]
//     let  contador = 0

//     for(const letra of palavra.toLowerCase()){
//         if(vogais.includes(letra)){
//             contador++
//         }
//     }
//     return contador
// }

// console.log(contarvogais("Javascript"))

function verificarNumero(n){
    if(n>=10 && n<=100 && n % 5 ===0){
        return "Numero valido"
    }else{
        return "Numero invalido"
    }
}

console.log(verificarNumero(75))