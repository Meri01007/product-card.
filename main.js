// первая карточка
const productCard = document.querySelector ('.product-card');
const changeColorButton = document.querySelector ('#change-color-button');
const googleURL = 'https://google.com'
changeColorButton.addEventListener ('click',() => {
  productCard.style.backgroundColor = '#824cb83c'
  
})

//все карточки 
const productCards = document.querySelectorAll ('.product-card');
const changeAllColorButton = document.querySelector ('#change-allcolor-button');

changeAllColorButton.addEventListener ('click', () => {
  productCards.forEach ((card) => card.style.backgroundColor='#4cb88d3c')
})

//ссылка Гугла
const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener ('click' , openGoogle);

function openGoogle () {
  const answer = confirm('ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ ПЕРЕЙТИ В ГУГЛ');
  if (answer === true) {
    window.open(googleURL)
  }
}

//консольлог

const outputConsoleButton = document.querySelector ('#output-console-log');

outputConsoleButton.addEventListener ('click' , () => outputConsoleLog ('ДЗ #6'))

function outputConsoleLog (message) {
  alert(message)
  console.log(message)
}


const h1 = document.querySelector('.h1');

h1.addEventListener('mouseover', () => h1log(h1.textContent))

function h1log (message){
  console.log(message)
}


const changeColorOffButton = document.querySelector('#change-color-offbutton');

changeColorOffButton.addEventListener('click', () => {
  if (changeColorOffButton.classList.contains('green')) {
    changeColorOffButton.classList.remove('green');
    changeColorOffButton.classList.add('red');
  } else {
    changeColorOffButton.classList.remove('red');
    changeColorOffButton.classList.add('green');
  }
});

