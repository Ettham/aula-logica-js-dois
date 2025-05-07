// seleção por ID

const content = document.getElementById("content")

content.innerHTML = `<p>Paragrafo de texto</p>` // adiciona elemento de html dinamicamente

content.style.backgroundColor="#f00"
content.style.fontSize="30px"

// selação de classe

const classText = document.getElementsByClassName("text")

console.log("classText",classText)

// classText.style.color="#f00"

for(text of classText){
    text.style.color = "#f00"
}

// seleção por tag

// const tittles = document.getElementsByTagName("h2")

console.log("tittle",tittles)

for(tittle of tittles){
    tittle.style.fontSize="40px"
}
// tittles.style.fontSize="40px"

//seleção por query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = "um novo elemento"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend",
    `
    <div>
        <p>Outro elemento de parágrafo</p>
    </div>    
    `
)

document.body.insertBefore(newElement,elementFeature)

// seleção por query selectorALL

const links = document.querySelectorAll("#links a")

console.log("links",links)

for(link of links){
    link.classLInt.add("feature-links")
    link.target="_black"
}