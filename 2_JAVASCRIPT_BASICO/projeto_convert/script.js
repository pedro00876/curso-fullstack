// Cotação de moedad do dia
const USD = 5.52
const EUR = 6.48
const GBP = 7.37

//DOM
const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const footer = document.querySelector('main footer')
const description = document.querySelector('#description')
const result = document.querySelector('#result')

// Função de validação
const validation = () => /\D+/g

//Manipulando o valor de amount para permitir apenas números
amount.addEventListener('input', () => {
  amount.value = amount.value.replace(validation(), '')
})

//Captando o evento de submit do formulario
form.onsubmit = e => {
  e.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurruncy(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurruncy(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurruncy(amount.value, GBP, '£')
      break
    default:
      'Moeda não indentificada'
      break
  }
}

// Função para converter a moeda
const convertCurruncy = (amount, price, symbol) => {
  try {
    // exibindo a cotação das moedas selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Exibir o resultado total
    let total = amount * price
    total = formatCurrencyBRL(total).replace('R$', '')
    result.textContent = `${total} Reais`

    // aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add('show-result')
  } catch (error) {
    // remoce a classe ocultando o footer caso algo dê errado
    footer.classList.remove('show-result')
    console.error(error)
    alert('Não foi possível converter. Tente novamente mais tarde.')
  }
}

// formata a moeda em real brasileiro
const formatCurrencyBRL = value => {
  return (
    Number(value).toLocaleString('pt-BR'),
    {
      style: 'currency',
      currency: 'BRL',
    }
  )
}
