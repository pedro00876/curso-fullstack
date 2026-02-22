// Função que retorna uma promessa

function asyncFunction() {
  return new Promise((resolve, reject) => {
    //simula um aoperação assíncrona
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve('Operação bem sucedida!')
      } else {
        reject('Ocorreu um erro na operação.')
      }
    }, 3000) // simula um atraso de 3 segundos
  })
}

async function fetch() {
  try {
    const response = await asyncFunction()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

fetch()
