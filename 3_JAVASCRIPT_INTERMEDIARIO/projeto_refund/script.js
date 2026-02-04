// Seleciona os elementos do formulário
const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const expense = document.querySelector('#expense')
const category = document.querySelector('#category')

// Seleciona os elementos da lista de despesas
const expenseList = document.querySelector('ul')
const expenseTotal = document.querySelector('aside header p span')
const expenseSum = document.querySelector('aside header h2')

// Adiciona um evento de input ao campo de valor
amount.oninput = () => {
  // Remove todos os caracteres que não são dígitos
  let value = amount.value.replace(/\D/g, '')

  // transforma o valor em número e divide por 100 para considerar os centavos
  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  // Formata o valor como moeda brasileira (BRL)
  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return value
}

// Captura o evento de envio do formulário
form.onsubmit = event => {
  event.preventDefault()

  // Cria um novo objeto de despesa com os valores do formulário
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense)
}

// Adiciona uma nova despesa na lista
function expenseAdd(newExpense) {
  try {
    // Cria o elemento da para adicionar na lista
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    // Cria o icone da categoria
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute('alt', newExpense.category_name)

    // Cria o nome da despesa
    const expenseName = document.createElement('strong')
    expenseName.textContent = newExpense.expense

    // Cria a categoria da despesa
    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = newExpense.category_name

    // Adiciona a descrição da despesa
    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')

    // Adiciona o nome e a categoria na div de informações
    expenseInfo.append(expenseName, expenseCategory)

    // Adiciona o valor da despesa
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`

    //Adiciona o icone de remover
    const removeIcon = document.createElement('img')
    removeIcon.classList.add('remove-icon')
    removeIcon.setAttribute('src', 'img/remove.svg')
    removeIcon.setAttribute('alt', 'Remover despesa')

    // Adiciona o icone ao item da despesa
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

    // Adiciona o item na lista de despesas
    expenseList.append(expenseItem)

    // Atualiza os totais
    updateTotals()

    // Reseta o formulário
    resetForm()
  } catch (error) {
    console.error('Erro ao adicionar despesa:', error)
  }
}

// Atualiza os totais
function updateTotals() {
  try {
    // recupera os elementos dos totais
    const items = expenseList.children

    // Atualiza a quantidade de itens da lista
    expenseTotal.textContent = `${items.length} ${items.length > 1 ? 'despesas' : 'despesa'}`

    // Variavel para incrementar o total
    let total = 0
    // Percorre os itens da lista para somar os valores
    for (let i = 0; i < items.length; i++) {
      const itemAmountEl = items[i].querySelector('.expense-amount')

      if (!itemAmountEl) return

      let value = Number(
        itemAmountEl.textContent
          .replace(/\./g, '')
          .replace(',', '.')
          .replace(/[^\d.]/g, '')
      )

      // converte para float
      value = parseFloat(value)

      // Verifica se o valor é um número válido
      if (isNaN(value)) {
        return alert(
          'Não foi possível calcular o total. Verifique os valores das despesas.'
        )
      }

      // Incrementa o total
      total += Number(value)
    }

    // Atualiza o total na interface
    expenseSum.innerHTML = `<small>R$</small>${formatCurrencyBRL(total).toUpperCase().replace('R$', '')}`
  } catch (error) {
    console.error('Erro ao atualizar totais:', error)
  }
}

// Captura o evento de clique na lista de despesas para remover um item
expenseList.onclick = event => {
  if (event.target.classList.contains('remove-icon')) {
    // Obtem a li pai do icone clicado
    const item = event.target.closest('.expense')

    // Remove o item da lista
    item.remove()
  }
  // Atualiza os totais
  updateTotals()
}

function resetForm() {
  expense.value = ''
  category.value = ''
  amount.value = ''

  // coloca o foco no campo de despesa
  expense.focus()
}
