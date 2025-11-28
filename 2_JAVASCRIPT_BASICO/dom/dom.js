// visualizar o conteudo do document

console.log(document)

// Acessa o elemento pelo ID
const guest = document.querySelector('#guest-1')
console.log(guest)

// Acessar somente o text
console.log(guest.textContent) //Retorna o conteudo visivel e oculto
console.log(guest.innerHTML) //Retorna o html como texto
console.log(guest.innerText) //Retorna somente o consteudo visivel

const input = document.querySelector('#name')

//Adiciona a classe
//input.classList.add('input-error')

//Remove a classe
//input.classList.remove('input-error')

// Se não tiver a classe adiciona, se não, remove
input.classList.toggle('input-error')
