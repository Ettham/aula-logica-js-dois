const inputForm = document.querySelector("#busca")

const botaoBusca =document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown",(event)=>{
    // console.log(event.key)
    // resultadoDiv.textContent = event.key
    if(event.key === "Entrer"){
        botaoBusca.click()
    }
})

inputForm.addEventListener("focus",()=>{
    inputForm.style.backgroundColor = "#ff0"
})

inputForm.addEventListener("blur",()=>{
    inputForm.style.backgroundColor = ""
})

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Você buscou por ${valorBusca}`
    } else{
        resultadoDiv.textContent = "por favor, inssira algo na busca"
    }
}

botaoBusca.addEventListener("click",()=>{
    searchResult()
})