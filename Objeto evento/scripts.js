const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

// input.addEventListener('keyup', (e) => {
//     console.log(e.target.attributes[0].nodeValue)
// })
// button.addEventListener('click', (e) => {
//     console.dir(e.target)
// })


const gallery = document.getElementById('gallery')

// gallery.addEventListener('click', (e) => {
//     e.target.classList.add('red');
// })

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    e.preventDefault()
    button.click()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado')
})

button.addEventListener('click', () => {
    input.value = "has hecho click"
})