/* O strict mode (modo estrito): ativando esse modo, os erros que eram
silencioso passa a gerar exceções no JavaScript */

function showMessage() {
  'use strict'

  const personName = 'Pedro Elias'

  console.log(`Olá, ${personName}`)
}

showMessage()

class Student {
  'use strict'
  get point() {
    return 7
  }
}

let student = new Student()
// studen.point = 10
console.log(student.point)

////////////////////////////////////////////////////////////////////////////////////////////
//Desestruturação de array

const data = ['Pedro ELias', 'pedro@gmail.com']

//Desestruturando o array
const [username, email] = data

const fruit = ['banana', 'maçã', 'laranja']

// desestruturar somente o primeiro
const [banana] = fruit

// ignorando o primeiro na desestruturação
const [_, maçã] = fruit

// ignorando o primeiro na desestruturação
const [, , laranja] = fruit

/////////////////////////////////////////////////////////////////////////////////////////
//Desestruturação de objetos
const product = {
  description: 'Teclado',
  price: 150,
}

const { description, price } = product

console.log('Descrição: ', description)
console.log('Price: ', price)

function newProduct({ description, price }) {
  console.log('### NOVO PODUTO ###')
  console.log('Descrição: ', description)
  console.log('Price: R$', price)
}

newProduct({
  description: 'Mouse',
  price: '132',
})

///////////////////////////////////////////////////////////////////////////////////////////
//Rest Params (...) permmite representar um número indefinido de argumentos com um array

function value(a, ...args) {
  //console.log(a)
  console.log(...args)
}

value(2)

/////////////////////////////////////////////////////////////////////////////////////////
/*Spread (espalha) permite que um objeto iterável, como uma expressão de array o
uma string seja expandidopara ser usado onde zero ou mais argumentos
*/

const numbers = [1, 2, 3]

console.log(...numbers)

const Data = [
  {
    name: 'Pedro',
    email: 'pedro.chagas@gmail.com',
    avatar: 'p.png',
  },
  {
    name: 'João',
    email: 'João.chagas@gmail.com',
    avatar: 'j.png',
  },
]

console.log(...data)
