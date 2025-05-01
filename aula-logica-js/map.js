const numero = [1,2,3,4,5]
const valoresDobrados = numero.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numero)

const usuarios= [
    {
        nome : "joão",
        idade : 52
    },
    {
        nome : "maria",
        idade : 40
    },
    {
        nome : "joana",
        idade : 30
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("nomes de usuario",nomesUsuario)