// crie um programa que verifique o faturamento médio dos 3 trimestres de 2024 ,sendo 

//1 trimestre => 10.650

//2 trimestre => 20.000

//3 trimestre => 35.000

//se for maios que 25.000, o faturamento medio é o esperado. mas , se o faturamento for menor de 25.000, o faturamento médio esta abaixo do esperado 

//utilize um objeto para registrar os detalhes. Utilize desentruturação para facilitar o acesso aos elementos, e fazer os calculos. Por fim, use um condicional 

const pj ={
    primeiroTrimestretrimestre : 10650,
    segundoTrimestretrimestre : 20000,
    terceiroTrimestretrimestre : 35000
}

const{primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = pj

const caderno = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

    if(caderno >= 25000){
        console.log("e o esperado")
    } else{
        console.log("menos do esperado")
    }
