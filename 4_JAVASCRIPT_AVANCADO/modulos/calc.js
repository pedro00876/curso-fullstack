// Exportando classe
export class Calc {
  sum(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b
  }
}

// Exportação nomeada
export function sum(a, b) {
  return a + b
}

export function multiply(a, b) {
  return a * b
}

// Exportação padrão
export default function sum1(a, b) {
  return a + b
}
