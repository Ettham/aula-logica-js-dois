// crie uma função que recebe um parâmrtro de nota e verifica em um condicional se a nota for maior que 7 , o aluno está aprovado, se não , o aluno esta reprovado 

function resultadosFinal(nota){
    if(nota >= 6){
        console.log("aprovado")
    } else if(nota >= 5){
        console.log("recuperação")
    } else{
        console.log("reprovado")
    }
}
resultadosFinal(7)