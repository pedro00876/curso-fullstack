// 1. Crie três variáveis: nome, idade e altura. Imprima todas no console.
const nome = 'Pedro'
const idade = 19
const altura = 1.7

console.log(nome + idade + altura)

// 2. Declare uma variável com seu nome e verifique o tipo dela usando typeof.
const myName = 'Pedro Elias'
console.log(typeof myName)

// 3. Crie duas variáveis numéricas e imprima a soma, subtração, multiplicação e divisão.
const num1 = 10
const num2 = 10

console.log(`A soma dos números é igual a: ${num1 + num2}`)
console.log(`A subtração dos números é igual a: ${num1 - num2}`)
console.log(`A multiplicação dos números é igual a: ${num1 * num2}`)
console.log(`A divisão dos números é igual a: ${num1 / num2}`)

// 4. Converta uma string "123" para número e some com 10.
let numString = '123'
console.log(Number(numString) + 10)

// 5. Crie uma variável booleana que indica se você está estudando JS agora.
let estudoJS = true

console.log(estudoJS)

// 6. Crie duas variáveis e mostre no console quem é maior usando operadores de comparação.
let numComparacao1 = 10
let numComparacao2 = 19

console.log(numComparacao1 < numComparacao2)
// 7. Use o operador ternário para verificar se uma pessoa é maior de idade.
let age = 18

console.log(age >= 18 ? 'Você é de maior' : 'Você é de menor')

// 8. Dado um número, mostre se ele é par ou ímpar usando %.
let parOrImpar = 10

console.log(parOrImpar % 2 === 0 ? 'É par' : 'É impar')

// 9. A partir de duas strings, una elas em uma frase completa usando operadores de concatenação.
let meuNome = 'Pedro Elias'
let ponto = '10'

console.log(
  `Olá, ${meuNome}. sua pontuação na prova de Cálculo foi de : ${ponto}`
)

// 10. Atribua um valor a uma variável e depois incremente (++) e decremente (--) essa variável.
let data = 12

console.log(data++)
console.log(data--)

/* **11. Peça um número (por prompt ou variável fixa) e verifique:

– se é positivo
– se é negativo
– ou se é zero** */

let numPositivo = 10

if (numPositivo >= 0) {
  console.log('Esse número é positivo')
} else if (numPositivo < 0) {
  console.log('Esse número é negativo')
} else {
  console.log('Esse número é zero')
}

/* **12. Crie um programa que recebe a nota de um aluno e exibe:

"Aprovado", "Recuperação" ou "Reprovado".* */

// 13. Verifique se um ano informado é bissexto.
// 14. Dado um número de 1 a 7, mostre qual é o dia da semana correspondente.
/* **15. Simule um sistema simples de login:

– usuário correto
– senha correta
Se qualquer um estiver errado, mostre mensagem específica.** */

/* **16. Crie um código que tente converter uma string inválida em número ("abc").

Use try/catch para capturar erro.** */

/* **17. Faça uma função que receba um JSON em string e tente fazer JSON.parse().

Se der erro, mostre "JSON inválido".** */

/* **18. Crie um programa que só permite números positivos.

Se for negativo, lance um erro com throw e capture no catch.** */

// 19. Tente acessar uma propriedade de um objeto inexistente e trate o erro.
// 20. Crie uma função que lança um erro se o parâmetro não for número, e trate esse erro na chamada.

// 21. Crie uma função que recebe um nome e retorna "Olá, <nome>".
// 22. Crie uma função que soma dois números.
// 23. Crie uma função que recebe um array de números e retorna a média.
// 24. Faça uma função que verifica se um número é primo.
/* **25. Crie uma função que recebe uma string e retorna:

– quantidade de letras
– quantidade de vogais
– quantidade de espaços** */

/* **26. Crie uma função que retorna o maior número de um array.

(Sem usar Math.max)** */

/* **27. Crie uma função que simula um caixa eletrônico:

Entrada: valor desejado.
Saída: quantidade de notas (100, 50, 20, 10, 5, 2).** */

// 28. Crie uma função que recebe uma frase e retorna ela “invertida”.
// 29. Crie uma função recursiva que conta até 10.
/* **30. Crie uma função que recebe uma temperatura em Celsius e retorna em Fahrenheit.

Depois, trate erro se não for número.** */
