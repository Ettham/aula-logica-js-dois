//crie uma variavel que seja um array de odjeti que temha os seguientes pares :chave de valor 

//nome da vari´vel => users

//valores => um objeto com os valores login, password, curos, sendocursos um array com dois valores

//renderizar no console a seguinte frase com o primairo user so array 'meu nome é ${logim}, minha senha é ${password} e faço os cursos x e y

const nome = "ettham"

const sobrenome = "dlessandro"

const users =[
    {
        login:"fredy",
        password:"1234567890",
        cursos:["games","web"]
    }
]

console.log(`meu nome é ${users[0].login} minha senha é ${users[0].password} meus cursos ${users[0].cursos}`)