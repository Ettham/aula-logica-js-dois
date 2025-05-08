const btAdd = document.querySelector("#addItem")

function adicionaritem(){
    const input = document.querySelector("#itemInput")
    const item = input.value.trim()

    if(item !==""){
        const li = document.createElement("li")
        li.textContent = item
        document.querySelector("#lista").appendChild(li)
        input.value = ""
    }
}

btAddItem.addEventListerner("click",()=>{
    adicionaritem()
})

