let contador = 0

const resultado = document.querySelector("#resultado") 

const btnIncrementoValor =document.querySelector("#BtnIncrementar")

btnIncrementoValor.addEventListener("click",()=>{
    contador++
    resultado.textContent = `contador:${contador}`
})

const BtnDESMInuirValor = document.querySelector("#BtnDESMInuir")

BtnDESMInuirValor.addEventListener("click", ()=>{
    if(contador>0){
    contador--
    resultado.textContent = `contador:${contador}`
    }
})