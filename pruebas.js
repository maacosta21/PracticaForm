//init newUser
let firstLastName
let newUser

//return button
const returnButtonLanguage = document.querySelector('#return-button__language')
const returnButtonPersonalInfo = document.querySelector('#return-button__Personalinfo')

returnButtonLanguage.addEventListener('click', returnFunctionLanguage)
returnButtonPersonalInfo.addEventListener('click', returnFunctionPersonalInfo)

function returnFunctionLanguage() {
    sectionDev.style.display = 'none'
    sectionName.style.display = 'block'
}

function returnFunctionPersonalInfo() {
  personalInfo.style.display = 'none'
  sectionDev.style.display = 'flex'
}
    
//Section name
const inputName = document.querySelector('#nombre')
const buttonName = document.querySelector('#section-name__form')
const sectionName =  document.querySelector('.section-name')

buttonName.addEventListener('submit', buttoNameclick)

//section programming
const sectionDev = document.querySelector('#lenguaje-programacion')
const mostratNombre = document.querySelector('#inner-name')
const programLanguageForm = document.querySelector('#program-language')
const favoriteLanguageInput = document.querySelector('#favorite-language')

programLanguageForm.addEventListener('submit', buttonLenguageclick)

//Section personalInfo
const personalInfo = document.querySelector('#personal-info')
const personalInfoForm = document.querySelector('#personal-info__form')
const personalInfoInputBirth = document.querySelector('#personal-info__birth')
const personalInfoInputID = document.querySelector('#personal-info__id')


personalInfoForm.addEventListener('submit', buttonLPersonalInfoclick)

//functions


function buttoNameclick(event) {
  event.preventDefault()
  firstLastName = inputName.value.split(' ')
  sectionName.style.display = 'none'
  sectionDev.style.display = 'flex'
  newUsers()
} 

function buttonLenguageclick(event) {
  event.preventDefault()
  sectionDev.style.display = 'none'
  personalInfo.style.display = 'flex'
  newUsers()
}

function buttonLPersonalInfoclick(event) {
  event.preventDefault()
  personalInfo.style.display = 'none'
  newUsers()
}

//User Object
class User {
  constructor(firstName, lastName, pLanguage, birthDate, id) {
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteLanguage = pLanguage
    this. birthDate = birthDate
    this.id = id
  }
}

function newUsers() {
  newUser = new User(firstLastName[0], firstLastName[1], favoriteLanguageInput.value, personalInfoInputBirth.value, personalInfoInputID.value)
  mostratNombre.innerHTML = `Hola ${newUser.firstName}`
}

