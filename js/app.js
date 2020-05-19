'use strict'

var keyValue,
   cal = ''

var displayMath = function (cal) {
   var el = document.getElementById('screen')
   el.style.color = '#50d330';
   el.textContent = cal
}

var displayWarning = function (exception) {
   var el = document.getElementById('screen')
   el.append(' Formato Inválido')
   el.style.color = '#ff1515';
   console.log('Exception thrown: ' + exception)
}

var eventsMath = function (e) {
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

const items = document.getElementsByClassName('item')

console.log(items.length)


// for (var i = 0; i < items.length; i++) {
//    console.log(i)
//    // items[i].addEventListener('click', eventsMath)
// }
// items.forEach(elem => {
//    elem.addEventListener('click', eventsMath)
// });