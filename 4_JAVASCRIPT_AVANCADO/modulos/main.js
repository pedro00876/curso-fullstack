import { sum as s, multiply as m } from './calc.js'
import { Calc } from './calc.js'
import sum1 from './calc.js'

const calc = new Calc()

console.log('4 + 6 = ', calc.sum(4, 6))
console.log('4 * 6 = ', m(4, 6))

// setTimout() executa uma função após um intervalo de tempo especificado
setTimeout(() => {
  console.log('Olá, tudo bem?')
}, 1000) // tempo em milessegundos

// setInterval() executa uma função após um intervalo de tempo especificado

let value = 10
const interval = setInterval(() => {
  console.log(value)
  value--

  if (value === 0) {
    console.log('Feliz ano novo!!')

    //interrompe o intervalo de execução
    clearInterval(interval)
  }
}, 1000)
