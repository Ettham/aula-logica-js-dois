let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementoValor =document.querySelector("#BtnIncrementar")

btnIncrementoValor.addEventListener("click",()=>{
    contador++
    resultado.textContent = `contador:${contador}`
})