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

/////////////////////////////////////////////////////////////////////////////////////////

/*
 O método map() chama a função callback por parametro para cada elemento do array
original, em ordem, e constroi um novo array com base nos retornos de cada chamada.
e no final, devolve o novo array.
*/

const products = ['teclado', 'mouse', 'monitor']

product.map(item => {
  console.log(item)
})

const formated = products.map(product => {
  return product.toUpperCase()
})

/*
o método filter() cria um novo array com todos os elementos que passaram
na condição
*/
const words = ['Javascript', 'Web', 'CSS', 'html']

const result = words.filter(word => {
  if (word.length >= 3) {
    console.log(result)
  }
})

/*
O método findIndex() retorna no array do primeiro0 elemento que satisfazer a condição.
Caso contrario, retorna -1, indicando que nenhum elemento passou no teste
*/

const values = [1, 2, 4, 5, 6]

const index = values.findIndex(value => {
  if (value > 4) {
    console.log(value)
  }
})

console.log(index)

/*
O metodo find() retorna o valor do primeiro  elemento do array
que satisfazer a condição. Caso contrario, undefined é retornado
*/

const valores = [3, 5, 6, 61]

const found = valores.find(value => value > 10)

/*
método every() testa se todos os elementos do array passam na condição
e retorna um valor boolean
*/

const ages = [10, 19, 21, 39]

const results = ages.every(age => age >= 18)
console.log(results)

/*
O método some() testa se ao menos um dos elementos no array
passa na condição e retorna um valor true ou false
*/

const idades = [10, 9, 20, 19, 21]

const idadeResultado = idades.some(idade => idade >= 18)
console.log(idadeResultado)

/*
O método reduce é utilizado para reduzir um arrya a um unico valor

Parâmetros:
 - Array original (values)
 - Acumulador (accumulator)
 - Valor da iteração (currentValue)
 - Valor inicial (0)
 - Index (index da iteração atual - opcional)
 */
const valoreS = [1, 2, 3, 4, 5]

const sum = valoreS.reduce((accumulator, currentValue, index) => {
  console.log('Acumulador', accumulator)
  console.log('CURRENT VALUE', currentValue)
  console.log('index', index)

  console.log(accumulator + currentValue)
  console.log('###############')

  return accumulator + currentValue
}, 0)

///////////////////////////////////////////////////////////////////////////////////////////////////
//Imutabilidade

const adress1 = {
  street: 'Av. Maria Pastora',
  number: 260,
}

// Isso não é uma cópia, é uma referência
// const adress2 = adress1
// adress2.number = 20

// Aqui estamos criando um novo objeto  utilizando as propriedades e valores de adress1.
const adress2 = { ...adress1 }
adress2.number = 394

console.log(adress1, adress2)

//Exemplo com Array
const list1 = ['Banana', 'Maçã', 'laranja']
const list2 = { ...list1 }
list2.push('Melancia')

console.log(list1, list2)

//Shallow copy (cópia superficial): não pega o s itens alinhados.
const htmlCourse = {
  course: 'HTML',
  studentes: [{ name: 'Pedro', email: 'pedro.elias@gmail.com' }],
}

/*
const jsCourse = {
  ...htmlCourse,
  course: 'JavaScript',
}
*/

// Vai modificar o htmlCourse também students é uma referencia e não uma cópia.
//jsCourse.push([{name: 'João', email: 'joao.chagas@gmail.com'}])

// Deep Copy (cópia profunda)
const jsCourse = {
  ...htmlCourse,
  course: 'JavaScript',
  studentes: [...htmlCourse.studentes],
}

jsCourse.studentes.push({ nome: 'João', email: 'joao@gmail.com' })

console.log(htmlCourse, jsCourse)

//Shallow freezing
const book = {
  title: 'Objetos imutaveis',
  category: 'javascript',
  author: {
    name: 'Pedro',
    email: 'pedro.chagas@gmail.com',
  },
}

//O js em si não impõe restrições à modificações dos objetos.
//book.category = 'HTML'

//Congela o objeto e impede amodificação.
Object.freeze(book)
book.category = 'CSS' // Não modifica

// O object não impde modificações profundas em objetos alinhados
book.author.name = 'João'

console.log(book)

// Deep freeze
function deepFreeze(object) {
  //Obtém um array com todas as propriedades do objeto
  const props = Reflect.ownKeys(object)

  //Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    //obtem o valor associado a propriedade atual
    const value = object[prop]

    //Verifica se o valor é um objeto oou uma função
    if ((value && typeof value === 'object') || typeof value === 'function') {
      deepFreeze(value)
    }
  }

  //Retrona objeto imutavel
  return Object.freeze(object)
}

deepFreeze(book)

//Manipulando dados imutaveis

const updatedBook = {
  ...book,
  title: 'Criando um front-end moderno',
  category: 'html',
}

//Original intacto
console.log(book)

//Modificado
console.log(updatedBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades.

const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)

// ////
