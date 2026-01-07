/*
OBJETO
  - Uma coleção de dados e/ou funcionalidades;
  - podem ter propriedades e métodos;
*/

// Criando um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.
const user = {
  email: 'pedro@gmail.com',
  age: 19,
  name: {
    first_name: 'Pedro',
    surname: 'Elias',
  },

  adress: {
    street: 'Rua X',
    number: 260,
    city: 'São Paulo',
    postal_code: '12345-234',
  },
  message: () => {
    console.log('Oi, Pedro!!')
  },
}

// Acessando propriedades e métodos e usando a notação de ponto.
console.log(user.email)

// Acessando propriedade de objetos.
console.log(user.name.first_name)

// Executa o método do objeto.
user.message()

// Notação de colchetes
console.log(user['email'])
console.log(user['name']['first_name'])
user['message']()

// Acessando propriedade no contexto do objeto
const user1 = {
  name: 'Pedro',
  message: () => {
    console.log(`Olá, ${this.name}`)
  },
}

// Atualizando um objeto
const product = {
  name: 'teclado',
  price: '149.00',
}

// Acessando a propriedade do objeto
console.log(product.name)

// Atualiza o valor de uma propriedade.
console.log(product.price)
product.price = 90
console.log(product.price)

console.log(product.name)
product.name = 'Mouse'
console.log(product.name)

/*
OPTIONAL CHAINING (?.) - encadeamento opcional
Se a propriedade ou função chamada nullish (null or undefined), a expressão
retorna undefined em vez de gerar um erro

Útil ao explorar o conteúdo de um objeto quando não existe garantia de determinada
propriedade obrigatoria.
*/

const user2 = {
  id: 1,
  name: 'Pedro',
  /*
  adress: {
    street: 'Avenida Maria Pastora',
    city: 'Aracaju',
    number: 260,
    geo: {
      latitude: 47.808,
      longitude: 15.8983,
    },
  },
  */

  message: () => {
    console.log(`Olá, ${this.name}`)
  },
}

console.log(user?.adress?.city)

/*
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direto quando o seu operador
do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando
do lado esquerdo.
*/

let content = null
console.log(content ?? 'Conteúdo padrão')

const user3 = {
  name: 'Pedro',
  picture: undefined,
}

console.log(user.picture ?? 'default.png')

// Função construtura

function createProduct(name) {
  const product = {}

  product.name = name
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product1 = new createProduct('Teclado')
console.log(product1)
product1.details()

const product2 = new createProduct('Mouse')
console.log(product2)
product2.details()

// Exemplos de funções construtoras disponíveis no próprio JavaScript.
let myName = new String('Rodrigo')
console.log(myName)

let price = '40.6'.replace('.', ',')
console.log(price)

let date = new Date('2025-12-22')
console.log(date)

function Person(name) {
  this.name = name
  this.message = function () {
    console.log(`Óla, ${this.name}`)
  }
}

const person1 = new Person('Pedro')
console.log(person1.name)
person1.message()

// Texto maiúsculo e minúsculos
let message = 'Estou estudando os fundamentos do JS.'

console.log(message)

// Exibir em maiúsculo
console.log(message.toUpperCase())

// Exibir em minúsculo
console.log(message.toLowerCase())

// Comprimento de uma string
console.log(message.length)

let password = 12345

if (password.length < 6) {
  console.log('A senha deve conter no mínimo 6 digitos.')
}

// quantos digitos tem um número
let value = 12345
console.log(value.toString().length)

// Substituindo e fatiando um texto
// Substituindo
console.log(message.replace('JS', 'HTML'))

// Fatiando uma parte do texto (start, end)
console.log(message.slice(6, 30))

// Fatiando uma parte do texto de trás para frente
console.log(message.slice(-11))

let textWithSpace = '   Texto de exemplo para    '
console.log(textWithSpace.length)

// Remove espaços em branco no início e no final da string.
console.log(textWithSpace.trim().length)

//Completando string
const creditcar = '1234567812344928'
console.log(creditcar.length)

// Pega os 4 ultimos numeros
const lastDigits = creditcar.slice(-4)

// O padstart preenche a string do inicio
const maskedNumber = lastDigits.padStart(creditcar.length, 'X')

//Separando e unindo strings

let text = 'Estudar, aprender, praticar'

// Separando a String
let separate = text.split(',')
console.log(separate)

// Unir string
let joined = separate.join('-')

// encontrando o conteudo no texto
let messagGE = 'Estou estudando os fundamentos do JS'

// obtendo a posição da palavra
console.log(messagGE.indexOf('JS'))

// verifica se existe a palavra na string
console.log(message.includes('JS'))
