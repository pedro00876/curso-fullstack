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

/////////////////////////////////////////////////////////////////////
// ARRAY //

//Criando Array com construtor
const newArray = new Array()
console.log(newArray.length)

const available = new Array(10)
console.log(available.length)

//Criando e acessando um array
let fruits = ['Apple', 'Banana', 'Orange']
console.log(fruits.length)

// Acessa o item pelo indice
console.log(fruits[2])

// Acessa a lista dinamicamente
console.log(fruits[fruits.length - 1])

// Convertendo uma string para array
let fullname = 'Pedro Elias Chagas Silva'

// Cria um array com os nomes separandos pelo espaço
console.log(fullname.split(' '))

// Cria um array com as letras'
console.log(Array.from(fullname))

// Adicionando ou removendo um item do array
let usuario = []

// Adiciona um item ao final do array
usuario.push('Pedro')
usuario.push('Roni')
usuario.push('João')

// Adiciona um item ao inicio do array
usuario.unshift('Maria')

// Remove um item do inicio do array
usuario.shift()

// Remove um item do final do array
usuario.pop()

console.log(usuario)

// Usando o índice
let frutas = ['Maçã', 'Banana', 'Morango', 'Melancia']

// Encontra e retorna o indice do elemento no Array
let position = frutas.indexOf('Morango')
console.log(position)

// Remove um item pela posição do indice (1 é o número de items para remover)
frutas.splice(position, 1)
console.log(frutas)

// Quais elementos o array aceita
let myArray = [
  'Um texto',
  10,
  true,
  function () {
    console.log('Função dentro de um array')
  },
  {
    name: 'Pedro',
    email: 'pedro.chagas',
  },
]

// Verificando se existe conteudo no array
console.log(fruits.includes('Apple'))

//////////////////////////////////////////////////////////////////////////////////////////////
// ESTRUTURA DE REPETIÇÃO

// While: executa até que a condição seja VERDADEIRA
let exucute = true

while (exucute) {
  let response = window.prompt('Deseja continuar: 1 (SIM) ou 2 (NÃO)')

  if (response === 2) {
    exucute = false
  }
}

// Loop infinito
let valUe = true
while (valUe) {
  // console.log("Executando...")
}

/*
 DO WHILE: repete até que a condição especificada seja VERDADEIRAMENTE. No entanto, a instrução
será executada pelo menos uma vez antes da condição ser verificada.
 */

let valUE = 0
do {
  value++
  console.log(valUE)
} while (valUe < 10)

console.log('Segue o fluxo')

/*
FOR repete até que a condição especiicada seja FALSA.

 - Variável de controle
 - condição
 - incremento ou decremento de variavel de controle
*/

for (i = 0; i < 10; i++) {
  console.log(i)
}

// exemplo da tabuada
let number = 7

for (i = 0; i <= 10; i++) {
  console.log(`${number} X ${step} =  ${number * step}`)
}

// For... in executa iterações a partir de um objeto e percorre as propriedades
let person3 = {
  name: 'Pedro',
  surname: 'Elias',
  email: 'pedro@gmail.com',
}

for (let property in person3) {
  // Exibe o nome da propriedade
  console.log(property)

  // Exibe o valor da propriedade
  console.log(person3[property])
}

// For... of itera os valores de um objeto iteravel
let estudantes = ['Pedro', 'Elias', 'Chagas']

for (students of estudantes) {
  console.log(students)
}

// Break encerra a execução de repetição ou switch para seguir para instrução seguinte

/*
let cadastrar = 3

switch (option) {
  case 1:
    console.log('Cadastrar')
    break

  case 2:
    console.log('Atualizar')
    break
  case 3:
    console.log('Remover')
    break

  default:
    console.log('Opção invalida')
    break
}
*/

//Utilizando o break para finalizar a repetição

for (let i = 0; i < 10; i++) {
  if ((i = 5)) {
    break
  }
  console.log(i)
}

/*
Continue encerra (pula) a execução das instruções na iteração atual
e continua a execução do loo com a proxim aiteração
*/

for (i = 0; i < 10; i++) {
  if ((i = 5)) {
    continue
  }
  console.log(i)
}
