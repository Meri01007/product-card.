function forecast(city, temperature){
  console.log( `Сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}
forecast('Гумдаг', 55);

const lightSpeed = 299792458

function checkSpeed (highSpeed){
  if( highSpeed>lightSpeed ){
    console.log ('Сверхсветовая');
  } else if(lightSpeed>highSpeed)
    console.log('Субсветовая скорость');
   else (lightSpeed===lightSpeed) 
    console.log('Скорость света');}

    checkSpeed(299792459)
    checkSpeed(299792457)

    const car = 'Toyota Camry'
    const carPrice = 2500

    function budget(money){
      if(money>=carPrice){
        console.log(`${car} приобретён. Спасибо за покупку!`)
      } else
      {const difference = carPrice - money;{
          console.log(`Вам не хватает ${difference}, Пополните баланс`)
        }}

    }
    budget(3000)
    budget(2000)


function meret(){
  console.log('Функция создана для улучшения аналитических способностей дз7')
}
meret()

var meri = 'учебная переменная вар'
let meri01 = 'учебная переменная лет'
const meri02 = 'учебная переменная консты'