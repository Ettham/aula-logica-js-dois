const notasMatematica = {
    primeiroTrimestre :6,
    segundoTrimestre: 8,
    terceiroTrimestre:9
}

const{primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = notasMatematica

const mediadeMatematica = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

console.log(mediadeMatematica)

    if(mediadeMatematica >= 6){
        console.log("aprovado")
    } else if(mediadeMatematica >= 5){
        console.log("recuperação")
    } else{
        console.log("reprovado")
    }


// if(mediadeMatematica >= 7)