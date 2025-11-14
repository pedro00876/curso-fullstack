// 1 - var
// Declarando a variavel
var user = "Pedro";

// Substituindo o valor de var
user = "Leticia";

//////////////////////////////////////////////////////////////////////////////

// 2 - Case Sensitive

/*
  Quando  uma linguagem de programação é cas-seneitive significa
  que ela é sensível a letras maiúsculas e minúsculas.

  Por exemplo: "Rodrigo" é considerado deiferente de "rodrigo".
*/

var product = "Teclado mecânico";
console.log(product);

var Product = "Mouse gamer";
console.log(Product);

//////////////////////////////////////////////////////////////////////////////

// 3 - let
// Declarando variável

let user = "Pedrinho";

// Substituindo o valor de let

user = "Pedro";

//////////////////////////////////////////////////////////////////////////////

// 4 - const
// Declarando variável constante (não é possivel alterar o valor dela)

const user = "Pedro";

//////////////////////////////////////////////////////////////////////////////

// 5 - nomes para variaveis
//case-sensitive
const userName = "Pedro";
const username = "Elias";

// RECOMENDAÇÕES camelCase
let productName = "Ventilador";

//////////////////////////////////////////////////////////////////////////////

// 6 - Tipo de dados
// String
let Name = "Pedro";
console.log(typeof Name);

// template literals

let nameUser = "Pedro  Elias";
let email = "pedro@gmail.com";

// passar mais de um parâmetro
console.log(nameUser, email, "teste");

let message = "Olá, " + nameUser + " ! Você logou com o e-mail " + email;
console.log(message);

// template literal!!!

console.log(`Olá, ${nameUser}. Você logou com o e-mail ${email}`);

// Number
console.log(typeof 5);

// boolean
let isLoading = true;
console.log(typeof isLoading);

//////////////////////////////////////////////////////////////////////////////

// 7 - Expressões e operadores
// Operadores aritmétricos

console.log("SOMA: ", 12 + 2);
console.log("SUBTRAÇÃO: ", 12 - 2);
console.log("MULTIPLICAÇÃO: ", 12 * 2);
console.log("DIVISÃO", 12 / 2);
console.log("RESTO DA DIVISÃO", 12 % 2);
console.log("EXPONENCIAL", 12 ** 2);

// incremento e decremento

let number = 10;
number++;

console.log(number);

number--;
console.log(number);

//////////////////////////////////////////////////////////////////////////////

// 8 - Ordem de precedência
// grouping operator

let total1 = 2 + 3 * 4;
console.log(total1);

let total2 = (2 + 3) * 4;
console.log(total2);

let avg = (9.5 + 7 + 5) / 3;
console.log(avg);

// Operadores lógicos

let one = 1;
let two = 2;

// Igual a
console.log(one == 1);
console.log(two == 2);

// Diferente de
console.log(two != 1);
console.log(one != 1);

//Estritamente igual
let three = 3;
let four = 4;

console.log(four === 4);
console.log(four !== 3);

// Maior, menor ou igual
let saldo = 500;
let pagamento = 120;

console.log(saldo > pagamento);
console.log(saldo < pagamento);

saldo = 120;

console.log(saldo >= pagamento);

// Operadores de atribuição
let value;

value = 5;

// operadores lógicos

let email1 = true;
let password = false;

// AND (E) &&
console.log(email1 && password);

// OR (OU) ||
console.log(email1 || password);

// NOT (NEGAÇÃO) !
console.log(!password);

//////////////////////////////////////////////////////////////////////////////

// 9 - Estrutura de condição
// Operador condicional ternario

let age = 21;

console.log(age >= 18 ? "Você pode dirigir" : "Você não pode dirigir");

// Falsy e truthy
/*
  Falsy quando um valor é considerado false e truthy quando é considerado verdadeiro
  em contextos onde um boolean é obrigatorio (condicionais e loops)
*/

console.log("### Exemplos de Falsy ###");
console.log(0 ? "Verdadeiro" : "Falso");
console.log("" ? "Verdadeiro" : "Falso");
console.log(null ? "Verdadeiro" : "Falso");
console.log(undefined ? "Verdadeiro" : "Falso");

console.log("### Exemplos de Truthy ###");
console.log(true ? "Verdadeiro" : "Falso");
console.log({} ? "Verdadeiro" : "Falso");
console.log([] ? "Verdadeiro" : "Falso");
console.log(1 ? "Verdadeiro" : "Falso");

//Condição if (se) e else (se não)
let hour = 11;

if (hour >= 12) {
  console.log("Boa tarde!");
} else {
  console.log("bom dia!");
}

// if else if

let Hour = 18;

if (Hour < 12) {
  console.log("Bom dia!");
} else if (Hour >= 12 && Hour <= 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa tarde!");
}

// switch
let options = 1;

switch (option) {
  case 1:
    console.log("Consultar pedido");
    break;
  case 2:
    console.log("Falar com atendente");
    break;
  case 3:
    console.log("Cancelar pedido");

  default:
    console.log("Opção inválida");
    break;
}

// 10 - Tratamento de exceções

// try {
//   // tenta executar algo
//   console.log(result);
// } catch (error) {
//   // captura o erro para tratar
//   console.log(error);
// } finally {
//   console.log("Fim");
// }

try {
  if (result === 0) {
    throw new Error("O valor é igual a zero");
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim");
}
