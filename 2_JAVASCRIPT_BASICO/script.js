// 1 - var
// Declarando a variavel
var user = 'Pedro'

// Substituindo o valor de var
user = 'Leticia'

//////////////////////////////////////////////////////////////////////////////

// 2 - Case Sensitive

/*
  Quando  uma linguagem de programação é cas-seneitive significa
  que ela é sensível a letras maiúsculas e minúsculas.

  Por exemplo: "Rodrigo" é considerado deiferente de "rodrigo".
*/

var product = 'Teclado mecânico'
console.log(product)

var Product = 'Mouse gamer'
console.log(Product)

//////////////////////////////////////////////////////////////////////////////

// 3 - let
// Declarando variável

let user = 'Pedrinho'

// Substituindo o valor de let

user = 'Pedro'

//////////////////////////////////////////////////////////////////////////////

// 4 - const
// Declarando variável constante (não é possivel alterar o valor dela)

const user = 'Pedro'

//////////////////////////////////////////////////////////////////////////////

// 5 - nomes para variaveis
//case-sensitive
const userName = 'Pedro'
const username = 'Elias'

// RECOMENDAÇÕES camelCase
let productName = 'Ventilador'

//////////////////////////////////////////////////////////////////////////////

// 6 - Tipo de dados
// String
let Name = 'Pedro'
console.log(typeof Name)

// template literals

let nameUser = 'Pedro  Elias'
let email = 'pedro@gmail.com'

// passar mais de um parâmetro
console.log(nameUser, email, 'teste')

let message = 'Olá, ' + nameUser + ' ! Você logou com o e-mail ' + email
console.log(message)

// template literal!!!

console.log(`Olá, ${nameUser}. Você logou com o e-mail ${email}`)

// Number
console.log(typeof 5)

// boolean
let isLoading = true
console.log(typeof isLoading)
