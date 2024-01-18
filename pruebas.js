//init newUser
let firstLastName
let newUser

//Section name
const inputName = document.querySelector('#nombre')
const buttonName = document.querySelector('#button-name')
const sectionName =  document.querySelector('#nombre-div')

buttonName.addEventListener('submit', buttoNameclick)

//section programming
const sectionDev = document.querySelector('#lenguaje-programacion')
const mostratNombre = document.querySelector('#inner-name')
const programLanguage = document.querySelector('#program-language')
const favoriteLanguage = document.querySelector('#favorite-language')

programLanguage.addEventListener('submit', buttonLenguageclick)

//Section personalInfo
const personalInfo = document.querySelector('#personal-info')


//hidden elements
sectionDev.style.display = 'none'
personalInfo.style.display = 'none'

//functions


function buttoNameclick(event) {
  event.preventDefault()
  firstLastName = inputName.value.split(' ')
  sectionName.style.display = 'none'
  sectionDev.style.display = 'flex'
} 

function buttonLenguageclick(event) {
  event.preventDefault()
  sectionDev.style.display = 'none'
  personalInfo.style.display = 'flex'
  newUsers()
}

//User Object
class User {
  constructor(firstName, lastName, pLanguage) {
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteLanguage = pLanguage
  }
}

function newUsers() {
  newUser = new User(firstLastName[0], firstLastName[1], favoriteLanguage.value)
  mostratNombre.innerHTML = `Hola ${newUser.firstName}`
}

