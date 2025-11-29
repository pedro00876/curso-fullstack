// visualizar o conteudo do document

console.log(document)

// Acessa o elemento pelo ID
const guest = document.querySelector('#guest-1')
console.log(guest)

// Acessar somente o text
console.log(guest.textContent) //Retorna o conteudo visivel e oculto
console.log(guest.innerHTML) //Retorna o html como texto
console.log(guest.innerText) //Retorna somente o consteudo visivel



//Adiciona a classe
//input.classList.add('input-error')

//Remove a classe
//input.classList.remove('input-error')

// Se não tiver a classe adiciona, se não, remove
input.classList.toggle('input-error')



// Criando elemento
const guests = document.querySelector('ul')

const newGuest = document.createElement('li')
newGuest.classList.add('guest')
const guestName = document.createElement('span')
const guestSurname  = document.createElement('span')

guestName.textContent('Elias')
guestSurname.textContent('Evêncio')

// Adiciona após o utimo filho.
newGuest.append(guestName, guestSurname)
guests.append(newGuest)



// Manipulando atributos
const input = querySelector("input")
input.setAttribute('type', 'file')

// Eventos
window.addEventListener('click', (e) => {
    e.preventDefault()

    // Retorna todas as informações do evento
    console.log(e)

    console.log(e.target)
})




