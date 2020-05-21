'use strict'

var keyValue,
   cal = ''

const displayMath = function (cal) {
   var el = document.getElementById('screen')
   el.style.color = '#50d330';
   el.textContent = cal
}

const displayWarning = function (exception) {
   var el = document.getElementById('screen')
   el.append(' Formato Inválido')
   el.style.color = '#ff1515';
   console.log('Exception thrown: ' + exception)
}

const eventsCalc = function (e) {
   keyValue = e.target.textContent
   if (keyValue === 'Limpiar') {
      cal = ''
      displayMath(cal)
   } else if (keyValue === 'Borrar') {
      cal = cal.slice(0, -1)
      displayMath(cal)
   } else if (keyValue === '=') {
      try {
         cal = eval(cal)
         displayMath(cal)
         cal = ''
      } catch (ex) {
         displayWarning(ex)
      }
   } else {
      cal += keyValue
      displayMath(cal)
   }
}

const init = function () {
   var items = document.getElementsByClassName('item')

   for (const item of items) {
      item.addEventListener('click', eventsCalc)
   }
}

init()