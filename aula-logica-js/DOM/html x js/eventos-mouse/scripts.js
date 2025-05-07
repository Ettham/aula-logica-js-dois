const content = document.querySelector("#content")

const showButtom = document.querySelector("#show")

const hideButtom = document.querySelector("#hide")

const hideShowButtom = document.querySelector("#hideShowContent")

showButtom.addEventListener("click",()=>{
    content.classList.add("show")
    content.classList.remove("hide")
})

hideButtom.addEventListener("click",()=>{
    content.classList.add("hide")
    content.classList.remove("show")
})

hideShowButtom.addEventListener("click",()=>{
    content.classList.toggle("hide")
    content.classList.remove("show")
})